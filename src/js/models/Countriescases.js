import 'babel-polyfill';
import axios from 'axios';
import sort from 'fast-sort';
import { elements } from '../views/base';

// Test
// import { cases } from './data'

export default class CountriesCases {
    constructor() {
        this.countriesCases = [];
    }

    async getCountriesCases() {
        try {
            const res = await axios('https://disease.sh/v3/covid-19/countries?yesterday&sort');
            // const res = await axios('https://corona.lmao.ninja');
            // const res = cases;
            console.log('result', res);
            this.allCountriesCases = res.data;
            // console.log(res)
        } catch (error) {
            console.log('erororororo', error)
        }
    }

    parseCountriesData() {

        const allCountriesCasesArray = this.allCountriesCases

        // Parse each country's data into the countries Array
        allCountriesCasesArray.forEach(country => {
            let countryData = {
                countryName: country.country,
                totalCases: country.cases,
                newCases: country.todayCases,
                totalDeaths: country.deaths,
                newDeaths: country.todayDeaths,
                totalRec: country.recovered,
                activeCases: country.active,
                flag: country.countryInfo.flag,
                updated: country.updated,
                id: country.countryInfo.iso2
            };

            this.countriesCases.push(countryData);
        })
        sort(this.countriesCases).desc(u => u.totalCases);
        // console.log('here')
        // console.log(this.countriesCases)
    }

    sortCountriesData(el, data) {
      const sortParam = el.dataset.sortParam;
      const sortby = el.dataset.sortby;

      if (sortby === 'desc') {
        sort(data).desc(sortParam);
        // elements.allCountriesCases.querySelectorAll('header div p').dataset.sortby = asc 
        el.dataset.sortby = 'asc';
        return data;
      } else if (sortby === 'asc') {
        sort(data).asc(sortParam);
        el.dataset.sortby = 'desc';
        return data;
      }
    }
} 