import React from "react";
import { NavLink } from "react-router-dom";
import shortid from "shortid";

const Menu = ({ navList }) => {
  return (
    <nav className="menu">
      {navList.map((item) => (
        <NavLink
          className="menu__item"
          activeClassName="menu__item-active"
          exact
          to={item.link}
          key={shortid.generate()}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
