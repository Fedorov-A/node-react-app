'use-strict';

const config = require('config');
const app = require('./server/app');

const PORT = config.get('port');

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
