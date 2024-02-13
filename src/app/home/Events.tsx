import React from "react";
import styles from "./Eventscss.module.css";
import data from "../schema/events";
import Eventcontainer from "../components/Eventcontainer";
import Link from "next/link";

const Events = () => {
  return (
    <div id="events" className={styles.events}>
      <header className={styles.header}>Events</header>
      <div className={styles.lower}>
        {data.map((item, index) => {
          return (
            <div className={styles.eventcontianer} key={index}>
              <Eventcontainer
                id={item.id}
                src={item.src}
                title={item.title}
                descritption={item.descritption}
              />
            </div>
          );
        })}
      </div>
      <Link href="/events">
        <button className={styles.button}>Explore</button>
      </Link>
    </div>
  );
};

export default Events;
