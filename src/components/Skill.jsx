import React, { useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillText } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        skillText.forEach((_, index) => {
            ScrollTrigger.create({
                trigger: `.skill__desc div:nth-child(${index + 1})`,
                start: "top center",
                end: "bottom center",
                onEnter: () => setCurrentIndex(index),
                onEnterBack: () => setCurrentIndex(index),
            });
        });
    }, []);

    useLayoutEffect(() => {
        if (!imageRef.current) return;

        const images = imageRef.current.children;

        // ✅ 1. 이미지 등장 애니메이션
        gsap.fromTo(images, 
            { y: 0, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power1.out" } // ✅ 여러 이미지 순차적으로 등장
        );

        // ✅ 2. 중간에 일정 구간 동안 고정 (멈춤)
        ScrollTrigger.create({
            trigger: imageRef.current,
            start: "top center",
            end: "top center",
            pin: true, // ✅ 이미지 고정
            pinSpacing: false, // ✅ 불필요한 여백 제거
            scrub: false, // ✅ 고정 상태 유지
        });

        // ✅ 3. 컴포넌트 끝나기 10vh 전에 서서히 사라짐
        gsap.to(images, {
            y: 200, opacity: 0, duration: 1, ease: "power1.out",
            stagger: 0.2, // ✅ 여러 이미지 순차적으로 사라짐
            scrollTrigger: {
                trigger: "#skill",
                start: "bottom 50%",
                end: "bottom 0%",
                scrub: true,
            }
        });

    }, [currentIndex]);
    
    return (
        <section id="skill">
            <div className="slkll__inner">
                <div className="skill__content">
                    <div className="skill__title">
                        <h2>My Skill <em>나의 스킬</em></h2>
                        <div className="skill__image" ref={imageRef}>
                            {/* ✅ 여러 개의 이미지 배열 렌더링 */}
                            {skillText[currentIndex]?.image.map((imgSrc, idx) => (
                                <img key={idx} src={imgSrc} alt={`Skill ${currentIndex + 1} Logo ${idx + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div className="skill__text" key={key}>
                            <span>{key + 1}.</span>
                            <h3>{skill.mainTitle}</h3>
                            <h4>{skill.title}</h4>
                            <p>{skill.desc}</p>
                            <div className="skill__image-container">
                                {skill.imageList.map((image, index) => (
                                    <div className="skill__image-item" key={index}>
                                        <span className="skill__image-title">{skill.imageTitleList[index]}</span>
                                        <img src={image} alt={skill.imageDesc[index]} />
                                        <span className="skill__image-text">{skill.imageDesc[index]}</span> {/* ✅ 이미지 설명 추가 */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
