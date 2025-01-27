/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "../styles/Slideshow.css";
import Modal from "./Modal";

function sizing_logic(w, cert) {
  if (cert) {
    if (w > 1400) {
      return 6;
    } else if (w > 1000) {
      return 5;
    } else if (w > 700) {
      return 4;
    } else if (w > 400) {
      return 3;
    } else {
      return 3;
    }
  } else {
    if (w > 1200) {
      return 4;
    } else if (w > 800) {
      return 3;
    } else if (w > 600) {
      return 2;
    } else if (w > 400) {
      return 1;
    } else {
      return 1;
    }
  }
}

// eslint-disable-next-line react/prop-types
const Slideshow = ({ data, cert }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(
    sizing_logic(window.innerWidth, cert)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(sizing_logic(window.innerWidth, cert));
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (visibleCount < data.length) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [data.length, visibleCount]);

  const handlePrev = () => {
    // eslint-disable-next-line react/prop-types
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    // eslint-disable-next-line react/prop-types
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleImageClick = (src, index) => {
    setModalImageSrc(src);
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalPrev = () => {
    setModalImageIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
    setModalImageSrc(
      data[(modalImageIndex - 1 + data.length) % data.length].src
    );
  };

  const handleModalNext = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    setModalImageSrc(data[(modalImageIndex + 1) % data.length].src);
  };

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(data[(currentIndex + i) % data.length]);
  }

  return (
    <div className={`slideshow ${cert ? "slideshow-cert" : ""}`}>
      <button className="nav-button prev-button" onClick={handlePrev}>
        &#10094;
      </button>
      {visibleImages.map((image, index) => (
        <div
          key={index}
          className={`slideshow-item ${cert ? "item-cert" : ""}`}
          style={{ width: `${100 / visibleCount}%` }}
        >
          <img
            src={image.src}
            alt={`Slideshow ${index}`}
            className={`slideshow-image ${cert ? "cert-image" : ""}`}
            onClick={() =>
              handleImageClick(image.src, (currentIndex + index) % data.length)
            }
          />
          <p className="slideshow-desc">{image.desc}</p>
        </div>
      ))}
      <button
        className={`nav-button next-button ${
          isModalOpen ? "nav-button-black" : ""
        }`}
        onClick={handleNext}
      >
        &#10095;
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={modalImageSrc}
        onPrev={handleModalPrev}
        onNext={handleModalNext}
      />
    </div>
  );
};

export default Slideshow;
