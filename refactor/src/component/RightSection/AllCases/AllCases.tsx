import React from "react";
import styles from "./AllCases.module.scss";

type Props = {
  total: {
    total: number;
    totalRecovered: number;
    totalActive: number;
    totalDeaths: number;
  };
  type: 'TOTAL' | 'DAILY'
}

const AllCases: React.FC<Props> = ({ total, type }) => {
  return (
    <div className={styles.totalCases}>
      <header>
          <p>Coronavirus Cases <span>- Worldwide</span></p>
          <p>{type === 'TOTAL' ? 'Total' : 'TODAY'}</p>
      </header>
      <main>
        <div className={styles.totalConfirmed}>
          <p className={styles.num}>{total.total}</p>
          <p>Total Confirmed Cases</p>
        </div>
        <div className={styles.totalBreakdown}>
          {type === 'TOTAL' ? (
            <img className={styles.chart} src="./img/pie chart.png" alt="" />
          ) : (
            <div />
            // <svg className={styles.chart}><use xlink:href="#disease-prevention" /></svg>
          )}
          <div className={styles.totalBreakdown__active}>
              <p className={styles.num}>{total.totalActive}</p>
              <p>Active Cases</p>
          </div>
          <div className={styles.totalBreakdown__rec}>
              <p className={styles.num}>{total.totalRecovered}</p>
              <p>Recovered</p>
          </div>
          <div className={styles.totalBreakdown__deaths}>
              <p className={styles.num}>{total.totalDeaths}</p>
              <p>Deaths</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AllCases;
