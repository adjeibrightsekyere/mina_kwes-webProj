import React from "react";
import Search from "./search";
import { NavLink } from "react-router-dom";


function Nav() {
    const handleSeacrh = (searchTerm) => {
        console.log("searching for:", searchTerm);
    };
    return (
        <div > 
           <div className="flex p-8 bg-lime-600 justify-between">
            <nav className="flex  gap-4 text-white text-2xl ">
            <img 
            className="w-6 h- pt-1"
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg" 
            alt="" />
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            </nav>
            < Search onSearch={handleSeacrh} className="flex " />
            </div>
        </div>
    )
}

export default Nav;