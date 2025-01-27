import { useState, useEffect } from "react";
import "./styles/Slideshow.css";


// eslint-disable-next-line react/prop-types
const Slideshow = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line react/prop-types
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      // eslint-disable-next-line react/prop-types
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const visibleImages = [
    data[currentIndex],
    data[(currentIndex + 1) % data.length],
    data[(currentIndex + 2) % data.length],
  ];

  return (
    <div className="slideshow">
      <button className="nav-button prev-button" onClick={handlePrev}>
        &#10094;
      </button>
      {visibleImages.map((image, index) => (
        <div key={index} className="slideshow-item">
          <img
            src={image.src}
            alt={`Slideshow ${index}`}
            className="slideshow-image"
          />
          <p className="slideshow-desc">{image.desc}</p>
        </div>
      ))}
      <button className="nav-button next-button" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
