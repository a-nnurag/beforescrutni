"use client";
import React, { useState } from "react";
import styles from "./Contactuscss.module.css";
import { collection, addDoc } from "firebase/firestore";
import Image from "next/image";
import { db } from "../../../firebaseConfig";

async function addDataToFireStore(
  firstname: string,
  lastname: string,
  email: string,
  phonenumber: string,
  subject: string,
  message: string
) {
  try {
    const docRef = await addDoc(collection(db, "messages"), {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phonenumber: phonenumber,
      subject: subject,
      message: message,
    });
    console.log("Documentation written with id", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document", error);
    return false;
  }
}

const Contactus = () => {
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setphoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const added = await addDataToFireStore(
      firstname,
      lastname,
      email,
      phonenumber,
      subject,
      message
    );
    if (added) {
      setfirstName("");
      setlastName("");
      setEmail("");
      setphoneNumber("");
      setSubject("");
      setMessage("");

      let radio = document.getElementById("subject");

      alert("Data added to firestore DB!! ");
    } else {
      alert("error");
    }
  };
  return (
    <div id="contactus" className={styles.contactus}>
      <div className={styles.header}>Contact Us</div>
      <div className={styles.lowerheader}>
        Any question or remarks? Just write us a message!
      </div>
      <div className={styles.lower}>
        <div className={styles.left}>
          <Image
            src="/contactus/sideimg.png"
            alt=""
            className={styles.image}
            height={500}
            width={500}
          />
        </div>
        <form className={styles.right} onSubmit={handleSubmit}>
          <div className={styles.formholder}>
            <label htmlFor="firstname" className={styles.labelleft}>
              FirstName:
            </label>
            <input
              placeholder="John"
              type="text"
              id="firstname"
              value={firstname}
              className={styles.input}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className={styles.formholder}>
            <label htmlFor="lastname" className={styles.labelright}>
              LastName:
            </label>
            <input
              type="text"
              placeholder="Doe"
              id="lastname"
              value={lastname}
              className={styles.input}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className={styles.formholder}>
            <label htmlFor="email" className={styles.labelleft}>
              Email:
            </label>
            <input
              type="text"
              id="email"
              placeholder="abc.123@gmail.com"
              value={email}
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formholder}>
            <label htmlFor="phonenumber" className={styles.labelright}>
              Phone Number:
            </label>
            <input
              type="number"
              placeholder="+91 1234567890"
              id="phonenumber"
              value={phonenumber}
              className={styles.input}
              onChange={(e) => setphoneNumber(e.target.value)}
            />
          </div>

          <div className={styles.formholderselectsubject}>
            <label htmlFor="subject" className={styles.selectsubject}>
              Select Subject?
            </label>
            <div className={styles.options}>
              <input
                type="radio"
                id="subject"
                value="general inquiry"
                onChange={(e) => setSubject(e.target.value)}
                className={styles.option}
              />
              <p className={styles.p}> General inquiry</p>
              <input
                type="radio"
                id="subject"
                value="sponsorship"
                onChange={(e) => setSubject(e.target.value)}
                className={styles.option}
              />
              <p className={styles.p}> Sponsorship</p>
              <input
                type="radio"
                id="subject"
                value="got an idea"
                onChange={(e) => setSubject(e.target.value)}
                className={styles.option}
              />
              <p className={styles.p}> Got an idea</p>
            </div>
          </div>

          <div className={styles.formholdermessage}>
            <label htmlFor="message" className={styles.labelleft}>
              Message:
            </label>
            <textarea
              placeholder="Write your message .."
              rows={5}
              id="message"
              value={message}
              className={styles.input}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div>
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
