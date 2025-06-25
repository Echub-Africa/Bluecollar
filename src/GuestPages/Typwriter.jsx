import React, { useState, useEffect } from "react";
import "../App.css";

const Typewriter = ({ 
  texts, 
  styles = [], // New prop for individual styles
  typingSpeed = 150, 
  deletingSpeed = 100, 
  delay = 1000 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get current style or use empty object if not defined
  const currentStyle = styles[currentTextIndex] || {};

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      if (isDeleting) {
        if (currentIndex > 0) {
          setDisplayedText(fullText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }
    };

    const timeoutId = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeoutId);
  }, [currentIndex, isDeleting, texts, currentTextIndex, typingSpeed, deletingSpeed, delay]);

  return (
    <div className="typewriter">
      <span style={currentStyle}>{displayedText}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default Typewriter;