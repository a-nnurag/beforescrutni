import styles from "./Gallerycss.module.css";
import data from "../schema/gallery";
import Image from "next/image";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <header className={styles.header}>Gallery</header>
      <div className={styles.body}>
        {data.map((item, index) => {
          return (
            <div className={styles.imageHolder} key={item.id}>
              <Image src={item.src} alt={item.title} height={500} width={500} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
