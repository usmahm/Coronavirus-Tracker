import React from "react";
import styles from "./TopCountryInfo.module.scss";

type ComponentProps = {
  data: {
    country: String;
    flag: String;
    totalConfirmed: number;
    totalRecovered: number;
    totalDeaths: number;
  };
}

const TopCountryInfo: React.FC<ComponentProps> = ({ data }) => {
  return (
    <div className={styles.country}>
      <div className={styles.country__name}>
        <img src={data.flag} alt="" />
        <p className={styles.name}>{data.country}</p>
      </div>
      <div className={styles.country__cases}>
          <div className={styles.confirmed}>
              <p>CONFIRMED</p>
              <p>{data.totalConfirmed}</p>
          </div>
          <div className={styles.recovered}>
              <p>RECOVERED</p>
              <p>{data.totalRecovered}</p>
          </div>
          <div className={styles.deaths}>
              <p>DEATHS</p>
              <p>{data.totalDeaths}</p>
          </div>
      </div>
    </div> 
  )
}

export default TopCountryInfo;
