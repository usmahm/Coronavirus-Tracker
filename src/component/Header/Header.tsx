import React from "react";
import styles from "./Header.module.scss";

type Props = {
  lastUpdatedTime: string | null;
}

const Header: React.FC<Props> = ({ lastUpdatedTime }) => {
  return (
    <>
      <div className={styles.scrollContainer}>
        <div>
          <p className={styles.scrollText}>
            Glad the COVID Era is Behind Us. This Website Remains as a Historic Reminder.
          </p>
        </div>
      </div>
      <header className={styles.mainHeader}>
          <h1>Coronavirus Tracker</h1>
          {lastUpdatedTime && <p>Last updated<span>{lastUpdatedTime}</span></p>}
      </header>
    </>
  )
}

export default Header;