import React from 'react';
import Axios from 'axios';
import { Button, Table } from 'antd';
import './App.css';

class App extends React.Component {
    constructor(props) 
    {
      super(props);
      this.state = { data: [] };
      this.state = { columns: [] };
    }

    render() {
      return <div className="App">
        <header className="App-header">
          <p>
            Привет!
          </p>
          <Table dataSource={this.state.data} columns={this.state.columns}></Table>
        </header>
      </div>;
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
              key: 'name',
            },
            {
              title: 'Автор',
              dataIndex: 'author.name',
              key: 'author.name',
            },
            {    
              title: 'Дата',
              dataIndex: 'date',
              key: 'date',
            }
          ]}));
      })
      .catch((err) => {
        console.log(err);
      });
    }
}

export default App;
