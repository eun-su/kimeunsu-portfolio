import React, { useEffect } from "react";

const SlickSlider = () => {
  useEffect(() => {
    const loadSlick = () => {
      if (window.$ && window.$.fn && window.$.fn.slick) {
        console.log("✅ Slick 초기화 완료!");
        const slider = document.querySelector(".slick-slider");

        if (slider && !window.$(slider).hasClass("slick-initialized")) {
          window.$(slider).slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true,
          });
        }
      }
    };

    const loadScripts = async () => {
      if (!window.jQuery) {
        await new Promise((resolve) => {
          const jQueryScript = document.createElement("script");
          jQueryScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";
          jQueryScript.async = true;
          jQueryScript.onload = () => {
            console.log("✅ jQuery 로드 완료");
            resolve();
          };
          document.body.appendChild(jQueryScript);
        });
      }

      if (!window.$.fn || !window.$.fn.slick) {
        await new Promise((resolve) => {
          const slickScript = document.createElement("script");
          slickScript.src = "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js";
          slickScript.async = true;
          slickScript.onload = () => {
            console.log("✅ Slick 로드 완료");
            loadSlick(); // ✅ Slick.js 로드 후 바로 초기화
            resolve();
          };
          document.body.appendChild(slickScript);
        });
      } else {
        loadSlick();
      }
    };

    loadScripts();

    return () => {
      if (window.$ && window.$(".slick-slider").hasClass("slick-initialized")) {
        console.log("🔄 Slick 슬라이더 제거");
        window.$(".slick-slider").slick("unslick");
      }
    };
  }, []);

  return (
    <div className="slider-container">
      <h2 className="slider-title">🎡 Variable Width Slider</h2>
      <div className="slick-slider">
        <div className="slider-item"><img src="/img/banner1.jpg" alt="Banner 1" /></div>
        <div className="slider-item"><img src="/img/banner2.jpg" alt="Banner 2" /></div>
        <div className="slider-item"><img src="/img/banner3.jpg" alt="Banner 3" /></div>
        <div className="slider-item"><img src="/img/banner4.jpg" alt="Banner 4" /></div>
        <div className="slider-item"><img src="/img/banner5.jpg" alt="Banner 5" /></div>
      </div>
    </div>
  );
};

export default SlickSlider;
