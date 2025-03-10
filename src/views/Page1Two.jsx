// src/pages/Page3.js
import React from 'react';
import Breadcrumb from "../components/Breadcrumb";
import MoreContentWithModal from '../components/MoreContentWithModal';
import { headerNav } from '../constants/indexPage';
import Footer from '../components/Footer';

function Page1Two() {
  return (
    <div>
      <main className='page-main'>
        <h2 id="slideLink" className="titleLink-none section-title">Card</h2>
        
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Page1", href: "/page1" },
            { label: "Current Page" }
          ]}
        />
      
        <div className="title-box">
          <h2 className="title-text">Modal Card</h2>
          <div className="title-bar"></div>
          <div className="subtitle-text">CSS Bootstrap 5</div>
        </div>
        <div className="title-divider"></div>
        <div className="description-box">
          display flex 그리고 React 를 활용한 페이지 (작업중)
        </div>
        <div className='title-text-h3'>
          <h3>Modal Card and Lead more Button</h3>
        </div>
        <MoreContentWithModal data={headerNav} itemsPerPage={6} />
        <Footer />
      </main>
    </div>
  );
}

export default Page1Two;