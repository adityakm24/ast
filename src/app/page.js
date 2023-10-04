// src/app/page.js
"use client";
// src/app/page.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import About from "./AboutUs";
import MyCarousel from "./Carousel";
import BoxSection from "./box";
import Footer from "./footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <MyCarousel />
      <BoxSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
