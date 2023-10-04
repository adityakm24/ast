import React from "react";

// Create a new component for the section with boxes
function BoxSection() {
  // Define the data for the boxes (you can customize this data)
  const boxes = [
    { title: "Box 1", content: "Content for Box 1" },
    { title: "Box 2", content: "Content for Box 2" },
    { title: "Box 3", content: "Content for Box 3" },
    { title: "Box 4", content: "Content for Box 4" },
    { title: "Box 5", content: "Content for Box 5" },
    { title: "Box 6", content: "Content for Box 6" },
    { title: "Box 7", content: "Content for Box 7" },
    { title: "Box 8", content: "Content for Box 8" },
  ];

  // Define CSS styles as template literals
  const styles = `
    /* Add this CSS to your stylesheet or in a style tag in your component */
    .row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .box {
      border: 1px solid #ccc; /* Add a border to the boxes */
      padding: 10px;
      text-align: center;
      width: calc(25% - 50px); /* Adjust the width of the boxes */
      margin: 10px 0; /* Add margin around the boxes (top and bottom) */
      transition: transform 0.2s ease-in-out; /* Add a transition effect for smooth hover */
    }

    .box:hover {
      transform: scale(1.05); /* Increase size on hover */
      border-color: #333; /* Change border color on hover */
      cursor: pointer; /* Change cursor to pointer on hover */
    }

    /* Media query to adjust the box width on smaller screens */
    @media (max-width: 768px) {
      .box {
        width: calc(50% - 20px); /* Adjust the width for smaller screens */
      }
    }
  `;

  // Split the boxes into groups of 4
  const groupedBoxes = [];
  for (let i = 0; i < boxes.length; i += 4) {
    groupedBoxes.push(boxes.slice(i, i + 4));
  }

  return (
    <section style={{ margin: "50px 0" }}>
      {" "}
      {/* Add margin to create a gap */}
      <style>{styles}</style>
      {groupedBoxes.map((group, groupIndex) => (
        <div className="row" key={groupIndex}>
          {group.map((box, index) => (
            <div className="box" key={index}>
              <h3>{box.title}</h3>
              <p>{box.content}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default BoxSection;
