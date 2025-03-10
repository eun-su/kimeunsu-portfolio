import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ 스크롤에 따라 텍스트 변경 애니메이션
export const changeTextOnScroll = (oldText, newText, triggerElement) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement, // 🔥 특정 요소가 화면에 나타날 때 트리거
      start: "top 75%", // 🔥 화면의 75% 지점에서 시작
      end: "top 50%", // 🔥 50%까지 도달하면 완료
      scrub: 1, // 🔥 부드러운 스크롤 적용
      toggleActions: "play none none reverse", // 🔥 스크롤 내릴 때 실행, 올릴 때 되돌리기
    },
  })
  .to(oldText, {
    duration: 1,
    x: -50, // 🔥 왼쪽으로 이동
    opacity: 0, // 🔥 점점 사라짐
    ease: "power2.inOut",
  })
  .set(oldText, { display: "none" }) // 🔥 완전히 사라진 후 숨김
  .set(newText, { display: "block", opacity: 0, x: 50 }) // 🔥 새로운 텍스트 오른쪽에서 준비
  .to(newText, {
    duration: 1,
    x: 0, // 🔥 원래 위치로 이동
    opacity: 1, // 🔥 점점 나타남
    ease: "power2.inOut",
  });
};

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

// ✅ 5 박스를 아래쪽으로 이동 후 왼쪽
export const moveBoxDownLeft5 = (target) => {
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

// ✅ 6 박스를 아래쪽으로 이동 후 왼쪽
export const moveBoxDownLeft6 = (target) => {
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

// ✅ 7 박스를 왼쪽 이동 크기 키우기
export const moveBoxLeftScale8 = (target) => {
  gsap.to(target, {
    duration: 1.5,
    x: 10, // 🔥 아래쪽으로 이동
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
      scale: 1.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
};

// ✅ 8 박스를 왼쪽 이동 크기 키우기
export const moveBoxLeftScale9 = (target) => {
  gsap.to(target, {
    duration: 1.5,
    x: 30, // 🔥 아래쪽으로 이동
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
      scale: 1.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
};

// ✅ 9 박스를 왼쪽 이동 크기 키우기
export const moveBoxLeft11 = (target) => {
  gsap.to(target, {
    duration: 1.5,
    x: 30, // 🔥 아래쪽으로 이동
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: target,
      start: "top 85%",
      end: "bottom 70%",
      scrub: 1,
    },
  });
};

// ✅ 10 박스를 왼쪽 이동 크기 키우기
export const moveBoxDown12 = (target) => {
  gsap.to(target, {
    duration: 1.5,
    x: 30, // 🔥 아래쪽으로 이동
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
      x: -225, // 🔥 왼쪽으로 이동
      y: 110, // 🔥 아래쪽으로 이동
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 75%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
};

// ✅ 11 박스를 왼쪽 이동 크기 키우기
export const moveBoxLeftRight13 = (target) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "bottom 50%",
      scrub: 1,
    },
  })
  .to(target, {
    duration: 1.5,
    x: -60, // 🔥 먼저 왼쪽으로 이동
    ease: "power2.inOut",
  })
  .to(target, {
    duration: 1,
    x: -60, // 🔥 먼저 왼쪽으로 이동
    ease: "none",
  })
  .to(target, {
    duration: 1.5,
    x: 60, // 🔥 왼쪽에서 오른쪽으로 이동
    ease: "power2.inOut",
  });
};