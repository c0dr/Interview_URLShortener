const express = require('express');
const path = require('path');
const logger = require('morgan');
const LinkRouter = require('./routes/Link');
var cors = require('cors')


const app = express();

// Not a good idea to enable cors without any checks, but for a prototype this wil ldo
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'frontend/build')));

app.use('/Links', LinkRouter);

module.exports = app;
