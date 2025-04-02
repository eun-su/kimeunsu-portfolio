import React, { useEffect, useRef, useState } from "react";
import { skillText } from "../constants";

const SkillView = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".skillview__text");
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
                if (isInView && currentIndex !== index) {
                    setCurrentIndex(index);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentIndex]);

    useEffect(() => {
        const images = imageRef.current?.children;
        if (!images) return;

        Array.from(images).forEach((img) => img.classList.remove("visible"));
        Array.from(images).forEach((img, i) => {
            setTimeout(() => {
                img.classList.add("visible");
            }, i * 150);
        });
    }, [currentIndex]);

    useEffect(() => {
        const handleFadeOut = () => {
            const skillSection = document.getElementById("skillview");
            const rect = skillSection.getBoundingClientRect();
            const imageEl = imageRef.current;

            if (!imageEl) return;

            const isLast = currentIndex === skillText.length - 1;

            if (isLast) {
                imageEl.style.opacity = "1";
                imageEl.style.transform = "translateY(0)";
                return;
            }

            if (rect.bottom < window.innerHeight * 1.3) {
                let fadeRatio = (rect.bottom - window.innerHeight * 0.1) / 300;
                fadeRatio = Math.max(0, Math.min(1, fadeRatio));
                imageEl.style.opacity = fadeRatio;
                imageEl.style.transform = `translateY(${200 - fadeRatio * 200}px)`;
            } else {
                imageEl.style.opacity = "1";
                imageEl.style.transform = "translateY(0)";
            }
        };

        window.addEventListener("scroll", handleFadeOut);
        return () => window.removeEventListener("scroll", handleFadeOut);
    }, [currentIndex]);

    return (
        <section id="skillview">
            <div className="skillview__inner">
                <div className="skillview__content">
                    <div className="skillview__title">
                        <h2>My Skill <em>나의 스킬</em></h2>
                        <div className="skillview__image" ref={imageRef}>
                            {skillText[currentIndex]?.image.map((imgSrc, idx) => (
                                <img key={idx} src={imgSrc} alt={`Skill ${currentIndex + 1} Logo ${idx + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="skillview__desc">
                    {skillText.map((skill, key) => (
                        <div className="skillview__text" key={key}>
                            <h2>{key + 1}.</h2>
                            <h3>{skill.mainTitle}</h3>
                            <h4>{skill.title}</h4>
                            <p>{skill.desc}</p>
                            <div className="skillview__image-container">
                                {skill.imageList.map((image, index) => (
                                    <div className="skillview__image-item" key={index}>
                                        <span className="skillview__image-title">{skill.imageTitleList[index]}</span>
                                        <img src={image} alt={skill.imageDesc[index]} />
                                        <span className="skillview__image-text">{skill.imageDesc[index]}</span>
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

export default SkillView;