import React from "react";
import styles from "./CenterSection.module.scss";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import AllCountriesTable from "./AllCountriesTable/AllCountriesTable";


const CenterSection = () => {
  const tHead = ['Country', 'Total Cases', 'New Cases', 'Total Deaths', 'New Deaths', 'Total Recovered', 'Active Cases']
  return (
    <section className={styles.center}>
      <GeneralInfo />
      <AllCountriesTable tableHeadData={tHead} />
    </section>
  )
}

export default CenterSection;
