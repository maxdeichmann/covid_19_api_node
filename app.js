const express = require('express')
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
require('./db')
require('./cron.js')


const handlers = require('./lib/handlers.js')

const app = express()
const port = process.env.PORT || 3000

// middlewares
app.use(bodyParser.json())


app.get("/", handlers.home)
app.get("/countries/:name", handlers.getCountries)


app.listen(port, () => {
  console.log(`Express started in ` +
`${app.get('env')} mode at http://localhost:${port}` +
`; press Ctrl-C to terminate.`)
})