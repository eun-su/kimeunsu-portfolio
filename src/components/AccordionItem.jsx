// src/components/AccordionItem.js
import React from 'react';
import PropTypes from 'prop-types';
// import './AccordionItem.css';

function AccordionItem({ title, content, isOpen, onClick, link1, onLinkClick }) {
  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        {title}
      </div>
      <div className={`accordion-body ${isOpen ? 'show' : ''}`}>
        {content}
        <div className="accordion-footer">
          <button onClick={() => onLinkClick(link1)} className="btn btn-primary">
            Go to {title}
          </button>
        </div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  link1: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default AccordionItem;