import React from "react";
import Search from "./search";


function Nav() {
    return (
        <div > 
           <div className="flex p-8 bg-lime-600 justify-between">
            <nav className="flex  gap-4 text-white text-2xl ">
            <img 
            className="w-6 h- pt-1"
            src="https://icon-library.com/images/white-menu-icon/white-menu-icon-4.jpg" 
            alt="" />
            <h1 to="/">Home</h1>
            <h1 to="/about">About</h1>
            <h1 to="/about">Products</h1>
            <h1 to="/about">Contacts</h1>
            </nav>
            < Search className="flex " />
            </div>
        </div>
    )
}

export default Nav;