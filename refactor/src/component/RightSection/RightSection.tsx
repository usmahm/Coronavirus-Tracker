import React from "react";
import styles from "./RightSection.module.scss";
import AllCases from "./AllCases/AllCases";
import AdviceFooter from "./AdviceFooter/AdviceFooter";


const RightSection = () => {
  const total = {
    total: 50000,
    totalRecovered: 900,
    totalActive: 0,
    totalDeaths: 3000,
  }
  return (
    <section className={styles.brief}>
      <AllCases type="TOTAL" total={total}  />
      <AllCases type="DAILY" total={total} />
      <AdviceFooter />
    </section>
  )
}

export default RightSection;
