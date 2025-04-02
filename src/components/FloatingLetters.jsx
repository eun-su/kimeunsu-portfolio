// FloatingLetters.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "../assets/css/FloatingLetters.css";

gsap.registerPlugin(MotionPathPlugin);

const letters = ["O", "-", "L", "A", "T"];

const FloatingLetters = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const paths = containerRef.current.querySelectorAll("path");
    const letters = containerRef.current.querySelectorAll(".floating-letter");

    letters.forEach((letter, i) => {
      gsap.to(letter, {
        duration: 10 + i * 1.5,
        repeat: -1,
        ease: "none",
        motionPath: {
          path: paths[i % paths.length],
          align: paths[i % paths.length],
          alignOrigin: [0.5, 0.5],
          autoRotate: false
        }
      });
    });
  }, []);

  // 마우스 따라다니기 (부드러운 offset 적용)
  useEffect(() => {
    const letters = containerRef.current.querySelectorAll(".floating-letter");
    const moveAmount = 10;
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * moveAmount;
      const y = (e.clientY / window.innerHeight - 0.5) * moveAmount;

      letters.forEach((el, i) => {
        gsap.to(el, {
          xPercent: x + i * 2,
          yPercent: y + i * 2,
          duration: 1,
          ease: "power2.out"
        });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="floating-container" ref={containerRef}>
      <svg className="floating-paths" viewBox="0 0 100 100">
        <path d="M10,30 Q30,10 50,30 T90,30" fill="none" />
        <path d="M20,60 Q40,80 60,60 T90,60" fill="none" />
        <path d="M10,90 Q50,70 90,90" fill="none" />
      </svg>
      {letters.map((letter, index) => (
        <div key={index} className="floating-letter">{letter}</div>
      ))}
    </div>
  );
};

export default FloatingLetters;
