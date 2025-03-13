import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "../assets/css/LoadingPage.css";

const imageUrls = [
  require("../assets/img/Tokyo.jpg"),
  require("../assets/img/eunsu.png"),
];

export default function LoadingPage({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const textRef = useRef(null);
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.height = "100vh";
    document.documentElement.style.height = "100vh";

    const startTime = Date.now();
    let loadedCount = 0;

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.floor((loadedCount / imageUrls.length) * 100);
      gsap.to(".progress-text", { textContent: Math.floor(newProgress) + '%', duration: 0.5, snap: { textContent: 1 }, ease: "power1.out" });
      setProgress(newProgress);
    };

    const preloadImages = imageUrls.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => { updateProgress(); resolve(); };
        img.onerror = () => { updateProgress(); resolve(); };
      });
    });

    const textElements = textRef.current.children;
      gsap.fromTo(
        textElements,
        { y: "-10px", opacity: 1 },
        { y: "10px", duration: 1, stagger: 0.2, repeat: -1, yoyo: true, ease: "power1.inOut" }
      );

    Promise.all(preloadImages).then(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(2000 - elapsedTime, 0);
      
      gsap.to(".progress-text", { textContent: 100, duration: remainingTime / 1000, ease: "power1.out", onUpdate: () => {
        setProgress(prev => (prev < 100 ? prev + 1 : 100));
      }});
      
      setTimeout(() => {
        gsap.timeline()
          .to(".loading-text, .progress-text", { opacity: 0, duration: 1.5, ease: "power2.out" })
          .to("#header", { opacity: 0, duration: 0, display: "none" })
          .set(".main-content", { display: "block", opacity: 0 })
          .to(".main-content", { opacity: 1, duration: 1.5, ease: "power2.out" }, "-=1.2")
          .to(".loading-container", { 
            opacity: 0, 
            duration: 1.5, 
            ease: "power2.out",
            onComplete: () => {
              setIsLoading(false);
              window.scrollTo(0, 0);
              document.body.style.overflow = "auto";
              document.documentElement.style.overflow = "auto";
              document.body.style.height = "auto";
              document.documentElement.style.height = "auto";
            },
          }, "+=0.3")
          .to("#header", { display: "block", opacity: 1, duration: 1, ease: "power2.out" }, "-=1.2");
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
