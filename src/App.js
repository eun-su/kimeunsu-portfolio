import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Accordion from "./components/Accordion";
import HomeView from "./views/HomeView";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import Page3 from "./views/Page3";
import Page1_1 from "./views/Page1_1"; // 추가된 페이지
import Page1_2 from "./views/Page1_2"; // 추가된 페이지
import Page2_1 from "./views/Page2_1"; // 추가된 페이지
import Page2_2 from "./views/Page2_2"; // 추가된 페이지
import Page3_1 from "./views/Page3_1"; // 추가된 페이지
import Page3_2 from "./views/Page3_2"; // 추가된 페이지

import smooth from "./utils/smooth";
import link from "./utils/link";
import './assets/css/transitions.css';

function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTransition = (path) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // 페이드 인 시간과 동일하게 설정
    }, 500); // 페이드 아웃 시간과 동일하게 설정
  };

  useEffect(() => {
    setIsTransitioning(false);
  }, [location]);

  return { isTransitioning, handleTransition };
}

function PageTransitionWrapper() {
  const { isTransitioning, handleTransition } = usePageTransition();

  return (
    <div id="wrap">
      <Header />
      <NavMenu>
        <Accordion onLinkClick={handleTransition} />
      </NavMenu>
      <main className={isTransitioning ? 'fade-out' : 'fade-in'}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page1_1" element={<Page1_1 />} /> {/* 추가된 Route */}
          <Route path="/page1_2" element={<Page1_2 />} /> {/* 추가된 Route */}
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page2_1" element={<Page2_1 />} /> {/* 추가된 Route */}
          <Route path="/page2_2" element={<Page2_2 />} /> {/* 추가된 Route */}
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page3_1" element={<Page3_1 />} /> {/* 추가된 Route */}
          <Route path="/page3_2" element={<Page3_2 />} /> {/* 추가된 Route */}
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
    <Router>
      <PageTransitionWrapper />
    </Router>
  );
};

export default App;