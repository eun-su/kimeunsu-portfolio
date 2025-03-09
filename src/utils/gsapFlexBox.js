import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ 박스를 왼쪽으로 이동
export const moveBoxLeft = (target) => {
  gsap.to(target, {
    duration: 1.5,
    x: -230, // 🔵 왼쪽으로 이동
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      end: "bottom 50%",
      scrub: 1, // 🔥 스크롤과 함께 부드럽게 움직임
      toggleClass: "active",
    },
  });
};

// ✅ 박스를 오른쪽으로 이동
export const moveBoxRight = (target) => {
    gsap.to(target, {
      duration: 1.5,
      x: 230, // 🔴 오른쪽으로 이동
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  };

// ✅ 박스를 아래쪽으로 이동
export const moveBoxDown = (target) => {
  gsap.to(target, {
    duration: 1.5,
    y: 200, // 🔥 아래쪽으로 이동
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      end: "bottom 50%",
      scrub: 1,
    },
  });
};

// ✅ 박스를 위쪽으로 이동
export const moveBoxUp = (target) => {
  gsap.to(target, {
    duration: 1.5,
    y: -200, // 🔥 위쪽으로 이동
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      end: "bottom 50%",
      scrub: 1,
    },
  });
};

// ✅ 박스를 아래쪽으로 이동 후 오른쪽
export const moveBoxDownRight = (target) => {
    gsap.to(target, {
      duration: 1.5,
      y: 200, // 🔥 아래쪽으로 이동
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
    gsap.to(target, {
        duration: 1.5,
        x: 200, // 🔴 오른쪽으로 이동
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: target,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
      });
  };

// ✅ 박스를 아래쪽으로 이동 후 왼쪽
export const moveBoxDownleft5 = (target) => {
    gsap.to(target, {
      duration: 1.5,
      y: 110, // 🔥 아래쪽으로 이동
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
    gsap.to(target, {
        duration: 1.5,
        x: -110, // 🔵 왼쪽로 이동
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: target,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
      });
  };

// ✅ 박스를 아래쪽으로 이동 후 왼쪽
export const moveBoxDownleft6 = (target) => {
    gsap.to(target, {
      duration: 1.5,
      y: 220, // 🔥 아래쪽으로 이동
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
    gsap.to(target, {
        duration: 1.5,
        x: -220, // 🔵 왼쪽로 이동
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: target,
          start: "top 70%",
          end: "bottom 50%",
          scrub: 1,
        },
      });
  };