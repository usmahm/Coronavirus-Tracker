export const elements = {
    allCountriesCases: document.querySelector('#all-countries ul'),
    lastUpdatedTime: document.querySelector('.last-updated-info'),
    totalCasesDiv: document.getElementById('total-cases'),
    dailyCasesDiv: document.getElementById('total-cases__daily'),
    topCountriesDiv: document.getElementById('top-countries')
}

export const colours = {
    deepBlue: '#001233',
    red: '#e85347',
    green: '#1ee0ac',
    purple: '#3f506f'
}

/**
 * Converts numbers to the form with comma seperating each 3 digits
 */
export const formatNumber = (num) => {
    const numArr = num.toString().split("");
    let newNum = numArr[numArr.length - 1];
    
    let length = 2; 
    for (var i = numArr.length - 2; i > -1; i--) {
        if (length/3 - Math.floor(length/3) === 0 && i !== 0) {
            newNum = `,${numArr[i]}` + newNum;
        } else {
            newNum = numArr[i] + newNum;
        }
        length++
    }
    return newNum
}