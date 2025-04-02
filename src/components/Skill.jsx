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

        // index 1부터 등장/사라짐 제어
        skillText.forEach((_, index) => {
            if (index === 0) return;

            // 등장 시점
            gsap.fromTo(images, 
                { opacity: 0 }, 
                { 
                    opacity: 1, 
                    scrollTrigger: {
                        trigger: `.skill__desc div:nth-child(${index + 1})`,
                        start: "top center",
                        toggleActions: "play none none reverse",
                    } 
                }
            );

            // 사라짐 시점
            gsap.to(images, {
                opacity: 0,
                scrollTrigger: {
                    trigger: `.skill__desc div:nth-child(${index + 1})`,
                    start: "bottom 50%",
                    end: "bottom 0%",
                    scrub: true,
                }
            });
        });

        // 이미지 고정 효과는 항상 유지
        ScrollTrigger.create({
            trigger: imageRef.current,
            start: "top center",
            end: "top center",
            pin: true,
            pinSpacing: false,
            scrub: false,
        });
    }, []);

    return (
        <section id="skill">
            <div className="slkll__inner">
                <div className="skill__content">
                    <div className="skill__title">
                        <h2>My Skill <em>나의 스킬</em></h2>
                        <div className="skill__image" ref={imageRef}>
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
                                        <span className="skill__image-text">{skill.imageDesc[index]}</span>
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
