import React, { useState, useEffect, useMemo } from "react";
import AccordionItem from "./AccordionItem";
import { useLocation } from "react-router-dom";
import accordionItems from "../constants/accordionData";

function Accordion({ onLinkClick }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const memoizedItems = useMemo(() => accordionItems, []);

  useEffect(() => {
    if (!isMobile) {
      const activeIndex = memoizedItems.findIndex((item) =>
        item.links.some((link) => link.path === location.pathname)
      );
      setOpenIndex(activeIndex);
    }
  }, [location.pathname, isMobile, memoizedItems]);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
    <div className="accordion-subject">+ My Blog</div>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          links={item.links}
          onLinkClick={onLinkClick}
          isMobile={isMobile}
          index={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
