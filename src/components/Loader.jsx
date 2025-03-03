import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({ isLoading }) => {
  const loaderRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      // ✅ 오른쪽에서 왼쪽으로 이동하여 등장
      gsap.fromTo(loaderRef.current, { x: "100%" }, { x: "0%", duration: 0.5, ease: "power2.out" });
    } else {
      // ✅ 왼쪽에서 오른쪽으로 이동하여 사라짐
      gsap.to(loaderRef.current, { x: "100%", duration: 0.5, ease: "power2.in" });
    }
  }, [isLoading]);

  return (
    <div ref={loaderRef} className="page-loader"></div>
  );
};

export default Loader;