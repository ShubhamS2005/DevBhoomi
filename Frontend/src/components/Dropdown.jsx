import React, {useState} from 'react'
import { serviceDropdown } from './NavItems'
import './Navbar.css'

const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false);

  return (
    <>
    <div className='dropdown shadow-2xl absolute top-15 right-50'>
      <ul
        className={dropdown ? "hidden" : "block"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <div key={item.id} className='h-[8vh] w-[10vw] cursor-pointer bg-white text-black pl-3 pt-2  hover:bg-gray-100'>
                <li className=''>
                    <a 
                    onClick={() => setDropdown(false)}
                    href="">
                    {item.title}
                    </a>
                </li>
            </div>
          );
        })}
      </ul>
      </div>
    </>
  )
}

export default Dropdown;