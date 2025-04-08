import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { headerNav } from "../constants";

const Header = () => {
    const [show, setShow] = useState(false);
    const [sectionTitles, setSectionTitles] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const updateTitles = () => {
            const titles = Array.from(document.querySelectorAll(".section-title")).map((el) => ({
                id: el.id,
                text: el.innerText
            }));
            setSectionTitles(titles);
        };

        // 페이지 이동 시 네비게이션 업데이트
        setTimeout(updateTitles, 100);

        // 커스텀 이벤트 리스너 추가
        window.addEventListener("updateHeader", updateTitles);

        return () => {
            window.removeEventListener("updateHeader", updateTitles);
        };
    }, [location.pathname]);

    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100, // 🚀 헤더 높이만큼 여백 추가
                behavior: "smooth",
            });
        }
    };
    

    return (
        <header id="header" role="banner">
            <div className="header__inner">
                <div className="header__logo">
                    <h1>
                        <a href="/" className="logo__color">KIM EUNSU<em>PORTFOLIO</em></a>
                    </h1>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인메뉴">
                    <ul>
                        {sectionTitles.length > 0 ? (
                            sectionTitles.map((section) => (
                                <li key={section.id}>
                                    <button onClick={() => handleScrollToSection(section.id)}>{section.text}</button>
                                </li>
                            ))
                        ) : (
                            headerNav.map((nav, key) => (
                                <li key={key}>
                                    <a href={nav.url} className="logo__color">{nav.title}</a>
                                </li>
                            ))
                        )}
                    </ul>
                </nav>
                <div className="header__nav__mobile" id="headerToggle" aria-controls="primary-menu" aria-expanded={show ? "true" : "false"} role="button" tabIndex="0" onClick={toggleMenu}>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
