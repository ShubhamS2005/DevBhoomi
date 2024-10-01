import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../main.jsx"
import { Navigate, Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { GoCheckCircleFill } from "react-icons/go"
import { AiFillCloseCircle } from "react-icons/ai"
import { toast } from 'react-toastify'

const Dashboard = () => {
  const { isAuthenticated, user,id} = useContext(Context)
  const [guides, setGuides] = useState([])
  const [tourists, setTourists] = useState([])
  const [journeys, setJourneys] = useState([])

  const[ac_no,setAc_No]=useState("")

  //  Function to send email/message
   const sendMail = async (no) => {
    try {
      e.preventDefault()
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/user/send-mail/${no}`,
        { withCredentials: true }
      );
      toast.success("Message Sent");
    } catch (error) {
      toast.error( "Error sending message");
    }
  };



  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/journey/getall",
          { withCredentials: true }
        )
        setJourneys(data.Journeys)

      } catch (error) {
        setJourneys([])
        console.log("Some Error occured:", error)
      }
    }
    fetchJourneys()
  }, [])


  useEffect(() => {
    const fetchGuides = async () => {
      try {
        if(id){
          const { data } = await axios.get(
            "http://localhost:8000/api/v1/user/guides",
            { withCredentials: true }
          )
          setGuides(data.Guides)
        }
        

      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
    fetchGuides()
  },[id])

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

  const handleUpdateStatus = async (journeyid, status) => {
    try {
      const { data } = await axios.put(`http://localhost:8000/api/v1/journey/update/${journeyid}`
        , { status }
        , { withCredentials: true }
      )
      // here old data is not disturbed but new is added
      setJourneys(prevJourneys =>
        prevJourneys.map(journey =>
          journey._id === journeyid
            ? { ...journey, status }
            : journey
        )
      )
      toast.success(data.message)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

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
            <span>3</span>
        </div>
        <div className="secondBox">
            <h3>Total Tourists</h3>
            <span>{tourists.length}</span>
        </div>
        <div className="thirdBox">
            <h3>Total Active Journeys</h3>
            <span>{journeys.length}</span>
        </div>
        </div>
      </div>
      <div className="banner">
          <h3>Journeys</h3>
          <table>
            <thead>
              <tr>
                <th>Tourist</th>
                <th>Date</th>
                <th>Guide</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                journeys && journeys.length > 0 ? (
                  
                  journeys.map(journey => {
                    
                    return (
                      <tr key={journey._id}>
                        <td>{`${journey.firstname} ${journey.lastname}`}</td>
                        <td>{journey.journeyDate.substring(0, 10)}</td>
                        <td>{`${journey.Guide.firstname} ${journey.Guide.lastname}`}</td>
                        
                        <td>
                          <select
                            name="status"
                            id="status"
                            className={
                              journey.status === "Pending"
                                ? "value-pending"
                                : journey.status === "Rejected"
                                  ? "value-rejected"
                                  : "value-accepted"
                            }
                            value={journey.status}
                            onChange={(e) => handleUpdateStatus(journey._id, e.target.value)}
                          >
                            <option value="Pending" className="value-pending">Pending</option>
                            <option value="Rejected" className="value-rejected">Rejected</option>
                            <option value="Accepted" className="value-accepted">Accepted </option>

                          </select>
                        </td>
                        <td>
                        {/* Button to send a message */}
                        <button onClick={() => sendMail(journey._id)}>Send Message</button>
                      </td>
                      </tr>
                    )
                  })) :
                  (<tr>
                    <td>
                      No Journeys
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
        </section>
        </>
    );
}

export default Dashboard;
