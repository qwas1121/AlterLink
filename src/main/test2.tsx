import React, { useState } from "react";
import "./test.css";
function App() {
  const images = [
    `${process.env.PUBLIC_URL}/img/main/sec06_img01.jpg`,
    `${process.env.PUBLIC_URL}/img/main/sec06_img02.jpg`,
    `${process.env.PUBLIC_URL}/img/main/sec06_img03.jpg`,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div
      className={`flip-container ${isFlipped ? "is-flipped" : ""}`}
      onClick={handleFlip}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="flipper">
        <div className="front">{/* Front content */}</div>
        <div className="back">{/* Back content */}</div>
      </div>
    </div>
  );
}

export default App;
