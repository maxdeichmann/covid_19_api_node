const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./db')
require('./cron')

const app = express()

// middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', require('./lib/routes/api'))
app.use('/users', require('./lib/routes/auth'))
require('./lib/config/passport');
module.exports = app