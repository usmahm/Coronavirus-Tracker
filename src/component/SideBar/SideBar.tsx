import React from "react";
import LogoIcon from "../../../public/icons/logo.svg";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <nav className={styles.sideNav}>
      <LogoIcon className={styles.logo} />
      <ul>
        <li>
            <img src="/imgs/cdc.png" alt="" />
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"></a>
            <div>
                <p className="prevt">Prevention</p>    
            </div>
        </li>
        <li>
            <img src="/imgs/who-emblem.png" alt="" />
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"></a>
            <div>
                <p className="newst">WHO News and Guide</p>
            </div>
        </li>
        <li>
            <img src="/imgs/cdc.png" alt="" />
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html#"></a>
            <div>
                <p className={styles.checkert}>COVID-19 Self Checker</p>
            </div>    
        </li>
        <li>
            <img src="/imgs/cdc.png" alt="" />
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"></a>
            <div className={styles.faqt}>
                <p className={styles.faqt}>CDC COVID-19 FAQs</p>
            </div>
        </li>
        
    </ul>
    <div className={styles.about_section}>
        <p>Useful Links</p>
    </div>
  </nav>
  )
}

export default SideBar;
