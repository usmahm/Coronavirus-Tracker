import React from "react";
import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <nav className={styles.sideNav}>
      <svg className={styles.logo}>
          {/* <use xlink:href="#virus-solid" /> */}
      </svg>

      <ul>
          <li className={styles.prev}>
              <img src="./img/cdc.png" alt="" />
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html"></a>
              <div>
                  <p className="prevt">Prevention</p>    
              </div>

          </li>
          <li className={styles.news}>
              <img src="./img/who-emblem.png" alt="" />
              <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"></a>
              <div>
                  <p className="newst">WHO News and Guide</p>
              </div>

          </li>
          <li className={styles.checker}>
              <img src="./img/cdc.png" alt="" />
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html#"></a>
              <div>
                  <p className={styles.checkert}>COVID-19 Self Checker</p>
              </div>    
          </li>
          <li className={styles.faq}>
              <img src="./img/cdc.png" alt="" />
              <a href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html"></a>
              <div className={styles.faqt}>
                  <p className={styles.faqt}>CDC COVID-19 FAQs</p>
              </div>
          </li>
          
      </ul>
      <div className={styles.about_section}>
          <p className={styles.about_section}>Useful Links</p>
      </div>
  </nav>
  )
}

export default SideBar;
