import 'babel-polyfill';
import axios from 'axios';
import sort from 'fast-sort';

const cases = {
    "data": {
      "updated": 1602318702254,
      "cases": 37139812,
      "todayCases": 41641,
      "deaths": 1073149,
      "todayDeaths": 932,
      "recovered": 27912579,
      "todayRecovered": 21995,
      "active": 8154084,
      "critical": 68440,
      "casesPerOneMillion": 4765,
      "deathsPerOneMillion": 137.7,
      "tests": 696201733,
      "testsPerOneMillion": 89490.71,
      "population": 7779597646,
      "oneCasePerPeople": 0,
      "oneDeathPerPeople": 0,
      "oneTestPerPeople": 0,
      "activePerOneMillion": 1048.14,
      "recoveredPerOneMillion": 3587.92,
      "criticalPerOneMillion": 8.8,
      "affectedCountries": 216
    },
    "status": 200,
    "statusText": "OK",
    "headers": {
      "content-type": "application/json; charset=utf-8"
    },
    "config": {
      "url": "https://corona.lmao.ninja/v2/all?yesterday",
      "headers": {
        "Accept": "application/json, text/plain, */*"
      },
      "transformRequest": [
        null
      ],
      "transformResponse": [
        null
      ],
      "timeout": 0,
      "xsrfCookieName": "XSRF-TOKEN",
      "xsrfHeaderName": "X-XSRF-TOKEN",
      "maxContentLength": -1,
      "maxBodyLength": -1,
      "method": "get"
    },
    "request": {}
  }

export default class TotalCases {
    constructor() {
        
    }

    async getTotalCases () {
        try {
            // const res = await axios("https://corona.lmao.ninja/v2/all?yesterday");
            const res = cases;
            // console.log(res)
            this.totalCases = res.data;
        } catch (err) {
            console.log(err)
        }
    }

    parseOverallCases (totalCasesObj) {
        this.overallCases = {
            totalConfimed: totalCasesObj.cases,
            activeCases: totalCasesObj.active,
            recovered: totalCasesObj.recovered,
            deaths: totalCasesObj.deaths
        }
    }

    parseTodayCases (totalCasesObj) {
        this.todayCases = {
            totalConfirmed: totalCasesObj.todayCases,
            deaths: totalCasesObj.todayDeaths,
            recovered: totalCasesObj.todayRecovered,
            critical: totalCasesObj.critical
        }
    }

     /**
     * Converts Timestamp(TS) to standard time format
     */
    parseUpdatedTime() {
        const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
     
        // console.log(this.totalCases)
        const latestTsMs = this.totalCases.updated;
        const dateObj = new Date(latestTsMs);
        
        const timeObj ={
            month: monthArr[dateObj.getMonth()],
            date: ('0' + dateObj.getDate()).slice(-2),
            year: dateObj.getFullYear(),
            hours: ('0' + dateObj.getHours()).slice(-2),
            min: ('0' + dateObj.getMinutes()).slice(-2),
            timezone: `${dateObj.toString().split(' ')[5].slice(0, 3)} ${dateObj.toString().split(' ')[5].slice(3, 6)}`,
        }
        // console.log(timeObj)
        return timeObj;
    }
}