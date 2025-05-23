import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackgroundTrigger = ({ bgColor, textColor, children }) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // ✅ PC 이상 (769px 이상)일 때만 트리거 작동
    "(min-width: 769px)": function () {
      gsap.to(["main", "#navmenu", ".homeview", ".active", ".accordion-body"], {
        backgroundColor: bgColor,
        color: textColor, // ✅ 텍스트 색상도 변경
        duration: 0.3, // ✅ 부드러운 색 전환
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 10%",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      });
      },

      // ✅ 모바일일 경우 아무 것도 하지 않음
      "(max-width: 768px)": function () {
      // 모바일에서는 ScrollTrigger 작동하지 않음
      }
    });
    
  ScrollTrigger.refresh(); // ✅ 강제로 ScrollTrigger 업데이트
  }, [bgColor, textColor]); // ✅ bgColor, textColor가 변경될 때마다 실행

  return (
    <div ref={triggerRef} className="background-trigger">
      {children}
    </div>
  );
};

export default BackgroundTrigger;
