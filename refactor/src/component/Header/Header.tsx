import React from "react";
import styles from "./Header.module.scss";

type Props = {
  lastUpdatedTime: string;
}

const Header: React.FC<Props> = ({ lastUpdatedTime }) => {
  return (
    <header className={styles.mainHeader}>
        <h1>Coronavirus Tracker</h1>
        {/* <p class="last-updated-info"><!--Last updated <span>June 19, 2020 12:30 (GMT +1)</span>--></p> */}
        <p>Last updated<span>{lastUpdatedTime}</span></p>
    </header>
  )
}

export default Header;