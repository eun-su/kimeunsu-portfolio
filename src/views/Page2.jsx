// src/pages/Page3.js
import React from 'react';
import { headerNav } from '../constants/indexPage';
import Breadcrumb from "../components/Breadcrumb";
import VariableWidthSlider from '../components/VariableWidthSlider';
import AutoplaySlide from '../components/AutoplaySlider';
import MoreContentWithModal from '../components/MoreContentWithModal';
import Footer from '../components/Footer';
import BackgroundTrigger from "../components/BackgroundTrigger";

function Page2() {
  return (
    <div>
      <BackgroundTrigger bgColor="#f3ede8" textColor="#000000">
      <main className='page-main'>
        <h2 id="slideLink" className="titleLink-none section-title">Slick Slider</h2>
        
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Page1", href: "/page1" },
            { label: "Current Page" }
          ]}
        />
        
        <div className="title-box">
          <h2 className="title-text">Slick Slider</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">CSS jQuery</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          jQuery 라이브러리 Slick Slider 를 활용한 슬라이드 예제 작성
        </div>

        <div className='title-text-h3'>
          <h3>Variable Width Slide</h3>
        </div>
        <VariableWidthSlider />
        <div className='title-text-h3'>
          <h3>Autoplay Slide</h3>
        </div>
        <AutoplaySlide />

        <div className="title-box">
          <h2 className="title-text">Modal Card Gallery</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">CSS Grid jQuery</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          카드 갤러리 모달
        </div>
        <MoreContentWithModal data={headerNav} itemsPerPage={6} />
        <Footer />
      </main>
      </BackgroundTrigger>
    </div>
  );
}

export default Page2;