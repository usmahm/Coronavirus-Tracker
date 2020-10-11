import CountriesCases from './models/Countriescases';
import TotalCases from './models/TotalCases';
import * as countryCasesView from './views/countriesCasesView';
import * as totalCasesView from './views/totalCasesView';
import * as dataVisView from './views/dataVisView';
import 'babel-polyfill';


/** Global state of the app
 * Countries cases
 */
const state = {}
window.state = state

/**
 * Countries Cases Controller
 */

const controlCountriesCases = async () => {
    state.countriesCases = new CountriesCases();
    
    // Get countries cases data 
    await state.countriesCases.getCountriesCases();
    state.countriesCases.parseCountriesData();

    // Render Map of Overall Cases 
    dataVisView.renderMapVis(state.countriesCases.countriesCases);



    // Render all countries cases to the DOM 
    countryCasesView.renderAllCountriesCases(state.countriesCases.countriesCases);
    countryCasesView.renderTopCountries(state.countriesCases.countriesCases);
    
}

controlCountriesCases()

/**
 * Total Cases Controller
 */

const  controlTotalCases = async () => {
    state.totalCases = new TotalCases();

    // Get Total Cases Data
    await state.totalCases.getTotalCases();
    state.totalCases.parseOverallCases(state.totalCases.totalCases);
    state.totalCases.parseTodayCases(state.totalCases.totalCases);

    // Render Total Cases Data
    totalCasesView.renderOverallCases(state.totalCases.overallCases);
    totalCasesView.renderTodayCases(state.totalCases.todayCases)

    // Render Pie-chart of Overall Cases 
    dataVisView.renderPieChartVis(state.totalCases.overallCases);

    // Get last updated data
    state.updatedTime = state.totalCases.parseUpdatedTime();

    // Render Last updated time
    totalCasesView.renderLastUpdatedTime(state.updatedTime);

}

controlTotalCases();