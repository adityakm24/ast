import React from "react";

function Footer() {
  // Define CSS styles as a JavaScript object
  const styles = {
    footer: {
      backgroundColor: "#333",
      color: "#fff",
      textAlign: "center",
      padding: "20px 0",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      margin: "0 15px",
      transition: "color 0.2s ease-in-out",
    },
    linkHover: {
      color: "#16abff", // Change to your desired link hover color
      textDecoration: "underline",
    },
    linksContainer: {
      display: "flex",
      justifyContent: "center",
    },
    // Ensure the footer takes minimum space on the page
    spacer: {
      flex: 1,
    },
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>{/* Your page content goes here */}</div>
      <footer style={styles.footer}>
        <div style={styles.linksContainer}>
          <a style={styles.link} href="#">
            Home
          </a>
          <a style={styles.link} href="#">
            About Us
          </a>
          <a style={styles.link} href="#">
            Contact Us
          </a>
        </div>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}

export default Footer;
