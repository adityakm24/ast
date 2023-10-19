"use client";
import React, { useState } from "react";
import { database } from "./firebaseConfig";
import { ref, push, set, get } from "firebase/database";
import styles from "./styles.module.css";
import Navbar from "./Navbar";

export default function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(123);

  const currentDate = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const phoneNumber = e.target.elements.phoneNumber.value.trim();
    const emailid = e.target.elements.emailid.value.trim();
    const msgContent = e.target.elements.msgContent.value.trim();

    if (!name) {
      alert("Name is required!");
      return;
    }
    if (!validatePhoneNumber(phoneNumber)) {
      alert("Invalid phone number");
      return;
    }
    if (!validateEmail(emailid)) {
      alert("Invalid email address");
      return;
    }

    // Check if email or phone number already exists for today
    const contactFormRef = ref(database, "contactForm");
    const snapshot = await get(contactFormRef);

    if (snapshot.exists()) {
      const data = snapshot.val();

      // Check if email exists for today
      const emailExistsToday = Object.values(data).some(
        (entry) => entry.emailid === emailid && entry.date === currentDate
      );

      if (emailExistsToday) {
        alert("Email address already exists for today");
        return;
      }

      // Check if phone number exists for today
      const phoneNumberExistsToday = Object.values(data).some(
        (entry) =>
          entry.phoneNumber === phoneNumber && entry.date === currentDate
      );

      if (phoneNumberExistsToday) {
        alert("Phone number already exists for today");
        return;
      }
    }

    spinAnimation();

    try {
      const newContactFormRef = ref(database, "contactForm");
      const newContactFormChildRef = push(newContactFormRef);
      await set(newContactFormChildRef, {
        name,
        phoneNumber,
        emailid,
        msgContent,
        discount: currentNumber,
        date: currentDate,
      });

      setMessageSent(true);
      setTimeout(() => setMessageSent(false), 3000);
      e.target.reset();
    } catch (error) {
      console.error("Error querying the database: ", error);
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(phoneNumber);
  };

  const spinAnimation = () => {
    const minNumber = 100;
    const maxNumber = 500;

    const interval = setInterval(() => {
      const newNumber = getRandomNumber(minNumber, maxNumber);
      setCurrentNumber(newNumber);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  };

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.top}>
        <div
          className={styles.alert}
          style={{ display: messageSent ? "block" : "none" }}
        >
          Your message sent
        </div>
        <h1>Your Lucky Discount:</h1>
        <div className={styles["random-number"]}>{currentNumber}</div>
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} id="contactForm">
          <div className={styles.inputBox}>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name...."
              required
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Your Number...."
              required
            />
          </div>
          <div className={styles.inputBox}>
            <input
              type="email"
              id="emailid"
              name="emailid"
              placeholder="Your Email....."
              required
            />
          </div>
          <div className={styles.inputBox} id={styles.drop}>
            <select id="msgContent" name="msgContent" required>
              <option value="Salesman1">Salesman1</option>
              <option value="Salesman2">Salesman2</option>
              <option value="Salesman3">Salesman3</option>
            </select>
          </div>
          <div className={styles.inputBox}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
