// src/pages/Page3.js
import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import Footer from '../components/Footer';
import FlexPage from '../components/FlexPage';
import FlexBox from '../components/FlexBox';

function Page1One() {
  return (
    <div>
      {/* <Header /> */}
      <main className='page-main'>
      <h2 id="slideLink" className="titleLink-none section-title">intro</h2>
        
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Page1", href: "/page1" },
            { label: "Current Page" }
          ]}
        />
      
      <div className="title-box">
          <h2 className="title-text">display flex</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">CSS GSAP</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          jQuery 라이브러리 Slick Slider 를 활용한 슬라이드 예제 작성
      </div>
        <FlexPage />
        <FlexBox />
        <Footer />
      </main>
    </div>
  );
}

export default Page1One;