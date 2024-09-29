import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../main.jsx"
import axios from 'axios'
import { toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'

const Tourists = () => {
  const [Tourists, setTourists] = useState([])
  const { isAuthenticated } = useContext(Context)
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
  })
  if(!isAuthenticated){
    return <Navigate to={"/login"}/>
  }
  return (
    <section className='page Tourists'>
        <h1>Tourists</h1>
      <div className="banner">
        {
          Tourists && Tourists.length>0 ? (Tourists.map(element=>{
            return(
              <div className="card">
                <img src={element.userAvatar && element.userAvatar.url} alt="Tourist Avatar" />
                <h4>{`${element.firstname} ${element.lastname}`}</h4>
                <div className="details">
                  <p>Email: <span>{element.email}</span></p>
                  <p>Phone: <span>{element.phone}</span></p>
                </div>
              </div>
            )
          })):<h1>No Tourists Found</h1>
        }
      </div>

    </section>
  )
}

export default Tourists
