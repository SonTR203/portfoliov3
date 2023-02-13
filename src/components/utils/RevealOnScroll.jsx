import React, { useState, useEffect } from "react";

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(document.querySelector("#reveal"));
  }, []);

  return (
    <div
      id="reveal"
      className={`${
        isVisible ? "animate-fadeInSlow" : ""
      } transition-opacity duration-100`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
