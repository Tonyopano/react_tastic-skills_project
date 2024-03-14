import React from "react";
import MenuItem from "./menu-item";

const MenuList = ({ list = [] }) => {
  return (
    <div className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </div>
  );
};

export default MenuList;