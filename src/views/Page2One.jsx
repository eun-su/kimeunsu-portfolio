// src/pages/Page3.js
import React from 'react';
// import Header from '../components/Header';
import Footer from '../components/Footer';

function Page2One() {
  return (
    <div>
      {/* <Header /> */}
      <main className='page-main'>
        <h2 id="slideLink" className="titleLink-none section-title">Slick Slider</h2>
        <div>GSAP(GreenSock Animation Platform) JavaScript 기반 애니메이션 라이브러리</div>
        <Footer />
      </main>
    </div>
  );
}

export default Page2One;