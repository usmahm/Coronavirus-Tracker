import React from "react";
import styles from "./GeneralInfo.module.scss";
import TopCountryInfo from "./TopCountryInfo/TopCountryInfo";


const GeneralInfo = () => {
  const data = {
    country: 'NIG',
    flag: '',
    totalConfirmed: 50000,
    totalRecovered: 900,
    totalDeaths: 3000,
  }

  return (
    <section className={styles.generalInfo}>
      <div className={styles.map}>
          <header>
              <p>COVID-19 <span>- Affected Areas</span></p>
              <div className={styles.topCasesLegend}>
                  <div className={styles.most}>
                      <span></span>
                      <p>Most Affected</p>
                  </div>
                  <div className={styles.less}>
                      <span></span>
                      <p>Less Affected</p>
                  </div>
              </div>
          </header>
          <main>
              {/* <div style="width: 100%; height: 100%;" id="map-div">

              </div> */}
              {/* <!-- <img src="./img/map.png" alt="Map Showning Cases by country"> --> */}
          </main>
      </div>
      <div className={styles.topCountries}>
          <header>
              <p>Top Countries</p>
          </header>
          <main>
            <TopCountryInfo data={data} />
          </main>
      </div>
    </section>
  )
}

export default GeneralInfo;
