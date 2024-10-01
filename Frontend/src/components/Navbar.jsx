import React, { useContext, useState } from 'react'
import { Link, useNavigate, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
import {Context} from "../main.jsx"
import { GiHamburgerMenu } from "react-icons/gi";
import axios from 'axios'
import { navItems } from './NavItems'
import Dropdown from './Dropdown'
import "./Navbar.css"

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
  const {isAuthenticated,setIsAuthenticated }=useContext(Context)
  const {User}=useContext(Context)
  const navigateto=useNavigate()
    const handleLogout=async()=>{
      if(User.role==="Tourist"){
        await axios.get(
          "http://localhost:8000/api/v1/user/Tourist/logout",{
          withCredentials:true
        }).then(res=>{
          toast.success(res.data.message)
          setIsAuthenticated(false)
          navigateto("/home")
        }).catch(err=>{
          toast.error(err.response.data.message)
        })
      }else{
        await axios.get(
          "http://localhost:8000/api/v1/user/guide/logout",{
          withCredentials:true
        }).then(res=>{
          toast.success(res.data.message)
          setIsAuthenticated(false)
          navigateto("/home")

        }).catch(err=>{
          toast.error(err.response.data.message)
        })
      }
      
  }
  const gotoLogin=async()=>{
    navigateto("/login")
  }
  return (
    <>
      <nav className='flex bg-white h-[12vh] justify-between items-center'>
        <div className='text-black font-bold text-xl ml-20'>
            
            <h1>DEV BHOOMI</h1>
        </div>
        <div className="ml-20">
          <img width={150} src="/logo-png.png" alt="" />
        </div>
        <div className="flex justify-center items-center">
        <div className='flex z-10 list-none text-black text-xl mr-20'>
            {navItems.map((item)=>{
                
                if(item.title === "Places"){
                    return (<li className="place ml-10 p-3"
                         key={item.id}
                         onMouseEnter={() => setDropdown(true)}
                         onMouseLeave={() => setDropdown(false)}
                         ><a className="" href={item.path}>{item.title}</a>{dropdown && <Dropdown />}</li>)
                         
                        }
                        
                return (
                <li key={item.id} className={'ml-10 p-3 nav-items'}>
                    <a href={item.path}>{item.title}</a>
                    </li>)
            })}
        </div>
        <div className="flex justify-center items-center mr-16">
      <button  className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-black">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-white rounded-md group-hover:bg-opacity-0">
        {isAuthenticated?(
        <button className='logoutBtn btn' onClick={handleLogout}>
          LOGOUT
          </button>
        ):(
          <button className='logoutBtn btn' onClick={gotoLogin}>
          LOGIN
          </button>
          )
        } 
        </span>
      </button>
      </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar