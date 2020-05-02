'use-strict';

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.get('/', (req, res) => res.sendFile(path.resolve('../client/build/index.html')));
app.get('/poems', (req, res) => res.sendFile(path.resolve('./data/poems.json')));

app.use(express.json());
app.use(express.static(path.resolve('../client/build')));
app.use(cors());

module.exports = app;
