// src/components/Accordion.js
import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
// import './Accordion.css';

function Accordion({ onLinkClick }) {
  const [openIndexes, setOpenIndexes] = useState([0]);

  const handleClick = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const items = [
    {
      title: 'Accordion Item #1',
      content: <strong>This is the first item's accordion body.</strong>,
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
          isOpen={openIndexes.includes(index)}
          onClick={() => handleClick(index)}
          link={item.link}
          onLinkClick={onLinkClick}
        />
      ))}
    </div>
  );
}

export default Accordion;
