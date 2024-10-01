import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../main.jsx"
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Guides = () => {
    const [Guide, setGuide] = useState([])
    const { isAuthenticated,id,setId2 } = useContext(Context)
  const NavigateTo=useNavigate()

    const gotoBook=(id)=>{
        setId2(id);
        // NavigateTo("/book")
  }

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
  return (
    <>
    <h1 className="text-center text-4xl font-bold mb-8 text-blue-600">Available Guides</h1>
  
    <div>
      {Guide && Guide.length > 0 ? (
        // Grid layout for the guide cards
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-16">
          {Guide.map((element) => {
            return (
              // Guide Card Start
              <div
                key={element.id}
                className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white"
              >
                <div className="relative">
                  {/* Image of the guide */}
                  <img
                    className="w-full h-56 object-cover rounded-t-lg"
                    src={element.userAvatar && element.userAvatar.url}
                    alt="Guide Image"
                  />
  
                  {/* Animation on image */}
                  <div className="absolute inset-0 bg-black opacity-0 flex items-center justify-center">
                    <p className="text-white font-bold text-2xl">View Details</p>
                  </div>
                </div>
  
                {/* Guide Info */}
                <div className="px-6 py-4 bg-gray-100">
                  <div className="font-bold text-xl mb-2 text-gray-800">{`${element.firstname} ${element.lastname}`}</div>
                  <p className="text-gray-700 text-base font-semibold">Preferred Language: {element.preferedLanguage}</p>
                  <p className="text-gray-700 text-base font-semibold">Email: {element.email}</p>
                  <p className="text-gray-700 text-base font-semibold">Phone: {element.phone}</p>
                </div>
  
                {/* Footer with old and total journeys */}
                <div className="px-6 py-4 bg-white flex justify-between items-center border-t border-gray-200">
                  <span className="text-gray-600 text-sm font-semibold">Old Journeys: 19</span>
                  <span className="text-gray-600 text-sm font-semibold">Total Journeys: 25</span>
                </div>
  
                {/* Button to view details */}
                <div className="px-6 py-4 bg-blue-600 hover:bg-blue-700 text-center">
                  <button className="text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out" onClick={gotoBook(element._id)}>
                    <Link to={"/book"}>
                    Book Guide
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1 className="text-center text-2xl text-gray-500 mt-8">No Guide Found</h1>
      )}
    </div>
  </>
  
  )
}

export default Guides

