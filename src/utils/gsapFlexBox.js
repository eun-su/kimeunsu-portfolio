import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const isMobile = () => window.innerWidth <= 768;

const resetTargetStyle = (target) => {
  if (!target) return;

  gsap.set(target, {
    clearProps: "transform",
  });
};

const runDesktopOnly = (target, animationCallback) => {
  if (!target) return;

  if (isMobile()) {
    resetTargetStyle(target);
    return;
  }

  animationCallback();
};

// ✅ 스크롤에 따라 텍스트 변경 애니메이션
export const changeTextOnScroll = (oldText, newText, triggerElement) => {
  if (!oldText || !newText || !triggerElement) return;

  if (isMobile()) {
    gsap.set(oldText, { clearProps: "all", display: "inline" });
    gsap.set(newText, { clearProps: "all", display: "none" });
    return;
  }

  gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: "top 75%",
      end: "top 50%",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  })
    .to(oldText, {
      duration: 1,
      x: -50,
      opacity: 0,
      ease: "power2.inOut",
    })
    .set(oldText, { display: "none" })
    .set(newText, { display: "block", opacity: 0, x: 50 })
    .to(newText, {
      duration: 1,
      x: 0,
      opacity: 1,
      ease: "power2.inOut",
    });
};

// ✅ 박스를 왼쪽으로 이동
export const moveBoxLeft = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      x: -230,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "bottom 50%",
        scrub: 1,
        toggleClass: "active",
      },
    });
  });
};

// ✅ 박스를 오른쪽으로 이동
export const moveBoxRight = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      x: 230,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  });
};

// ✅ 박스를 아래쪽으로 이동
export const moveBoxDown = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      y: 200,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  });
};

// ✅ 박스를 위쪽으로 이동
export const moveBoxUp = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      y: -200,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  });
};

// ✅ 박스를 아래쪽으로 이동 후 오른쪽
export const moveBoxDownRight = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      y: 200,
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
      x: 200,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  });
};

// ✅ 5 박스를 아래쪽으로 이동 후 왼쪽
export const moveBoxDownLeft5 = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      y: 110,
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
      x: -110,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  });
};

// ✅ 6 박스를 아래쪽으로 이동 후 왼쪽
export const moveBoxDownLeft6 = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      y: 220,
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
      x: -220,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  });
};

// ✅ 7 박스를 왼쪽 이동 + 크기 키우기
export const moveBoxLeftScale8 = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      x: 10,
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
  });
};

// ✅ 8 박스를 왼쪽 이동 + 크기 키우기
export const moveBoxLeftScale9 = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      x: 30,
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
  });
};

// ✅ 9 박스를 왼쪽 이동
export const moveBoxLeft11 = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      x: 30,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        end: "bottom 70%",
        scrub: 1,
      },
    });
  });
};

// ✅ 10 박스를 이동
export const moveBoxDown12 = (target) => {
  runDesktopOnly(target, () => {
    gsap.to(target, {
      duration: 1.5,
      x: 30,
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
      x: -225,
      y: 110,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: target,
        start: "top 75%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  });
};

// ✅ 11 박스를 좌우로 이동
export const moveBoxLeftRight13 = (target) => {
  runDesktopOnly(target, () => {
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
        x: -60,
        ease: "power2.inOut",
      })
      .to(target, {
        duration: 1,
        x: -60,
        ease: "none",
      })
      .to(target, {
        duration: 1.5,
        x: 60,
        ease: "power2.inOut",
      });
  });
};