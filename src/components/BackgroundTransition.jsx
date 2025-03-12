import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackgroundTransition = ({ startColor, endColor }) => {
  const bgRef = useRef(null);

  useEffect(() => {
    gsap.to(bgRef.current, {
      backgroundColor: endColor,
      color: "#ffffff", // ✅ 텍스트 색상 변경
      duration: 0.5,
      scrollTrigger: {
        trigger: bgRef.current,
        start: "top 90%", // ✅ 특정 위치에서 시작
        end: "bottom 90%",
        scrub: 0.5, // ✅ 스크롤에 따라 부드럽게 변경
      },
    });
  }, [startColor, endColor]);

  return <div ref={bgRef} className="background-transition"></div>;
};

export default BackgroundTransition;
