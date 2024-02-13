import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.body}>
      <div className={styles.upper}>
        <div className={styles.icons}>
          <Link href="/" className={styles.icon}>
            <Image src="/facebook.png" height={44} width={44} alt="facebook" />
          </Link>
          <Link href="/" className={styles.icon}>
            <Image
              src="/instagram.png"
              height={44}
              width={44}
              alt="instagram"
            />
          </Link>
          <Link href="/" className={styles.icon}>
            <Image src="/linkedin.png" height={44} width={44} alt="linkedin" />
          </Link>
          <Link href="/" className={styles.icon}>
            <Image src="/twitter.png" height={44} width={44} alt="twitter" />
          </Link>
        </div>
        <div className={styles.firstline}>Join the EDC Community</div>
        <div className={styles.secondline}>
          Join our 1,000,000+ person community and contribute to a more private
          and decentralized internet.
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.row}>
          <header className={styles.header}>Reach us</header>
          <Link href="/" className={styles.link}>
            <Image
              src="/bxs_phone-call.svg"
              height={24}
              width={24}
              alt="phone"
            />
            <span>123456789</span>
          </Link>
          <Link href="/" className={styles.link}>
            <Image
              src="/ic_sharp-email.svg"
              height={24}
              width={24}
              alt="email"
            />
            <span>asc15.lko@gmail.com</span>
          </Link>
          <Link href="/" className={styles.link}>
            <Image
              src="/carbon_location-filled.svg"
              height={24}
              width={24}
              alt="email"
            />
            <span className={styles.address}>
              INDIAN INSTITUTE OF ENGINEERING SCIENCE AND TECHNOLGY
            </span>
          </Link>
        </div>
        <div className={styles.row}>
          <header className={styles.header}>Company</header>
          <Link href="/#aboutus" className={styles.link}>
            {" "}
            About
          </Link>
          <Link href="/#contactus" className={styles.link}>
            Contact
          </Link>
          <Link href="/blogs" className={styles.link}>
            Blogs
          </Link>
        </div>
        <div className={styles.row}>
          <header className={styles.header}>Legal</header>
          <Link href="/privacypolicy" className={styles.link}>
            Privacy Policy
          </Link>
          <Link href="/tandc" className={styles.link}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
