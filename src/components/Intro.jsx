import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../assets/img/eunsu.png";
import { introText } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const imgRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const thirdTitleRef = useRef(null);

    useEffect(() => {
        // ✅ 이미지 회전 애니메이션
        gsap.to(imgRef.current, {
            rotation: 0,
            ease: "none",
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                toggleActions: "play reverse play reverse",
            },
        });

        // ✅ h2 텍스트 애니메이션 함수
        const animateText = (element) => {
            gsap.fromTo(
                element.querySelectorAll(".char"),
                { opacity: 0.5 },
                {
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    repeat: -1,
                    yoyo: true,
                }
            );
        };

        // ✅ 기존 titleRef, subtitleRef, thirdTitleRef 각각 애니메이션 적용
        animateText(titleRef.current);
        animateText(subtitleRef.current);
        animateText(thirdTitleRef.current);

    }, []);

    return (
        <section id="intro">
            <div className="intro__inner">
                {/* ✅ 첫 번째 h2 */}
                <h2 ref={titleRef} className="intro__title">
                    <span className="highlight">
                        {"Web".split("").map((char, index) => (
                            <span key={index} className="char">{char}</span>
                        ))}
                    </span>{" "}
                    <span>
                        {"publisher".split("").map((char, index) => (
                            <span key={index} className="char">{char}</span>
                        ))}
                    </span>
                </h2>

                {/* ✅ 두 번째 h2 */}
                <h2 ref={subtitleRef} className="intro__subtitle">
                    {"DESIGNER".split("").map((char, index) => (
                        <span key={index} className="char">{char}</span>
                    ))}
                </h2>

                {/* ✅ 세 번째 h2 */}
                <h2 ref={thirdTitleRef} className="intro__third-title">
                    {"DEVELOPER".split("").map((char, index) => (
                        <span key={index} className="char">{char}</span>
                    ))}
                </h2>

                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro__text">
                    <div className="text">
                        <div>{introText.desc[0]}</div>
                        <div>{introText.desc[1]}</div>
                        <div>{introText.desc[2]}</div>
                    </div>
                    <div className="img" ref={imgRef}>
                        <img src={about} alt="어바웃미" />
                    </div>
                </div>
                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Intro;
