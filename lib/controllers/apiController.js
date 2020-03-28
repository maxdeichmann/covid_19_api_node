const db = require('../../db')

exports.home = (req, res) => {
  return res.send("hello")
}

exports.getAllCountries = async (req, res) => {
  try {
    let country = req.params.name
    countries = await db.getAllCountries(country)
    res.send(countries)
  } catch (e) {
    res.send(500, e)
  }
}

exports.getCountry = async (req, res) => {
  try {
    let country = req.params.name
    countries = await db.getAllCountries(country)
    res.send(countries)
  } catch (e) {
    res.send(500, e)
  }
}

exports.addCountry = async(req, res) => {
  try {
    req.body.forEach( async (country) => {
      await db.addCountry(country)
    })
    res.send({ result: 'success' })
  } catch (e){
    res.send(500, e)
  }
}