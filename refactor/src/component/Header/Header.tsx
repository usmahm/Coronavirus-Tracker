import React from "react";
import styles from "./Header.module.scss";

type Props = {
  lastUpdatedTime: string | null;
}

const Header: React.FC<Props> = ({ lastUpdatedTime }) => {
  return (
    <header className={styles.mainHeader}>
        <h1>Coronavirus Tracker</h1>
        {lastUpdatedTime && <p>Last updated<span>{lastUpdatedTime}</span></p>}
    </header>
  )
}

export default Header;