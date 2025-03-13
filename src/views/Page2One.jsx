// src/pages/Page3.js
import React from 'react';
import Port from '../components/Port';
import Footer from '../components/Footer';
import Breadcrumb from "../components/Breadcrumb";

function Page2One() {
  return (
    <div>
      {/* <Header /> */}
      <main className='page-main'>
        <h2 id="slideLink" className="titleLink-none section-title">GSAP</h2>
        
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Page1", href: "/page1" },
            { label: "Current Page" }
          ]}
        />
      
        <div className="title-box">
          <h2 className="title-text">GSAP 가로모드</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">CSS GSAP</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          GSAP Library 이용한 스크롤 가로 페이지 전환
        </div>
        <Port />
        <Footer />
      </main>
    </div>
  );
}

export default Page2One;