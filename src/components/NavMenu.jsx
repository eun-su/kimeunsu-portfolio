import React, { useEffect, useState, useRef } from "react";
import anime from "animejs";

const NavMenu = ({ children, onToggle }) => {
  const [isHidden, setIsHidden] = useState(false);
  const [manualControl, setManualControl] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  // ✅ 모바일 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // 최초 체크
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ PC일 때만 스크롤 감지
  useEffect(() => {
    if (isMobile) return;

    const main = document.getElementById("homeview");

    const handleScroll = () => {
      if (!manualControl && window.scrollY > 500 && !isHidden) {
        setIsHidden(true);
        anime({
          targets: navRef.current,
          translateX: "-100%",
          duration: 600,
          easing: "easeInOutQuad",
        });
        if (main) main.classList.add("fullwidth");
        onToggle?.(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden, manualControl, isMobile, onToggle]);

  // ✅ PC일 때만 토글 버튼 동작
  const handleToggle = () => {
    if (isMobile) return;

    const main = document.getElementById("homeview");
    const newHidden = !isHidden;
    setIsHidden(newHidden);
    setManualControl(true);
    onToggle?.(newHidden);

    anime({
      targets: navRef.current,
      translateX: newHidden ? "-100%" : "0%",
      duration: 600,
      easing: newHidden ? "easeInOutQuad" : "easeOutExpo",
    });

    if (main) {
      main.classList.toggle("fullwidth", newHidden);
    }
  };

  return (
    <div ref={navRef} className="navmenu" id="navmenu" role="menu">
      <div className="accordion-subject">+ My Blog</div>
      {children}

      {/* ✅ PC일 때만 버튼 렌더링 */}
      {!isMobile && (
        <button className="nav-toggle-button" onClick={handleToggle}>
          {isHidden ? "›" : "‹"}
        </button>
      )}
    </div>
  );
};

export default NavMenu;
