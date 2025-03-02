import React, { useState, useEffect, useMemo } from 'react';
import AccordionItem from './AccordionItem';
import { useLocation } from 'react-router-dom'; // 페이지 URL 가져오기

const items = [
  {
    title: 'Bootstrap 5',
    content: <strong>Example page using CSS and HTML with Bootstrap 5</strong>,
    links: ['/page1', '/page1One', '/page1Two'],
  },
  {
    title: 'JavaScript Library',
    content: <strong>jQuery</strong>,
    links: ['/page2', '/page2One', '/page2Two'],
  },
  {
    title: 'Telerik',
    content: <strong>This is the third item's accordion body.</strong>,
    links: ['/page3', '/page3One', '/page3Two'],
  },
  {
    title: 'Test', // 아코디언 추가
    content: <strong>Test Place</strong>,
    links: ['/page4', '/page4One', '/page4Two'], // 해당되는 페이지 링크 추가
  },
];

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

  const memoizedItems = useMemo(() => items, []);

  useEffect(() => {
    if (!isMobile) {
      // PC에서는 URL에 따라 자동으로 열릴 아코디언 설정
      const activeIndex = memoizedItems.findIndex((item) =>
        item.links.includes(location.pathname)
      );
      setOpenIndex(activeIndex);
    }
  }, [location.pathname, isMobile, memoizedItems]);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getClassName = (index) => {
    let className = 'accordion-body';
    if (openIndex === index) {
      className += ' show';
      if (index === 0) className += ' first';
      if (index === 1) className += ' second';
      if (index === 2) className += ' third';
      if (index === 2) className += ' fourth'; // 아코디언 추가
    }
    return className;
  };

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
          isActive={openIndex === index || item.links.includes(location.pathname)}
          index={index} // index 값 전달
          className={getClassName(index)} // 클래스 자동 적용
        />
      ))}
    </div>
  );
}

export default Accordion;
