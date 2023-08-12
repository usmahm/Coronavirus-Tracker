import React from "react";
import styles from "./HomePage.module.scss";
import Header from "../../component/Header/Header";
import CenterSection from "../../component/CenterSection/CenterSection";
import RightSection from "../../component/RightSection/RightSection";
import SideBar from "../../component/SideBar/SideBar";
import { useTotalCases } from "../../contexts/TotalCasesContext";

const HomePage = () => {
  const { lastUpdatedTime } = useTotalCases();
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
        <Header lastUpdatedTime={lastUpdatedTime && ` ${lastUpdatedTime.month} ${lastUpdatedTime.date}, ${lastUpdatedTime.year} ${lastUpdatedTime.hours}:${lastUpdatedTime.min} (${lastUpdatedTime.timezone})`} />
        <CenterSection />
        <RightSection />
      </main>
    </div>
  )
}

export default HomePage;
