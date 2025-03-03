import React, { useState } from "react";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import tabData from "../constants/indexHome";
import ResizableGrid from "../components/ResizableGrid";
import "../assets/css/Page1.css";

function Page1() {
  const [selectedTab, setSelectedTab] = useState(tabData[0]);

  return (
    <div>
      <main className="page-main">
        <h2 id="tabMenuLink" className="titleLink-none section-title">Tab Menu</h2>
        
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Page1", href: "/page1" },
            { label: "Current Page" }
          ]}
        />
        
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

        <h2 id="gridLink" className="titleLink-none section-title">CSS Grid</h2>
        <div className="title-box">
          <h2 className="title-text">CSS Grid</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">Bootstrap 5 JavaScript</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          여기에 간략한 설명을 입력하세요. 설명 박스는 둥근 모서리와 회색 배경을 가집니다.
        </div>

        <ResizableGrid />
        <Footer />
      </main>
    </div>
  );
}

export default Page1;