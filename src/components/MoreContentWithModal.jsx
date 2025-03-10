import React, { useState, useEffect } from "react";
import "../assets/css/MoreContentWithModal.css";
import { pageContent } from "../constants/indexPage";
import arrowIcon from "../assets/img/arrow.svg";

const MoreContentWithModal = ({ itemsPerPage = 6 }) => {
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // 🔥 배경 스크롤 차단
    } else {
      document.body.style.overflow = ""; // 🔥 배경 스크롤 복구
    }
  }, [showModal]);

  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + itemsPerPage, pageContent.length));
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    setIsFadingOut(false);
  };

  const closeModal = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setShowModal(false);
      setSelectedItem(null);
    }, 300); // 🔥 300ms 후 모달 완전 닫기
  };

  return (
    <div className="more-content">
      <ul className="content-list">
        {pageContent.slice(0, visibleItems).map((item, index) => (
          <li key={item.id} className="content-item fade-in">
            {/* ✅ 이미지 그룹 (단일 or 복수) */}
            <div className={`content-images ${item.images.length > 1 ? "double" : "single"}`}>
              {item.images.map((imgSrc, idx) => (
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

      {visibleItems < pageContent.length && (
        <div className="btn-wrap">
          <button onClick={loadMore} className="load-more-button">
            Load More <img src={arrowIcon} alt="arrow" />
          </button>
        </div>
      )}

      {/* ✅ 모달창 */}
      {showModal && selectedItem && (
        <div className={`more-modal-overlay ${isFadingOut ? "fade-out" : "fade-in"}`} onClick={closeModal}>
          <div className="more-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* ✅ 닫기 버튼 - 우측 상단 고정 */}
            <button className="more-modal-close-btn" onClick={closeModal}>×</button>

            {/* ✅ 이미지와 텍스트 가로 정렬 (768px 이하에서는 세로 정렬) */}
            <div className="more-modal-body">
              <div className="more-modal-image-container">
                {selectedItem.images.map((imgSrc, idx) => (
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
