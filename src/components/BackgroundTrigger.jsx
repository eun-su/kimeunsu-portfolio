import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TARGETS = ["#wrap main", "#navmenu", ".homeview", ".accordion-body"];

const resetTheme = () => {
  gsap.set(TARGETS, {
    clearProps: "backgroundColor,color"
  });
};

const BackgroundTrigger = ({ bgColor, textColor, children }) => {
  const triggerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // 메인페이지가 아니면 혹시 남아 있는 스타일 초기화
    if (location.pathname !== "/") {
      resetTheme();
      return;
    }

    const mm = ScrollTrigger.matchMedia({
      "(min-width: 769px)": () => {
        const tween = gsap.to(TARGETS, {
          backgroundColor: bgColor,
          color: textColor,
          duration: 0.3,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 10%",
            end: "bottom center",
            toggleActions: "play reverse play reverse"
          }
        });

        return () => {
          tween?.scrollTrigger?.kill();
          tween?.kill();
        };
      }
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();

      // 메인페이지를 벗어나거나 컴포넌트가 사라질 때 스타일 원복
      resetTheme();
    };
  }, [bgColor, textColor, location.pathname]);

  return (
    <div ref={triggerRef} className="background-trigger">
      {children}
    </div>
  );
};

export default BackgroundTrigger;