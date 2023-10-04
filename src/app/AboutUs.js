import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  const [isCard1Hovered, setIsCard1Hovered] = useState(false);
  const [isCard2Hovered, setIsCard2Hovered] = useState(false);

  // Define CSS styles as template literals
  const styles = `
    /* Add this CSS to your stylesheet or in a style tag in your component */
    .cards-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 70vh; /* Adjust the height as needed */
    }

    .card {
      width: 300px;
      height: 200px;
      border: 1px solid #ccc;
      padding: 20px;
      margin: 10px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.5s ease; /* Smoother animation */
    }

    .card.hovered {
      transform: scale(1.05);
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <Navbar />
      <h1>Welcome to the About Page</h1>

      <div className="cards-container">
        <div
          className={`card ${isCard1Hovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsCard1Hovered(true)}
          onMouseLeave={() => setIsCard1Hovered(false)}
        >
          <h2>Card 1</h2>
          {isCard1Hovered ? (
            <p>Show more information about Card 1 here.</p>
          ) : null}
        </div>

        <div
          className={`card ${isCard2Hovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsCard2Hovered(true)}
          onMouseLeave={() => setIsCard2Hovered(false)}
        >
          <h2>Card 2</h2>
          {isCard2Hovered ? (
            <p>Show more information about Card 2 here.</p>
          ) : null}
        </div>
      </div>

      <Footer />
    </div>
  );
}
