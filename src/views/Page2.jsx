// src/pages/Page3.js
import React from 'react';
import MoreContentWithModal from '../components/MoreContentWithModal';
import { headerNav } from '../constants/indexPage';
import Breadcrumb from "../components/Breadcrumb";
import Footer from '../components/Footer';

function Page2() {
  return (
    <div>
      {/* <Header /> */}
      <main className='page-main'>
        <h2 id="slideLink" className="titleLink-none section-title">Slick Slider</h2>
        
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Page1", href: "/page1" },
            { label: "Current Page" }
          ]}
        />
        
        <div>
          <h1>Gallery</h1>
          <h3>JavaScript Library jQuery</h3>
        </div>
        <MoreContentWithModal data={headerNav} itemsPerPage={6} />
        <Footer />
      </main>
    </div>
  );
}

export default Page2;