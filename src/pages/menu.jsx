import React from "react";
import { MenuList } from "../helpers/menuList";
import MenuItem from "../components/menuItem";
import "../styles/menu.css";

function Menu() {
    return (
        <div className="menu">
        <h1 className="menuTitle">Nos donuts</h1>
        <div className="menuList">
            {MenuList.map((menuItem, key) => {
            return (
                <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                />
            );
            })}
        </div>
        </div>
    );
}

export default Menu;