import React from 'react';
import PropTypes from 'prop-types';
// import '../assets/css/AccordionItem.css'; // 애니메이션을 위한 CSS 파일 추가

function AccordionItem({ title, content, isOpen, onClick, links, onLinkClick, isMobile, index }) {
  // 페이지별 버튼 이름 지정
  const buttonNames = {
    '/page1': 'display : grid',
    '/page1One': 'display : flex',
    '/page1Two': 'Modal',
    '/page2': 'Gallery',
    '/page2One': 'Calendar',
    '/page2Two': 'Page 2-2',
    '/page3': 'Page 3',
    '/page3One': 'Page 3-1',
    '/page3Two': 'Page 3-2',
  };

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
                className="btn btn-primary fade-in" // 애니메이션 클래스 추가
              >
                {buttonNames[link] || `${title} - ${idx + 1}`}
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
  index: PropTypes.number.isRequired,
};

export default AccordionItem;
