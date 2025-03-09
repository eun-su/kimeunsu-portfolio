import Lenis from "@studio-freight/lenis";

const lenis = () => {
  const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // ✅ 스크롤 이벤트 최적화 (불필요한 로그 제거)
  lenis.on("scroll", (e) => {
    // console.log(e);  🔴 과도한 로그 삭제
  });

  // ✅ Slick 슬라이더가 있을 경우 Lenis 스크롤 중지
  document.addEventListener("DOMContentLoaded", () => {
    const slickSlider = document.querySelector(".slick-slider");

    if (slickSlider) {
      slickSlider.addEventListener("mouseenter", () => lenis.stop()); // 슬라이더 위에서 스크롤 정지
      slickSlider.addEventListener("mouseleave", () => lenis.start()); // 슬라이더에서 벗어나면 다시 스크롤 활성화
    }
  });
};

export default lenis;
