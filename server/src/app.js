'use-strict';

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve('../client/build')));

app.get('/', (req, res) => res.sendFile(path.resolve('../client/build/index.html')));
app.get('/poems', (req, res) => res.sendFile(path.resolve('./data/poems.json')));

module.exports = app;
