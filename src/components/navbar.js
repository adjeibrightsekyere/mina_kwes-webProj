import React, { useState } from "react";
import Search from "./search";
import SearchResultsList from "./search_results_list";
import { NavLink } from "react-router-dom";
//import SideBar from "./sidebar";


function Nav() {
    const [results, setResults] = useState([])

    return (
        <div >
            <div className="flex p-8 bg-lime-600 justify-between relative">
                <nav className="flex  gap-4 text-white text-2xl ">
                {/*<SideBar className="absolute" />*/}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/contacts">Contacts</NavLink>
                </nav>
                <div className="relative">
                    < Search setResults={setResults} className=" " />
                    <div className="z-0 absolute">
                        < SearchResultsList results={results} className="z-40 flex flex-col" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nav;