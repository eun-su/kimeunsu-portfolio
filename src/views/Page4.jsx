import React from "react";
import styles from "../assets/css/Page.module.css";
import BlogPage from '../components/BlogPage';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Page4 = () => {
  return (
    <div className={styles.page1TwoContainer}>
      <main className="page-main">
        <BlogPage />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Page4;