import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // ✅ 뒤로가기/새로고침에서는 작동하지 않도록 설정
    if (window.history.state && window.history.state.idx > 0) {
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ 부드럽게 최상단 이동
  }, [pathname]);

  return null;
}

export default ScrollToTop;
