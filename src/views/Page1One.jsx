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
        <h2 id="flexTop" className="titleLink-none section-title">top</h2>
        
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
          display flex 속성과 속성값에 따라 배치와 정렬이 변하는 과정을 GSAP 활용하여 표현한 페이지
        </div>
        <FlexPage />
        <FlexBox />
        <h2 id="flexEnd" className="titleLink-none section-title">end</h2>
        <Footer />
      </main>
    </div>
  );
}

export default Page1One;