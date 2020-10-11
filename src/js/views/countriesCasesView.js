import { elements, formatNumber } from './base';

const createAllCasesMarkup = (country, index) => {
    const backgroundColor = index % 2 === 0 ? '' : 'grey-background';
    const markup = `
        <li class="country-data ${backgroundColor}">
            <div class="country-name"><img src="${country.flag}" alt="${country.countryName}"><p>${country.countryName}</p></div>
            <p class="total-cases">${formatNumber(country.totalCases)}</p>
            <p class="new-cases">${formatNumber(country.newCases)}</p>
            <p class="total-deaths">${formatNumber(country.totalDeaths)}</p>
            <p class="new-deaths">${formatNumber(country.newDeaths)}</p>
            <p class="total-recovered">${formatNumber(country.totalRec)}</p>
            <p class="active-cases">${formatNumber(country.activeCases)}</p> 
        </li>
    `
    elements.allCountriesCases.insertAdjacentHTML('beforeend', markup);
};

const createTopCountriesMarkup = (data) => {
    const markup = `
        <div class="country">
            <div class="country__name">
                <img src="${data.flag}" alt="">
                <p class="name">${data.countryName}</p>
            </div>
            <div class="cases">
                <div class="confirmed">
                    <p>CONFIRMED</p>
                    <P>${formatNumber(data.totalCases)}</P>
                </div>
                <div class="recovered">
                    <p>RECOVERED</p>
                    <P>${formatNumber(data.totalRec)}</P>
                </div>
                <div class="deaths">
                    <p>DEATHS</p>
                    <P>${formatNumber(data.totalDeaths)}</P>
                </div>
            </div>
        </div>
    `;
    // console.log(markup)

    elements.topCountriesDiv.querySelector('main').insertAdjacentHTML('beforeend', markup);
}

export const renderTopCountries = (data) => {
    console.log(data.slice(0, 4))
    const topFour = data.slice(0, 4);
    topFour.forEach((el) => createTopCountriesMarkup(el))
}

export const renderAllCountriesCases = (countryCases) => {
    let name = countryCases
    name.forEach((el, index) => createAllCasesMarkup(el, index));
}

