import React, { useState } from 'react';
import menuItem from '../data';

import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function SideBar(){
   const[isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
            <div style={{width: isOpen ? "160px" :"200px;"}} className='justify-start bg-black '>
                <div className='flex items-center'>
                    <h1 style={{display: isOpen ? "block" :"none"}}>Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" :"-4px;"}} className='flex ml-12 text-2xl '>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item,index) => (
                        <NavLink to={item.path} key={index} className="flex items-center gap-2 mt-2 hover:bg-blue-300 hover:text-black active:bg-blue-300 active:text-black">
                            <div>{item.icon}</div>
                            <div style={{display: isOpen ? "block" :"none"}}>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}
export default SideBar;