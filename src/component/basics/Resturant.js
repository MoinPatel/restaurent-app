import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js";
import MenuCards from "./MenuCards"
import Navbar from "./Navbar"

const uniqueList = [
    ...new Set(Menu.map((currElement) => {
        return currElement.category;
    })),
    "All",
];
console.log(uniqueList);
const Resturant = props => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }

        const updatedList = Menu.filter((currElement) => {
            return currElement.category === category;
        });
        setMenuData(updatedList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCards menuData={menuData} />
        </>
    )
}

export default Resturant;
