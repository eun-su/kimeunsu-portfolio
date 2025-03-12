import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 변경될 때 스크롤 최상단으로 이동
  }, [pathname]);

  return null; // 실제 화면에 렌더링할 필요 없음
}

export default ScrollToTop;