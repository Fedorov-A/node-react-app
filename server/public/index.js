'use-strict';

const config = require('config');
const app = require('../src/app');

const PORT = config.get('port');

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));
