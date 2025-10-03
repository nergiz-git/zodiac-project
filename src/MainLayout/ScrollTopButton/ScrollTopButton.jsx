import React, { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi2";
import "./ScrollTopButton.css";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) { 
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <HiArrowUp size={25} />
    </button>
  );
}

export default ScrollTopButton;
