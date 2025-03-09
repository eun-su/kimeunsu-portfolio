import React from "react";
import PropTypes from "prop-types";
import accordionItems from "../constants/accordionData";

function AccordionItem({ title, content, isOpen, onClick, links, onLinkClick, isMobile, index }) {
  const buttonNames = links.map((linkObj) => {
    const matchedItem = accordionItems
      .flatMap((item) => item.links)
      .find((item) => item.path === linkObj.path);
    return matchedItem ? matchedItem.name : "Unknown";
  });

  const bodyClass = isMobile
    ? `accordion-body ${isOpen ? "show" : ""} ${index === 0 ? "first" : index === 1 ? "second" : "third"}`
    : `accordion-body ${isOpen ? "show" : ""}`;

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <div className="accordion-header" onClick={onClick}>
        {title}
      </div>
      <div className={bodyClass}>
        {content}
        <div className="accordion-footer">
          <div className="button-container">
            {links.map((linkObj, idx) => (
              <button key={idx} onClick={() => onLinkClick(linkObj.path)} className="btn btn-primary fade-in">
                {buttonNames[idx]}
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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLinkClick: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default AccordionItem;
