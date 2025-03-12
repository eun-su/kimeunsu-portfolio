import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";

import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Accordion from "./components/Accordion";
import HomeView from "./views/HomeView";
import Page1 from "./views/Page1";
import Page1One from "./views/Page1One"; 
import Page1Two from "./views/Page1Two"; 
import Page2 from "./views/Page2";
import Page2One from "./views/Page2One"; 
import Page2Two from "./views/Page2Two"; 
import Page3 from "./views/Page3";
import Page3One from "./views/Page3One"; 
import Page3Two from "./views/Page3Two"; 
// import Page4 from "./views/Page4";
// import Page4One from "./views/Page4One"; 
// import Page4Two from "./views/Page4Two";

import LoadingPage from "./components/LoadingPage";
import ScrollToTop from "./utils/ScrollToTop";
import smooth from "./utils/smooth";
import link from "./utils/link";
import './assets/css/transitions.css';

function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const loaderRef = useRef(null);

  const handleTransition = (path) => {
    setIsTransitioning(true);

    // ✅ GSAP 애니메이션: 로딩 박스 등장 (오른쪽 → 왼쪽)
    gsap.to(loaderRef.current, { x: "0%", duration: 0.5, ease: "power2.out" });

    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        setIsTransitioning(false);

        // ✅ GSAP 애니메이션: 로딩 박스 사라짐 (왼쪽 → 오른쪽)
        gsap.to(loaderRef.current, { x: "100%", duration: 0.5, ease: "power2.in" });
      }, 500);
    }, 500);
  };

  useEffect(() => {
    setIsTransitioning(false);
  }, [location]);

  return { isTransitioning, handleTransition, loaderRef };
}

function PageTransitionWrapper() {
  const { isTransitioning, handleTransition, loaderRef } = usePageTransition();

  return (
    <div id="wrap">
      <Header />
      <NavMenu>
        <Accordion onLinkClick={handleTransition} />
      </NavMenu>

      {/* ✅ 로딩 애니메이션 박스 */}
      <div ref={loaderRef} className="page-loader"></div>

      <main className={isTransitioning ? 'fade-out' : 'fade-in'}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page1One" element={<Page1One />} />
          <Route path="/page1Two" element={<Page1Two />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page2One" element={<Page2One />} />
          <Route path="/page2Two" element={<Page2Two />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page3One" element={<Page3One />} />
          <Route path="/page3Two" element={<Page3Two />} />
          {/* <Route path="/page4" element={<Page4 />} /> */}
          {/* <Route path="/page4One" element={<Page4One />} /> */}
          {/* <Route path="/page4Two" element={<Page4Two />} /> */}
        </Routes>
      </main>
    </div>
  );
}

const App = () => {
  useEffect(() => {
    smooth();
    link();
  }, []);

  return (
    <LoadingPage>
      <Router>
        <ScrollToTop />
        <PageTransitionWrapper />
      </Router>
    </LoadingPage>
  );
};

export default App;
