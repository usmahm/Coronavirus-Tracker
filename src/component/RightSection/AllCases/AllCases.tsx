import React from "react";
import dynamic from 'next/dynamic';

import { TotalCasesDataType } from "../../../types";
import { numberWithCommas } from "../../../utils/formatters";
import PreventionIcon from '../../../../public/icons/prevention.svg'
import styles from "./AllCases.module.scss";

const PieChart = dynamic(() => import("./PieChart/PieChart"), { ssr: false });

type Props = {
  total: TotalCasesDataType | null;
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
          <p className={styles.num}>{total?.totalConfirmed ? numberWithCommas(total.totalConfirmed) : total?.totalConfirmed}</p>
          <p>Total Confirmed Cases</p>
        </div>
        <div className={styles.totalBreakdown}>
          {type === 'TOTAL' ? (
            <>
              {total && <PieChart data={total} />}
            </>
          ) : (
            <PreventionIcon className={styles.chart} />
          )}
          <div className={styles.totalBreakdown__active}>
            {type === 'TOTAL' && total?.totalActive ? (
              <>
                <p className={styles.num}>{total?.totalActive ? numberWithCommas(total.totalActive) : ''}</p>
                <p>Active Cases</p>
              </>
            ) : (
              <>
                <p className={styles.num}>{total?.totalCritical ? numberWithCommas(total.totalCritical) : ''}</p>
                <p>Critical Cases</p>
              </>
            )}
          </div>
          <div className={styles.totalBreakdown__rec}>
              <p className={styles.num}>{total?.totalRecovered ? numberWithCommas(total?.totalRecovered) : ''}</p>
              <p>Recovered</p>
          </div>
          <div className={styles.totalBreakdown__deaths}>
              <p className={styles.num}>{total?.totalDeaths ? numberWithCommas(total?.totalDeaths) : total?.totalDeaths}</p>
              <p>Deaths</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AllCases;
