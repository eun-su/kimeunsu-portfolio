import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Accordion from "./components/Accordion";
import HomeView from "./views/HomeView";
import Page1 from "./views/Page1";
import Page2 from "./views/Page2";
import Page3 from "./views/Page3";
import Page1One from "./views/Page1One"; 
import Page1Two from "./views/Page1Two"; 
import Page2One from "./views/Page2One"; 
import Page2Two from "./views/Page2Two"; 
import Page3One from "./views/Page3One"; 
import Page3Two from "./views/Page3Two"; 

import ScrollToTop from "./utils/ScrollToTop";
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
      }, 500);
    }, 500);
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
          <Route path="/page1One" element={<Page1One />} />
          <Route path="/page1Two" element={<Page1Two />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page2One" element={<Page2One />} />
          <Route path="/page2Two" element={<Page2Two />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page3One" element={<Page3One />} />
          <Route path="/page3Two" element={<Page3Two />} />
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
      <ScrollToTop />
      <PageTransitionWrapper />
    </Router>
  );
};

export default App;