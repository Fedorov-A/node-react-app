'use-strict';

const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => res.send('Привет!'));

app.use(express.json());
app.use(cors());

module.exports = app;
