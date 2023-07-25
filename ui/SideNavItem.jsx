import React, { memo } from "react";


const SideNavItem = ({ icon, navTitle, onClick, children }) => {
 
  return (
    <li className="flex items-center" onClick={onClick} role="button">
      <span className="flex-[0.2]">{icon}</span>
      <div className="header__link text-sm">
        {navTitle}
        <>{ children }</>
      </div>
    </li>
  );
};
export default memo(SideNavItem);
