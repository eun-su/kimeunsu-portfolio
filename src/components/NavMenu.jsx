import React from "react";

const NavMenu = ({ children }) => {
  return (
    <div className="navmenu" id="navmenu" role="menu">
      <div className="accordion-subject">+ My Blog</div>
      {children}
    </div>
  );
};

export default NavMenu;
