/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./AdviceFooter.module.scss";


const AdviceFooter = () => {
  return (
    <div className={styles.advice_div}>
      <header>
          <p>Prevention and Advice</p>
      </header>
      <main>
          <div>
            <h3>Maintain social distancing</h3>
            <p>
              Maintain at least 1 metre (3 feet) distance
              between yourself and anyone who is coughing
              or sneezing. If  you are too close, there's a 
              chance you get infected.
            </p>
          </div>
      </main>
    </div>
  )
}

export default AdviceFooter;
