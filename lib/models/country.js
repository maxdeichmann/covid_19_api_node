const mongoose = require('mongoose')

const countrySchema = mongoose.Schema({
  name: String,
  updated_at: Date,
  days: [{  
      total_deaths: Number,
      total_cases: Number,
      new_deaths: Number,
      new_cases: Number,
      date: Date
  }]
})


const Country = mongoose.model('Country', countrySchema)
module.exports = Country