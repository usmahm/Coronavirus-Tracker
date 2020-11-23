import 'babel-polyfill';
import axios from 'axios';
import sort from 'fast-sort';

import { totalCasesData } from './data'

export default class TotalCases {
    constructor() {
        
    }

    async getTotalCases () {
        try {
            // const res = await axios("https://corona.lmao.ninja/v2/all?yesterday");
            // console.log(totalCasesData)
            const res = totalCasesData;
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