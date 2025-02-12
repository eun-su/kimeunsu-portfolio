import React from "react";

const NavMenu = ({ children }) => {
  return (
    <div className="navmenu" id="navmenu" role="menu">
      {children}
    </div>
  );
};

export default NavMenu;
