import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../main.jsx"
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { GoCheckCircleFill } from "react-icons/go"
import { AiFillCloseCircle } from "react-icons/ai"
import { toast } from 'react-toastify'
const Dashboard = () => {
  const { isAuthenticated, user } = useContext(Context)
  const [guides, setGuides] = useState([])
  const [tourists, setTourists] = useState([])



  useEffect(() => {
    const fetchGuides = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/guides",
          { withCredentials: true }
        )
        setGuides(data.Guides)

      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
    fetchGuides()
  })

  useEffect(() => {
    const fetchTourists = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/tourists",
          { withCredentials: true }
        )
        setTourists(data.Tourists)

      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
    fetchTourists()
  },[])


  if (!isAuthenticated) {
    return <Navigate to={"/login"} />
  }
    return (
        <>
          <section className="dashboard page">
      <div className="banner">
        <div className="b-container">
          <div className="firstBox">
            <div className='fb-img'>
            <img src={user.userAvatar && user.userAvatar.url} alt="UserImg" />
            </div>
            <div className='content'>
              <p>Hello</p>
              <h4>
                {
                  user && `${user.firstname} ${user.lastname}`
                }
              </h4>
                <p>This is a admin dashboard where admin can manage all datas related to Tourist, Hotels and Guides available</p>
            </div>
          </div>
        <div className="thirdBox">
            <h3>Total Guides</h3>
            <span>{guides.length}</span>
        </div>
        <div className="thirdBox">
            <h3>Total Tourists</h3>
            <span>{tourists.length}</span>
        </div>
        </div>
      </div>
        </section>
        </>
    );
}

export default Dashboard;
