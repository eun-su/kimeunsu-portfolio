// src/pages/Page3.js
import React from 'react';
import MoreContentWithModal from '../components/MoreContentWithModal';
import { headerNav } from '../constants/indexPage';
import Footer from '../components/Footer';

function Page1Two() {
  return (
    <div>
      <main className='page-main'>
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

export default Page1Two;