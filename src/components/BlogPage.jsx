import React, { useEffect, useState } from "react";
import "../assets/css/Blog.css"; // BlogPage 전용 CSS

const BlogPage = () => {
  const [bootstrapLoaded, setBootstrapLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false); // 모달 상태 관리

  useEffect(() => {
    if (!bootstrapLoaded) {
      // Bootstrap CSS 추가
      const bootstrapCSS = document.createElement("link");
      bootstrapCSS.rel = "stylesheet";
      bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
      document.head.appendChild(bootstrapCSS);

      // Bootstrap JS 추가
      const bootstrapJS = document.createElement("script");
      bootstrapJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
      bootstrapJS.defer = true;
      document.body.appendChild(bootstrapJS);

      setBootstrapLoaded(true);

      return () => {
        document.head.removeChild(bootstrapCSS);
        document.body.removeChild(bootstrapJS);
      };
    }
  }, [bootstrapLoaded]);

  return (
    <div className="blog-page">
      {/* 네비게이션 바 */}
      <nav className="blog-navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="blog-navbar-brand" href="/">Bootstrap</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#blog-navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="blog-navbarSupportedContent">
            <ul className="blog-navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="blog-nav-item"><a className="blog-nav-link" href="/">Home</a></li>
              <li className="blog-nav-item"><a className="blog-nav-link" href="/">About</a></li>
              <li className="blog-nav-item"><a className="blog-nav-link" href="/">Contact</a></li>
              <li className="blog-nav-item"><a className="blog-nav-link blog-active" href="/">Blog</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 헤더 */}
      <header className="blog-header py-5 border-bottom mb-4">
        <div className="container text-center my-5">
          <h1 className="blog-fw-bolder">Modal 모달창</h1>
          <p className="blog-lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <div className="container">
        <div className="row">
          {/* 블로그 게시물 */}
          <div className="col-lg-8">
            <div className="blog-card mb-4">
              <a href="/"><img className="blog-card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="blog" /></a>
              <div className="blog-card-body">
                <div className="small text-muted">January 1, 2022</div>
                <h2 className="blog-card-title">Featured Post Title</h2>
                <p className="blog-card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <button className="blog-btn-primary" onClick={() => setShowModal(true)}>Read more</button>
              </div>
            </div>
          </div>

          {/* 사이드바 */}
          <div className="col-lg-4">
            <div className="blog-card mb-4">
              <div className="blog-card-header">Search</div>
              <div className="blog-card-body">
                <div className="blog-input-group">
                  <input className="blog-form-control" type="text" placeholder="Enter search term..." />
                  <button className="blog-btn-primary" type="button">Go!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="blog-footer py-5">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p>
        </div>
      </footer>

      {/* 모달창 */}
      {showModal && (
        <div className="blog-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="blog-card mb-4">
              <a href="/"><img className="blog-card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="blog" /></a>
              <div className="blog-card-body">
                <div className="small text-muted">January 1, 2022</div>
                <h2 className="blog-card-title">Featured Post Title</h2>
                <p className="blog-card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <button className="blog-modal-close-btn" onClick={() => setShowModal(false)}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
