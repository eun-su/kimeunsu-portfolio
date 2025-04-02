import React from "react";
// import Header from "../components/Header";
import BackgroundTrigger from "../components/BackgroundTrigger";
import Intro from "../components/Intro";
import Profile from "../components/Profile";
// import Skill from "../components/Skill";
import SkillView from "../components/SkillView"
import Site from "../components/Site";
// import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
  return (
    <div className="homeview" id="homeview">
      {/* <Skip /> */}
      {/* <Header /> */}
      <Main>
        <BackgroundTrigger bgColor="#000000" textColor="#ffffff">
          <Intro />
        
          <Profile />
        </BackgroundTrigger>
        <BackgroundTrigger bgColor="#f3ede8" textColor="#000000">
          <SkillView />
          {/* <Skill /> */}
          <Site />
          {/* <Port /> */}
          <Contact />
        </BackgroundTrigger>
      </Main>
      <Footer />
    </div>
  );
};

export default HomeView;
