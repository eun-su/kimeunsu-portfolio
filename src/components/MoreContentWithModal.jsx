import React, { useState } from "react";
import "../assets/css/MoreContentWithModal.css";
import { pageContent } from "../constants/indexPage";
import arrowIcon from "../assets/img/arrow.svg";

const MoreContentWithModal = ({ itemsPerPage = 6 }) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [showButton, setShowButton] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const loadMore = () => {
    const newVisibleItems = visibleItems + itemsPerPage;
    setVisibleItems(newVisibleItems);

    if (newVisibleItems >= pageContent.length) {
      setShowButton(false);
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    document.body.style.overflow = "hidden"; // 🔥 배경 스크롤 차단
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = ""; // 🔥 배경 스크롤 복구
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="more-content">
      <ul className="content-list">
        {pageContent.map((item, index) => (
          <li
            key={item.id}
            className={`content-item ${index < visibleItems ? "visible" : ""}`}
            style={{ transitionDelay: `${(index % itemsPerPage) * 0.1}s` }}
          >
            {/* ✅ 이미지 그룹 (단일 or 복수) */}
            <div className={`content-images ${Array.isArray(item.images) && item.images.length > 1 ? "double" : "single"}`}>
              {Array.isArray(item.images) &&
                item.images.map((imgSrc, idx) => (
                  <img key={idx} src={imgSrc} alt={item.title} className="content-img" />
                ))}
            </div>
            <div>
              <h3 className="content-title">{item.title}</h3>
              <h4 className="content-subtitle">{item.subtitle}</h4>
              <p className="content-description">{item.description}</p>
            </div>
            <button className="content-button" onClick={() => openModal(item)}>
              자세히 보기
            </button>
          </li>
        ))}
      </ul>

      {showButton && (
        <div className="btn-wrap">
          <button onClick={loadMore} className="load-more-button">
            Load More <img src={arrowIcon} alt="arrow" />
          </button>
        </div>
      )}

      {/* ✅ 모달창 */}
      {showModal && selectedItem && (
        <div className="more-modal-overlay show" onClick={closeModal}>
          <div className="more-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* ✅ 닫기 버튼 - 우측 상단 고정 */}
            <button className="more-modal-close-btn" onClick={closeModal}>×</button>

            {/* ✅ 이미지와 텍스트 가로 정렬 (768px 이하에서는 세로 정렬) */}
            <div className="more-modal-body">
              <div className="more-modal-image-container">
                {Array.isArray(selectedItem.images) &&
                  selectedItem.images.map((imgSrc, idx) => (
                    <img key={idx} className="more-card-img-top" src={imgSrc} alt={selectedItem.title} />
                  ))}
              </div>
              <div className="more-card-body">
                <h2 className="more-card-title">{selectedItem.title}</h2>
                <h4 className="more-card-subtitle">{selectedItem.subtitle}</h4>
                <p className="more-card-text">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreContentWithModal;