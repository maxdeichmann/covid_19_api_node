const cron = require("node-cron");
const {StringStream} = require("scramjet");
const request = require("request");
const db = require('./db')


cron.schedule("* * * * *", async() => {
  try {
    console.log("attempt cronjob");

    dataSet = {}

    request.get("https://covid.ourworldindata.org/data/ecdc/full_data.csv")
      .pipe(new StringStream())
      .CSVParse()
      .consume(entry => {
        country = entry[1]
        if (country !== "location") {
          if (!dataSet[country]) {
            dataSet[country] = [];
          }
          dataSet[country].push({date: entry[0], new_cases: entry[2], new_deaths: entry[3], total_cases: entry[4],total_deaths: entry[5]})
        }
      })
      .then(async() => {
        for (const [key, value] of Object.entries(dataSet)) {
          await db.addCountry(key, value)
        }
        console.log("succeeded cronjob")
      })
    } catch (e) {
      console.log("cron failed with error", e)
    }
});


