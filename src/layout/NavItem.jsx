import React from "react";

function NavItem() {
  return (
    <ul className="flex justify-between items-center space-x-6 lg:space-x-14 font-medium text-lg text-midnight">
      <li>
        <a>About us</a>
      </li>
      <li>
        <a>What We do</a>
      </li>
      <li>
        <a>About us</a>
      </li>
      <li>
        <a>Our work</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Say hi</a>
      </li>
    </ul>
  );
}

export default NavItem;
