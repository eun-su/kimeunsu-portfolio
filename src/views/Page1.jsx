import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import tabData from "../constants/indexHome";
import "../assets/css/Page1.css";

function Page1() {
    const [selectedTab, setSelectedTab] = useState(tabData[0]);
    const [gridSize, setGridSize] = useState({ width: 768, height: 600 });
    const [showArrow, setShowArrow] = useState(true);
    const [isMobileLayout, setIsMobileLayout] = useState(gridSize.width <= 768);

    useEffect(() => {
        const timer = setTimeout(() => setShowArrow(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setIsMobileLayout(gridSize.width <= 768);
    }, [gridSize.width]);

    const handleMouseDown = (event) => {
        event.preventDefault();
        const startX = event.clientX;
        const startWidth = gridSize.width;

        const handleMouseMove = (moveEvent) => {
            const newWidth = startWidth + (moveEvent.clientX - startX);
            setGridSize({ width: Math.max(300, newWidth), height: gridSize.height });
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div>
            <main className="page-main">
              {/* section 1 Top */}
                <h2 id="tabMenuLink" className="titleLink-none section-title">Tab Menu</h2>
                <div className="title-box">
                    <h2 className="title-text">Tab Menu</h2>
                    <div className="title-bar"></div>
                    <div className="subtitle-text">CSS Bootstrap 5</div>
                </div>
                <div className="title-divider"></div>
                <div className="description-box">
                  메뉴를 클릭하면 하단의 content → 원하는 내용으로 변경되는 탭 메뉴
                </div>

                <div className="tab-header">
                    <div className="tab-menu">
                        {tabData.map((tab) => (
                            <button
                                key={tab.id}
                                className={selectedTab.id === tab.id ? "active" : ""}
                                onClick={() => setSelectedTab(tab)}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>
                    <div className="tab-content">
                        <h2 id="selectedTabTitle">{selectedTab.title}</h2>
                        <p className="tab-content-p">{selectedTab.description}</p>
                        <ul>
                            {selectedTab.tools.map((tool, index) => (
                                <li key={index}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                </div>
              {/* section 1 End */}

              {/* section 2 Top */}
                <h2 id="girdLink" className="titleLink-none section-title">CSS Grid</h2>
                <div className="title-box">
                    <h2 className="title-text">CSS Grid</h2>
                    <div className="title-bar"></div>
                    <div className="subtitle-text">Bootstrap 5 JavaScript</div>
                </div>
                <div className="title-divider"></div>
                <div className="description-box">
                    여기에 간략한 설명을 입력하세요. 설명 박스는 둥근 모서리와 회색 배경을 가집니다.
                </div>

                <div className="resizable-wrapper">
                    <div className="resizable-container">
                        <div className={`grid-container resizable-box ${isMobileLayout ? "mobile-layout" : ""}`} 
                            style={{ width: gridSize.width + "px", height: gridSize.height + "px" }}>
                            <header className="grid-header">Header</header>
                            <nav className="grid-nav">Navigation</nav>
                            <aside className="grid-sidebarLeft">Sidebar Left</aside>
                            <main className="grid-main">
                                <section className="grid-section">
                                    <div className="section-box">Article 1</div>
                                    <div className="section-box">Article 2</div>
                                    <div className="section-box">Article 3</div>
                                    <div className="section-box">Article 4</div>
                                </section>
                            </main>
                            <aside className="grid-sidebarRight">Sidebar Right</aside>
                            <footer className="grid-footer section-title" id="footer">Footer</footer>
                        </div>
                        <div className="resizer-area" onMouseDown={handleMouseDown}>
                            <span className={`resize-arrow ${showArrow ? "show" : ""}`}></span>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </div>
    );
}

export default Page1;