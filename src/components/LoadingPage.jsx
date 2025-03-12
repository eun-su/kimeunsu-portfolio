import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "../assets/css/LoadingPage.css";

const imageUrls = [
  "/img/Tokyo.jpg",
  "/img/banner/01_misscoco_open_black.jpg",
  "/img/banner/02_blackfriday.png",
  "/img/banner/03_promotion_kolon.jpg",
  "/img/banner/04_202204_slide.jpg",
  "/img/banner/05_luxury.jpg",
  "/img/banner/06_watch_banner.jpg",
  "/img/banner/07_202312_sale.png",
  "/img/banner/08_202109_bag.jpg",
  "/img/banner/09_202103_flower.jpg",
  "/img/banner/10_202201_update.jpg",
  "/img/blog/01.jpg",
  "/img/blog/02.jpg",
  "/img/blog/03.jpg",
  "/img/blog/04.jpg",
  "/img/blog/05.jpg",
  "/img/blog/05.png",
  "/img/blog/06.jpg",
  "/img/blog/07.jpg",
  "/img/blog/08.png",
  "/img/blog/09.jpg",
  "/img/blog/10.jpg",
  "/img/blog/11.jpg",
  "/img/blog/12.png",
  "/img/blog/13.png",
  "/img/blog/14.jpg",
  "/img/blog/15.png",
  "/img/port01.jpg",
  "/img/port02.jpg",
  "/img/port03.jpg",
  "/img/port04.jpg",
  "/img/port05.jpg",
  "/img/port06.jpg",
  "/img/port07.jpg",
  "/img/port08.jpg",
  "/img/port09.jpg",
  "/img/port10.jpg",
  "/img/Tokyo.jpg",
];

export default function LoadingPage({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    // ✅ 로딩 중 스크롤 완전 차단
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.documentElement.style.height = "100vh";

    const startTime = Date.now();

    // 이미지 프리로드
    const preloadImages = imageUrls.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    // 텍스트 애니메이션 실행
    const textElements = textRef.current.children;
    gsap.fromTo(
      textElements,
      { opacity: 0 },
      { 
        opacity: 1,
        duration: 0.5,
        stagger: { amount: 1, each: 0.25, repeat: -1, yoyo: true },
        ease: "power1.inOut"
      }
    );

    // 숫자 카운트 애니메이션 (최소 2초 보장)
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 30);

    Promise.all(preloadImages).then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0); // 최소 2초 보장

      setTimeout(() => {
        clearInterval(interval);
        setProgress(100); // ✅ 100% 설정

        // ✅ GSAP 애니메이션 실행
        const tl = gsap.timeline();

        tl.set("#header", { display: "none" }) // ✅ 헤더 숨김 처리

        // ✅ 텍스트 & 숫자 먼저 사라짐
        .to(".loading-text, .progress-text", { 
          opacity: 0, 
          duration: 1.5, 
          ease: "power2.out",
        })

        // ✅ 메인 페이지 먼저 등장
        .set(".main-content", { display: "block", opacity: 0 })

        .to(".main-content", { 
          opacity: 1, 
          duration: 1.5, 
          ease: "power2.out",
        }, "-=1.2")

        // ✅ 배경 사라짐
        .to(".loading-container", { 
          opacity: 0, 
          duration: 1.5, 
          ease: "power2.out",
          onComplete: () => {
            setIsLoading(false); // ✅ 로딩 종료

            // ✅ 로딩이 끝난 후 강제로 화면 최상단으로 이동
            window.scrollTo(0, 0);

            // ✅ 스크롤 가능하도록 복구
            document.body.style.overflow = "auto";
            document.documentElement.style.overflow = "auto";
            document.body.style.height = "auto";
            document.documentElement.style.height = "auto";
          },
        }, "+=0.3")

        // ✅ 헤더 애니메이션 추가
        .to("#header", { 
          display: "block",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out"
        }, "-=1.5");

      }, remainingTime);
    });

  }, []);

  return (
    <>
      <div className="loading-container" style={{ display: isLoading ? "flex" : "none" }}>
        <div className="loading-text" ref={textRef}>
          {"LOADING".split("").map((char, index) => (
            <span key={index} className="char">{char}</span>
          ))}
        </div>
        <div className="progress-text">{progress}%</div>
      </div>
      <main className="main-content">
        {children}
      </main>
    </>
  );
}
