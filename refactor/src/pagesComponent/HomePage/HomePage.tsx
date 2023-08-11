import React from "react";
import styles from "./HomePage.module.scss";
import Header from "../../component/Header/Header";
import CenterSection from "../../component/CenterSection/CenterSection";
import RightSection from "../../component/RightSection/RightSection";
import SideBar from "../../component/SideBar/SideBar";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <main className={styles.main}>
        <Header lastUpdatedTime="June 19, 2020 12:30 (GMT +1)" />
        <CenterSection />
        <RightSection />
      </main>
    </div>
  )
}

export default HomePage;
