import React from "react";
import dynamic from 'next/dynamic';

import TopCountryInfo from "./TopCountryInfo/TopCountryInfo";
import { CountryCaseData, MapVizDataType } from "../../../types";
import styles from "./GeneralInfo.module.scss";

const MapViz = dynamic(() => import("./MapViz/MapViz"), { ssr: false });

type ComponentProps = {
  topCountriesData: CountryCaseData[][];
  allCountriesData: MapVizDataType[];
}

const GeneralInfo: React.FC<ComponentProps> = ({ topCountriesData, allCountriesData }) => {
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
          <MapViz allCountriesData={allCountriesData}  />
        </main>
      </div>
      <div className={styles.topCountries}>
        <header>
          <p>Top Countries</p>
        </header>
        <main>
          {topCountriesData.length ? topCountriesData.map((countryData) => (
            <TopCountryInfo key={countryData[0].val} countryData={countryData} />
          )) : null}
        </main>
      </div>
    </section>
  )
}

export default GeneralInfo;
