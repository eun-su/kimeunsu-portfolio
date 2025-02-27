import React, { useState } from "react";
import '../assets/css/Page2.css';

const MoreContent = ({ data, itemsPerPage = 6 }) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [showButton, setShowButton] = useState(true);

  const loadMore = () => {
    const newVisibleItems = visibleItems + itemsPerPage;
    setVisibleItems(newVisibleItems);

    if (newVisibleItems >= data.length) {
      setShowButton(false);
    }
  };

  return (
    <div className="more-content">
      <ul className="content-list">
        {data.map((item, index) => (
          <li key={index} 
              className={`content-item ${index < visibleItems ? "visible" : ""}`} 
              style={{ transitionDelay: `${(index % itemsPerPage) * 0.1}s` }}>
            <img src={item.img} alt={item.title} className="content-img" />
            <h3 className="content-title">{item.title}</h3>
            <h4 className="content-subtitle">{item.subtitle}</h4>
            <p className="content-description">{item.description}</p>
            <button className="content-button" onClick={() => window.location.href = item.link}>이동</button>
          </li>
        ))}
      </ul>

      {showButton && (
        <div className="btn-wrap">
          <button onClick={loadMore} className="load-more-button">
            더보기
          </button>
        </div>
      )}
    </div>
  );
};

export default MoreContent;