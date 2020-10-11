import { elements, formatNumber } from './base';

export const renderOverallCases = data => {
    const markup = `
        <main>
            <div class="total-confirmed">
                <p class="num">${formatNumber(data.totalConfimed)}</p>
                <p>Total Confirmed Cases</p>
            </div>
            <div class="total-breakdown">
                <div id="chartdiv" class="chart"></div>
                <div class="total__active">
                    <p class="num">${formatNumber(data.activeCases)}</p>
                    <p>Active Cases</p>
                </div>
                <div class="total__rec">
                    <p class="num">${formatNumber(data.recovered)}</p>
                    <p>Recovered</p>
                </div>
                <div class="total__deaths">
                    <p class="num">${formatNumber(data.deaths)}</p>
                    <p>Deaths</p>
                </div>
            </div>
        </main>
    `;

    elements.totalCasesDiv.insertAdjacentHTML('beforeend', markup);
} 

export const renderTodayCases = data => {
    const markup = `
        <main>
            <div class="total-confirmed">
                <p class="num">${formatNumber(data.totalConfirmed)}</p>
                <p>Total Confirmed Cases</p>
            </div>
            <div class="total-breakdown">
                <img class="chart" src="./img/disease-prevention.svg" alt="">
                <div class="total__active">
                    <p class="num">${formatNumber(data.critical)}</p>
                    <p>Critical</p>
                </div>
                <div class="total__rec">
                    <p class="num">${formatNumber(data.recovered)}</p>
                    <p>Recovered</p>
                </div>
                <div class="total__deaths">
                    <p class="num">${formatNumber(data.deaths)}</p>
                    <p>Deaths</p>
                </div>
            </div>
        </main>
    `;
    elements.dailyCasesDiv.insertAdjacentHTML('beforeend', markup);
}

export const renderLastUpdatedTime = (timeObj) => {
    const markup = `
        Last updated <span>${timeObj.month} ${timeObj.date}, ${timeObj.year} ${timeObj.hours}:${timeObj.min} (${timeObj.timezone})</span>
    `;
    elements.lastUpdatedTime.innerHTML = markup;
}
