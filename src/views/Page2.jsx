// src/pages/Page3.js
import React from 'react';
import MoreContent from '../components/MoreContent';
import { headerNav } from '../constants/indexPage';
// import Header from '../components/Header';
import Footer from '../components/Footer';

function Page2() {
  return (
    <div>
      {/* <Header /> */}
      <main className='page-main'>
        <div>
          <h1>Gallery</h1>
          <h3>JavaScript Library jQuery</h3>
        </div>
        <MoreContent data={headerNav} itemsPerPage={6} />
        <Footer />
      </main>
    </div>
  );
}

export default Page2;