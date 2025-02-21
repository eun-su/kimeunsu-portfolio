// src/pages/Page3.js
import React from 'react';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import FlexPage from '../components/FlexPage';

function Page1One() {
  return (
    <div>
      {/* <Header /> */}
      <main className='page-main'>
        <div>display : flex</div>
        <FlexPage />
        <Footer />
      </main>
    </div>
  );
}

export default Page1One;