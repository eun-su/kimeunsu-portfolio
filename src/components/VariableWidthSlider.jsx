import React, { useRef } from "react";
import { sliderImages } from "../constants/indexImage";
import "../assets/css/VariableWidthSlider.css";

const VariableWidthSlider = () => {
  const sliderRef = useRef(null);

  // 왼쪽으로 슬라이드 이동
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300; // 이동 거리 조절
    }
  };

  // 오른쪽으로 슬라이드 이동
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300; // 이동 거리 조절
    }
  };

  return (
    <div className="slider-container">
      {/* 왼쪽 이동 버튼 */}
      <button className="slider-button left" onClick={scrollLeft}>
        &#10094;
      </button>

      {/* 슬라이더 */}
      <div className="custom-slider" ref={sliderRef}>
        {sliderImages.map((image) => (
          <div
            key={image.id}
            className={`slider-item ${image.wide ? "wide" : ""}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      {/* 오른쪽 이동 버튼 */}
      <button className="slider-button right" onClick={scrollRight}>
        &#10095;
      </button>
    </div>
  );
};

export default VariableWidthSlider;
