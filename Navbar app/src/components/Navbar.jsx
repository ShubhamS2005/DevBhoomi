import React, { useState } from "react";
import { navItems } from './NavItems'
import Dropdown from './Dropdown'
import Button from "./Button";
import "./Navbar.css"

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <nav className='flex bg-gray-500 h-[12vh] justify-between items-center'>
        {/* <div className='text-white font-bold text-xl ml-20'>
            <h1>DEV BHOOMI</h1>
        </div> */}
        <div className="ml-20">
          <img width={150} src="/logo-png.png" alt="" />
        </div>
        <div className="flex justify-center items-center">
        <div className='flex z-10 list-none text-white text-xl mr-20'>
            {navItems.map((item)=>{
                
                if(item.title === "Places"){
                    return (<li className="place ml-10 p-3"
                         key={item.id}
                         onMouseEnter={() => setDropdown(true)}
                         onMouseLeave={() => setDropdown(false)}
                         ><a className="" href="">{item.title}</a>{dropdown && <Dropdown />}</li>)
                         
                        }
                        
                return (
                <li key={item.id} className={'ml-10 p-3 nav-items'}>
                    <a href="">{item.title}</a>
                    </li>)
            })}
        </div>
        <Button/>
        </div>
      </nav>
    </>
  )
}

export default Navbar
