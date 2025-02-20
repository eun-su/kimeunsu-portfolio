import React, { useState, useEffect } from 'react';
import AccordionItem from './AccordionItem';

function Accordion({ onLinkClick }) {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (isMobile ? (prevIndex === index ? null : index) : prevIndex === index ? null : index));
  };

  const items = [
    {
      title: 'Accordion Item #1',
      content: <strong>Bootstrap 5</strong>,
      link: '/page1',
    },
    {
      title: 'Accordion Item #2',
      content: <strong>This is the second item's accordion body.</strong>,
      link: '/page2',
    },
    {
      title: 'Accordion Item #3',
      content: <strong>This is the third item's accordion body.</strong>,
      link: '/page3',
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
          link={item.link}
          onLinkClick={onLinkClick}
        />
      ))}
    </div>
  );
}

export default Accordion;
