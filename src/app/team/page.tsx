import React from "react";
import data from "../schema/wholeteam";
import Biocard from "../components/Biocard";
import styles from "./WholeTeam.module.css";

const page = () => {
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
    </div>
  );
};

export default page;
