import React from "react";
import styles from "./Ourteamcss.module.css";
import Biocard from "../components/Biocard";
import data from "../schema/team";

const Ourteam = () => {
  return (
    <div id="ourteam" className={styles.ourteam}>
      <header className={styles.header}>Our Team</header>
      <div className={styles.cardholder}>
        {data.map((item, index) => {
          return (
            <div className={styles.card} key={index}>
              <Biocard
                id={item.id}
                name={item.name}
                role={item.role}
                description={item.description}
                facebooklink={item.facebooklink}
                instalink={item.instalink}
                twitterlink={item.twitterlink}
                email={item.email}
                imgsource={item.imgsource}
              />
            </div>
          );
        })}
      </div>
      <button className={styles.button}>Explore</button>
    </div>
  );
};

export default Ourteam;
