'use client'
// Import necessary dependencies
import { useState } from "react";
import { contactFormDB } from "./firebaseConfig";
import styles from "./styles.module.css";

export default function ContactForm() {
  // Define state variables
  const [messageSent, setMessageSent] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(123);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get form values
    const name = e.target.elements.name.value;
    const emailid = e.target.elements.emailid.value;
    const msgContent = e.target.elements.msgContent.value;

    // Function to validate email address
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };

    // Function to validate phone number
    const validatePhoneNumber = (phoneNumber) => {
      const re = /^\d{10}$/;
      return re.test(phoneNumber);
    };

    // Validate email and phone number
    if (!validateEmail(emailid)) {
      alert("Invalid email address");
      return;
    }

    if (!validatePhoneNumber(name)) {
      alert("Invalid phone number");
      return;
    }

    // Generate a random number and start animation
    spinAnimation();

    // Fetch data from the database
    try {
      const snapshot = await contactFormDB
        .orderByChild("date")
        .equalTo(currentDate)
        .once("value");

      let shouldSave = true;

      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        if (data.emailid === emailid) {
          shouldSave = false;
          return true;
        }
      });

      if (shouldSave) {
        const newContactForm = contactFormDB.push();
        await newContactForm.set({
          name: name,
          emailid: emailid,
          msgContent: msgContent,
          discount: currentNumber,
          date: currentDate,
        });

        // Show success message
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
        }, 3000);

        // Reset the form
        e.target.reset();
      } else {
        console.log("A record with the same emailid and date already exists.");
      }
    } catch (error) {
      console.log("Error querying the database: ", error);
    }
  };

  // Function to generate a random number and start animation
  const spinAnimation = () => {
    const minNumber = 100;
    const maxNumber = 500;

    const interval = setInterval(() => {
      const newNumber = getRandomNumber(minNumber, maxNumber);
      setCurrentNumber(newNumber);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
      }, 3000);
    }, 3000);
  };

  // Function to get a random number within a range
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Current date
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div
          className={styles.alert}
          style={{ display: messageSent ? "block" : "none" }}
        >
          Your message sent
        </div>
        <h1 style={{ fontSize: "24px" }}>Your Lucky Discount:</h1>
        <div
          className={styles["random-number"]}
          style={{ fontSize: "36px", fontWeight: "bold", margin: "20px 0" }}
        >
          {currentNumber}
        </div>
      </div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} id="contactForm">
          <div className={styles.inputBox}>
            <input type="text" id="name" placeholder="Your number...." />
          </div>

          <div className={styles.inputBox}>
            <input type="email" id="emailid" placeholder="Your Email....." />
          </div>

          <div className={styles.inputBox} id={styles.drop}>
            <select id="msgContent" placeholder="Message">
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
