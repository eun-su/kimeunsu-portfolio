import React from 'react';
import PropTypes from 'prop-types';

function AccordionItem({ title, content, isOpen, onClick, links, onLinkClick, isMobile, index }) {
  // index 값에 따라 클래스 설정
  const bodyClass = isMobile
    ? `accordion-body ${isOpen ? 'show' : ''} ${index === 0 ? 'first' : index === 1 ? 'second' : 'third'}`
    : `accordion-body ${isOpen ? 'show' : ''}`;

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div className="accordion-header" onClick={onClick}>
        {title}
      </div>
      <div className={bodyClass}>
        {content}
        <div className="accordion-footer">
          <div className={`button-container ${isMobile ? 'mobile' : 'desktop'}`}>
            {links.map((link, idx) => (
              <button
                key={idx}
                onClick={() => onLinkClick(link)}
                className="btn btn-primary"
              >
                {title} - {idx + 1}
              </button>
            ))}
          </div>
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
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLinkClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired, // index 추가
};

export default AccordionItem;