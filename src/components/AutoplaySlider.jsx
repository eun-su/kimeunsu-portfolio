import React, { useState, useEffect } from "react";
import { autoplaySliderImages } from "../constants/indexImage"; // ✅ 새로운 그룹 불러오기
import "../assets/css/AutoplaySlider.css";

const AutoplaySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = autoplaySliderImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // 3초마다 자동 이동

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="autoplay-slider">
      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {autoplaySliderImages.concat(autoplaySliderImages[0]).map((image, index) => (
          <div key={index} className="slide">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* 인디케이터 */}
      <div className="slider-indicators">
        {autoplaySliderImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default AutoplaySlider;
