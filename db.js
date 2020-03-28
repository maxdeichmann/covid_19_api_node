const mongoose = require('mongoose')
const credentials = require('./config')
const Country = require("./lib/models/country.js")
const { connectionString } = credentials.mongo

if(!connectionString) {
  console.error('MongoDB connection string missing!')
  process.exit(1)
}
mongoose.connect(connectionString)
const db = mongoose.connection
db.on('error', err => {
  console.error('MongoDB error: ' + err.message)
  process.exit(1)
})
db.once('open', () => console.log('MongoDB connection established'))


// DB operations
module.exports = {

  addCountry: (country, days) => {
    
    var query = { name: country }
    var update = { 
      updated_at: new Date(),
      days: days
    }
    var options = { upsert: true };
    return Country.findOneAndUpdate(query, update, options)
   },

  getAllCountries: (country) => {
    console.log("filter, ",country)
    if (country === undefined) {
      return Country.find()
    } else {
      return Country.find({name: country})
    }
    
  }

}