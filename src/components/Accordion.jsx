import React, { useState, useEffect } from 'react';
import AccordionItem from './AccordionItem';
import { useLocation } from 'react-router-dom'; // 페이지 URL 가져오기

function Accordion({ onLinkClick }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation(); // 현재 URL 가져오기

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // 현재 페이지 URL에 맞는 아코디언을 자동으로 열기
    const activeIndex = items.findIndex((item) =>
      item.links.includes(location.pathname)
    );
    setOpenIndex(activeIndex);
  }, [location.pathname]);

  const handleClick = (index) => {
    if (isMobile) {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    } else {
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  const items = [
    {
      title: 'Accordion Item #1',
      content: <strong>Bootstrap 5</strong>,
      links: ['/page1', '/page1_1', '/page1_2'],
    },
    {
      title: 'Accordion Item #2',
      content: <strong>This is the second item's accordion body.</strong>,
      links: ['/page2', '/page2_1', '/page2_2'],
    },
    {
      title: 'Accordion Item #3',
      content: <strong>This is the third item's accordion body.</strong>,
      links: ['/page3', '/page3_1', '/page3_2'],
    },
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
          links={item.links}
          onLinkClick={onLinkClick}
          isMobile={isMobile}
          isActive={openIndex === index || item.links.includes(location.pathname)} // 현재 페이지에 해당하는 경우 active
          index={index} // index 값 전달
        />
      ))}
    </div>
  );
}

export default Accordion;