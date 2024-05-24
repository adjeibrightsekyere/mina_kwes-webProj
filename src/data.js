import React from "react";
import { FaAddressBook, FaAddressCard, FaLandmark, FaProductHunt } from "react-icons/fa";

const menuItem = [
    {
        path:"/",
        name:"Home",
        icon:< FaLandmark/>
    },
    {
        path:"/about",
        name:"About",
        icon:<  FaAddressCard />
    },
    
    {
        path:"/product",
        name:"Product",
        icon:< FaProductHunt />
    },
    {
        path:"/contact",
        name:"Contact",
        icon:< FaAddressBook />
    }
]
export default menuItem; 