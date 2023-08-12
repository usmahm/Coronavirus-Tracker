import React from "react";
import styles from "./RightSection.module.scss";
import AllCases from "./AllCases/AllCases";
import AdviceFooter from "./AdviceFooter/AdviceFooter";
import { useTotalCases } from "../../contexts/TotalCasesContext";


const RightSection = () => {
  const { totalData, todayData } = useTotalCases();

  return (
    <section className={styles.brief}>
      <AllCases type="TOTAL" total={totalData}  />
      <AllCases type="DAILY" total={todayData} />
      <AdviceFooter />
    </section>
    // <div />
  )
}

export default RightSection;
