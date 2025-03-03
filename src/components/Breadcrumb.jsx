import React from "react";
import { Link, useLocation } from "react-router-dom";
import accordionItems from "../constants/accordionData";
import '../assets/css/Breadcrumb.css';

const Breadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // ✅ 현재 경로에 해당하는 아코디언 타이틀 찾기
  const currentAccordion = accordionItems.find((item) =>
    item.links.some((link) => link.path === currentPath)
  );

  // ✅ 현재 경로에 해당하는 버튼 이름 찾기
  const currentButton = currentAccordion?.links.find((link) => link.path === currentPath)?.name || "Unknown Page";

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {currentAccordion && (
          <li className="breadcrumb-item">
            <Link to={currentAccordion.links[0].path}>{currentAccordion.title}</Link>
          </li>
        )}
        {currentButton && (
          <li className="breadcrumb-item active" aria-current="page">
            {currentButton}
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
