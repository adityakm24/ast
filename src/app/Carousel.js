import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MyCarousel() {
  // Define an array of background colors for each image
  const bgColors = ["red", "green", "blue", "yellow"];

  // Define a style object for slide elements
  const slideStyle = {
    height: "500px", // Adjust the height as needed
    backgroundColor: "transparent",
    margin: "10px 0", // Set the background color to transparent
  };

  // Define CSS styles for the carousel buttons
  const buttonStyles = `
    /* Customize the color of the carousel arrow buttons */
    .carousel .control-arrow {
      background-color: rgba(0, 0, 0, 0.5); /* Change the background color */
      color: #fff; /* Change the arrow color */
      border-radius: 50%; /* Make the buttons round */
      padding: 10px; /* Adjust padding for button size */
    }

    /* Adjust the size of the carousel arrow buttons on hover */
    .carousel .control-arrow:hover {
      background-color: rgba(0, 0, 0, 0.7); /* Change the hover background color */
      transform: scale(1.2); /* Scale up the button on hover */
    }
  `;

  return (
    <div>
      <style>{buttonStyles}</style>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        stopOnHover={true}
        style={{ height: "100%" }}
      >
        {bgColors.map((bgColor, index) => (
          <div
            key={index}
            style={{ ...slideStyle, backgroundColor: bgColor }}
          ></div>
        ))}
      </Carousel>
    </div>
  );
}

export default MyCarousel;
