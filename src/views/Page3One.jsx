// src/pages/Page3.js
import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import UnderConstruction from '../components/UnderConstruction';
import Footer from '../components/Footer';

function Page3One() {
  return (
    <div>
      {/* <Header /> */}
      <main className='page-main'>
        <h2 id="slideLink" className="titleLink-none section-title">Telerik</h2>
        
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Page1", href: "/page1" },
            { label: "Current Page" }
          ]}
        />
      
        <div className="title-box">
          <h2 className="title-text">페이지 작업중</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">Under Construction</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          페이지 작업중. 순차적으로 보강사항 내용이 추가됩니다
        </div>
        <UnderConstruction />
        <Footer />
      </main>
    </div>
  );
}

export default Page3One;