import React from "react";
import dynamic from 'next/dynamic';
import styles from "./CenterSection.module.scss";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import { useCountriesCases } from "../../contexts/CountriesCasesContext";

const AllCountriesTable = dynamic(() => import("./AllCountriesTable/AllCountriesTable"), { ssr: false });

const CenterSection = () => {
  const {
    tHead,
    topCountriesData,
    countriesCasesData,
    mapVizData,
    sortedBy,
    sortTableHandler,
  } = useCountriesCases();

  return (
    <section className={styles.center}>
      <GeneralInfo topCountriesData={topCountriesData} allCountriesData={mapVizData} />
      <AllCountriesTable
        tableHeadData={tHead}
        tableBodyData={countriesCasesData}
        sortedBy={sortedBy}
        sortTableHandler={sortTableHandler}
      />
    </section>
  )
}

export default CenterSection;
