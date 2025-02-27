import React, { useState } from "react";
import '../assets/css/Page2.css';
import '../assets/css/Blog.css';

const MoreContentWithModal = ({ data = [], itemsPerPage = 6 }) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [showButton, setShowButton] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadMore = () => {
    const newVisibleItems = visibleItems + itemsPerPage;
    setVisibleItems(newVisibleItems);

    if (newVisibleItems >= data.length) {
      setShowButton(false);
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="more-content" style={{ display: data.length > 0 ? 'block' : 'none' }}>
      <ul className="content-list" style={{ display: data.length > 0 ? 'flex' : 'none' }}>
        {data.map((item, index) => (
          <li key={index} 
              className={`content-item ${index < visibleItems ? "visible" : ""}`} 
              style={{ transitionDelay: `${(index % itemsPerPage) * 0.1}s` }}>
            <img src={item.img} alt={item.title} className="content-img" />
            <h3 className="content-title">{item.title}</h3>
            <h4 className="content-subtitle">{item.subtitle}</h4>
            <p className="content-description">{item.description}</p>
            <button className="content-button" onClick={() => openModal(item)}>자세히 보기</button>
          </li>
        ))}
      </ul>

      {showButton && (
        <div className="btn-wrap" style={{ display: data.length > visibleItems ? 'block' : 'none' }}>
          <button onClick={loadMore} className="load-more-button">
            더보기
          </button>
        </div>
      )}

      {/* 모달창 */}
      {showModal && selectedItem && (
        <div className="blog-modal-overlay" style={{ display: showModal ? 'flex' : 'none' }} onClick={closeModal}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="blog-card mb-4">
              <img className="blog-card-img-top" src={selectedItem.img} alt={selectedItem.title} />
              <div className="blog-card-body">
                <div className="small text-muted">자세한 정보</div>
                <h2 className="blog-card-title">{selectedItem.title}</h2>
                <p className="blog-card-text">{selectedItem.description}</p>
              </div>
            </div>
            <button className="blog-modal-close-btn" onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreContentWithModal;