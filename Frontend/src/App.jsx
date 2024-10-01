import { useContext, useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Home from "./components/Home.jsx"
import Register from "./components/Register.jsx"
import Login from "./components/Login.jsx"


import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './main.jsx'
import axios from 'axios'
import FeedbackForm from './components/Feedback.jsx'
import Navbar from './components/Navbar.jsx'
import Dashboard from './components/Dashboard.jsx'
import  Footer from "./components/Footer.jsx"
import BookJourney from './components/BookJourney.jsx'
import TermsAndConditions from './components/Terms.jsx'
import Book from './components/Book.jsx'
import OTPComponent from './components/OtpComponent.jsx'
import AdminPanel from './components/AdminPanel.jsx'
import AboutUs from './components/AboutUs.jsx'


function App() {
  const {User,isAuthenticated,setIsAuthenticated,setUser}=useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      if(User.role==="Guide"){
        try {
          const response = await axios.get(
            "http://localhost:8000/api/v1/user/guide/me",
            {
              withCredentials: true,
            }
          );
          setIsAuthenticated(true);
          setUser(response.data.user);
        } catch (error) {
          setIsAuthenticated(false);
          setUser({});
        }
      }else{
        try {
          const response = await axios.get(
            "http://localhost:8000/api/v1/user/tourist/me",
            {
              withCredentials: true,
            }
          );
          setIsAuthenticated(true);
          setUser(response.data.user);
        } catch (error) {
          setIsAuthenticated(false);
          setUser({});
        }
      }
      
    };
    fetchUser();
  }, [isAuthenticated]);
  
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<AboutUs/>}/>

          <Route path='/login' element={<Login/>}/>
          <Route path='/feedback' element={<FeedbackForm/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/bookJourney' element={<BookJourney/>}/>
          <Route path='/book' element={<Book/>}/>
          <Route path='/terms' element={<TermsAndConditions/>}/>
      <Route path='/otp' element={<OTPComponent/>}/>
      <Route path="/admin" element={<AdminPanel />} /> 

         
      </Routes>
      <Footer/>
      <ToastContainer position='top-center'/>
    </Router>
    </>
  )
}

export default App
