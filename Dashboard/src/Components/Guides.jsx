import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../main.jsx"
import axios from 'axios'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'

const Guides = () => {
  const [Guide, setGuide] = useState([])
  const { isAuthenticated } = useContext(Context)
  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8000/api/v1/user/guides",
           { withCredentials: true }
          )
          setGuide(data.Guides)

      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
    fetchGuide()
  })
  if(!isAuthenticated){
    return <Navigate to={"/login"}/>
  }
  return (
    <section className='page Tourists'>
        <h1>Guides</h1>
      <div className="banner">
        {
          Guide && Guide.length>0 ? (Guide.map(element=>{
            return(
              <div className="card">
                <img src={element.userAvatar && element.userAvatar.url} alt="Guide Avatar" />
                <h4>{`${element.firstname} ${element.lastname}`}</h4>
                <div className="details">
                  <p>Email: <span>{element.email}</span></p>
                  <p>Phone: <span>{element.phone}</span></p>
                </div>
              </div>
            )
          })):<h1>No Guide Found</h1>
        }
      </div>

    </section>
  )
}

export default Guides
