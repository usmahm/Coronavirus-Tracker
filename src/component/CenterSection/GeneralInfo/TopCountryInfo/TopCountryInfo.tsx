import React from "react";
import styles from "./TopCountryInfo.module.scss";
import { CountryCaseData } from "../../../../types";
import { numberWithCommas } from "../../../../utils/formatters";

type ComponentProps = {
  countryData: CountryCaseData[]
}

const TopCountryInfo: React.FC<ComponentProps> = ({ countryData }) => {
  return (
    <div className={styles.country}>
      <div className={styles.country__name}>
        {countryData[0].flag && <img src={countryData[0].flag} alt="" />}
        <p className={styles.name}>{countryData[0].val}</p>
      </div>
      <div className={styles.country__cases}>
          <div className={styles.confirmed}>
              <p>CONFIRMED</p>
              <p>
                {typeof countryData[1].val === 'string' 
                  ? countryData[1].val
                  : numberWithCommas(countryData[1].val)}
              </p>
          </div>
          <div className={styles.recovered}>
              <p>RECOVERED</p>
              <p>
                {typeof countryData[5].val === 'string' 
                  ? countryData[5].val
                  : numberWithCommas(countryData[5].val)}
              </p>
          </div>
          <div className={styles.deaths}>
              <p>DEATHS</p>
              <p>
                {typeof countryData[3].val === 'string' 
                  ? countryData[3].val
                  : numberWithCommas(countryData[3].val)}
              </p>
          </div>
      </div>
    </div> 
  )
}

export default TopCountryInfo;
