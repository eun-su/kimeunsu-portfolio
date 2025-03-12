import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../assets/img/eunsu.png";
import { introText } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const imgRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(() => {
        // ✅ 이미지 회전 애니메이션 (스크롤에 따라 점진적 변화)
        gsap.to(imgRef.current, {
            rotation: 0, // 15도 회전
            ease: "none",
            scrollTrigger: {
                trigger: imgRef.current,
                start: "top bottom", // 이미지가 화면에 들어올 때 시작
                end: "bottom top", // 스크롤이 이미지 아래까지 진행될 때까지 회전 유지
                scrub: 1, // ✅ 스크롤과 함께 부드럽게 회전
                anticipatePin: 1, // ✅ 고정될 때 튕기는 효과 방지
                invalidateOnRefresh: true, // ✅ 화면 크기 변경 시 애니메이션 재등록
                toggleActions: "play reverse play reverse",
            },
        });

        // ✅ h2 텍스트 한 글자씩 나타나는 애니메이션 (띄어쓰기 유지)
        let originalText = introText.title; // 원본 텍스트 유지
        let formattedText = originalText
            .split("")
            .map((char) => (char === " " ? "&nbsp;" : `<span class="char">${char}</span>`))
            .join("");

        titleRef.current.innerHTML = formattedText; // HTML로 설정 (띄어쓰기 유지)

        gsap.fromTo(
            titleRef.current.children,
            { opacity: 0.5 }, // 시작: 투명
            {
                opacity: 1, // 나타남
                duration: 0.5, // 각 글자에 걸리는 시간
                stagger: 0.1, // 글자마다 0.1초 간격으로 나타남
                repeat: -1, // 무한 반복
                yoyo: true, // 나타났다가 다시 투명해짐
            }
        );
    }, []);

    return (
        <section id="intro">
            <div className="intro__inner">
                <h2 ref={titleRef} className="intro__title">
                    {introText.title}
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
