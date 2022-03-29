import React, { useState } from 'react';
import "./style.css";
import Menu from "./MenuApi.js";
import Menucard from "./Menucard";


const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);
const filterItem = (category) => {

    const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
    });
    setMenuData(updatedList);
};



    return (
        <>

        <nav className="navbar">  
        <div className="button-group">
            <button className="button-group-item" onClick={() => filterItem("Breakfast")}> Breakfast </button>
            <button className="button-group-item" onClick={() => filterItem("Lunch")}> Lunch </button>
            <button className="button-group-item" onClick={() => filterItem("Evening")}> Evening </button>
            <button className="button-group-item" onClick={() => filterItem("Dinner")}> Dinner </button>
            <button className="button-group-item" onClick={() => setMenuData(Menu)}> All </button>

        </div>

        </nav>
        <Menucard menuData = {menuData} />;
        </>
    );
};

export default Restaurant;