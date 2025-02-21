import React from "react";
import "../assets/css/Flex.css"; // 필요한 스타일만 정리

const FlexPage = () => {
  return (
    <div className="flex-page">
      {/* 네비게이션 바 */}
      <nav className="flex-navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="flex-navbar-brand" href="/">Flex Guide</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#flex-navbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="flex-navbar">
            <ul className="flex-navbar-nav ms-auto">
              <li className="flex-nav-item"><a className="flex-nav-link" href="/">Home</a></li>
              <li className="flex-nav-item"><a className="flex-nav-link" href="/">Examples</a></li>
              <li className="flex-nav-item"><a className="flex-nav-link" href="/">Docs</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 헤더 */}
      <header className="flex-header">
        <div className="container text-center">
          <h1 className="fw-bolder">Understanding Flexbox</h1>
          <p className="lead text-muted">Learn how to use Flexbox for responsive layouts</p>
        </div>
      </header>

      {/* Flex Container & Items */}
      <section className="flex-section">
        <div className="container">
          <h2>1. Flex Container & Items</h2>
          <p>
            A flex container holds flex items and enables a flexible layout. The main properties include:
            <code>display: flex</code>, <code>justify-content</code>, <code>align-items</code>, and <code>flex-wrap</code>.
          </p>
          <div className="flex-container">
            <div className="flex-item">Item 1</div>
            <div className="flex-item">Item 2</div>
            <div className="flex-item">Item 3</div>
          </div>
        </div>
      </section>

      {/* Flex Direction & Wrap */}
      <section className="flex-section bg-light">
        <div className="container">
          <h2>2. Flex Direction & Wrap</h2>
          <p>
            The <code>flex-direction</code> property controls the main axis, while <code>flex-wrap</code> allows wrapping.
          </p>
          <div className="flex-example">
            <div className="flex-box row">Row Direction</div>
            <div className="flex-box column">Column Direction</div>
            <div className="flex-box wrap">Wrap Enabled</div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="flex-footer">
        <div className="container text-center">
          <p>&copy; 2025 Flex Guide. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FlexPage;