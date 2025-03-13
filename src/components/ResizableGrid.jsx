import React, { useState } from "react";

const ResizableGrid = () => {
  const [gridSize, setGridSize] = useState({ width: 768, height: 600 });
  const [showDropdowns, setShowDropdowns] = useState([false, false]); // ✅ 두 개의 드롭다운 개별 상태

  const handleMouseDown = (event) => {
    event.preventDefault();
    const startX = event.clientX;
    const startWidth = gridSize.width;

    const handleMouseMove = (moveEvent) => {
      const newWidth = startWidth + (moveEvent.clientX - startX);
      setGridSize({ width: Math.max(300, newWidth), height: gridSize.height });
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // ✅ 드롭다운 개별 제어 함수
  const toggleDropdown = (index) => {
    setShowDropdowns((prev) => {
      const newState = [...prev]; // 기존 배열 복사
      newState[index] = !newState[index]; // 클릭한 드롭다운만 토글
      return newState;
    });
  };

  return (
    <div className="resizable-wrapper">
      <div className="resizable-container">
        <div className="grid-container resizable-box" style={{ width: `${gridSize.width}px`, height: `${gridSize.height}px` }}>
          <header className="grid-header" style={{ position: "relative" }}>Header</header>
          <nav className="grid-nav" style={{ position: "relative" }}>
            {/* ✅ 첫 번째 드롭다운 */}
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                aria-expanded={showDropdowns[0]}
                onClick={() => toggleDropdown(0)}
              >
                DropDown Menu 1
              </button>
              <ul
                className={`dropdown-menu ${showDropdowns[0] ? "show" : ""} dropdown-menu-end`}
                aria-labelledby="dropdownMenuButton1"
                style={{
                  position: "absolute",
                  top: "70%",
                  display: showDropdowns[0] ? "block" : "none",
                }}
              >
                <li className="dropdownPage1-item"><button className="dropdown-item">Option 1</button></li>
                <li className="dropdownPage1-item"><button className="dropdown-item">Option 2</button></li>
                <li className="dropdownPage1-item"><button className="dropdown-item">Option 3</button></li>
              </ul>
            </div>

            {/* ✅ 두 번째 드롭다운 */}
            <div className="dropdown">
              <button
                className="btn btn-dark dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                aria-expanded={showDropdowns[1]}
                onClick={() => toggleDropdown(1)}
              >
                DropDown Menu 2
              </button>
              <ul
                className={`dropdown-menu ${showDropdowns[1] ? "show" : ""} dropdown-menu-end`}
                aria-labelledby="dropdownMenuButton2"
                style={{
                  position: "absolute",
                  top: "70%",
                  display: showDropdowns[1] ? "block" : "none",
                }}
              >
                <li className="dropdownPage1-item"><button className="dropdown-item">Option A</button></li>
                <li className="dropdownPage1-item"><button className="dropdown-item">Option B</button></li>
                <li className="dropdownPage1-item"><button className="dropdown-item">Option C</button></li>
              </ul>
            </div>
          </nav>
          <aside className="grid-sidebarLeft">Sidebar Left</aside>
          <main className="grid-main">
            <section className="grid-section">
              <div className="section-box">Article 1</div>
              <div className="section-box">Article 2</div>
              <div className="section-box">Article 3</div>
              <div className="section-box">Article 4</div>
            </section>
          </main>
          <aside className="grid-sidebarRight">Sidebar Right</aside>
          <footer className="grid-footer">Footer</footer>
        </div>
        <div className="resizer-area" onMouseDown={handleMouseDown}>
          <span className="resize-arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default ResizableGrid;