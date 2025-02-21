// src/pages/Page3.js
import React from 'react';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/css/Page1.css';

function Page1() {
  return (
    <div>
      {/* <Header /> */}
      <main className='page-main'>
        <div className="page1-container">
          <header className="header">Header Section</header>
            <section className="intro">
              <div className="intro-text">Introduction Text</div>
              <div className="intro-image">Image Placeholder</div>
            </section>
            <section className="gallery">
              <div className="gallery-item">Item 1</div>
              <div className="gallery-item">Item 2</div>
              <div className="gallery-item">Item 3</div>
              <div className="gallery-item">Item 4</div>
              <div className="gallery-item">Item 5</div>
              <div className="gallery-item">Item 6</div>
            </section>
        </div>
        <div className="grid-container">
          <header className="grid-header">Header</header>
          <nav className="grid-nav">Navigation</nav>
          <aside className="grid-sidebarLeft">Sidebar Left</aside>
          <main className="grid-main">
            <section className="grid-section">
              <div className="section-box">Article 1</div>
              <div className="section-box">Article 2</div>
              <div className="section-box">Article 3</div>
              <div className="section-box">Article 4</div>
            </section>
          </main>
          <aside className="grid-sidebarRight">Sidebar Right</aside>
          <footer className="grid-footer">Footer</footer>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Page1;