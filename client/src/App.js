import React from 'react';
import Axios from 'axios';
import { Button, Table, Card } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import '.'

class App extends React.Component {
  render() {
    return <div className="App-header">
      <Hello />
      <Main />
    </div>;
  }
}

class Hello extends React.Component {
  render() {
    return <div className="Margin">Привет!</div>;
  }
}

class Main extends React.Component {
  render() {
    return <Switch>
      <Route exact path="/" component={Poems}/>
      <Route path="/author" component={AuthorInfo} />}/>
    </Switch>
  }
}

class Poems extends React.Component {
  constructor(props) 
    {
      super(props);
      this.state = { 
        data: [],
        columns: []
      };
    }

    render() {
      return <Table dataSource={this.state.data} columns={this.state.columns}></Table>;
    }

    componentDidMount() {
      Axios.get('http://localhost:8800/poems')
      .then((res) => {
        this.setState(() => ({
          data: res.data,
          columns: [
            {
              title: 'Наименование книги',
              dataIndex: 'name',
            },
            {
              title: 'Автор',
              render: (data) => (<li>
                <Link to={{ pathname: "/author", state: data.author }}> {data.author.name} </Link>
              </li>)
            },
            {    
              title: 'Дата',
              dataIndex: 'date',
            }
          ]}));
      })
      .catch((err) => {
        console.log(err);
      });
    }
}

class AuthorInfo extends React.Component {
  render() {
    return <>
      <Card style={{ width: 240 }} cover={<img src={this.props.location.state.photo}></img>}>
        <Card.Meta title={`${this.props.location.state.birthDate} - ${this.props.location.state.deathDate}`} />
      </Card>
      <Button className="Margin">
        <Link to="/">Назад</Link>
      </Button>
      </>;
  }
}

export default App;
