import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { User, isAuthenticated,id,setId } = useContext(Context);
  const [show, setShow] = useState(false);

  const NavigateTo=useNavigate()

  const gotoBookJourney=()=>{
        setId(User._id);
        NavigateTo("/bookJourney")
  }

  return (
    <section className="dashboard">
      <section class="bg-gray-100">
        <div className="max-w-6xl mx-auto p-4">
          {/* Banner Image */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/1200x300"
              alt="Banner Image"
              className="w-full h-48 object-cover rounded-lg"
            />
            {/* Central Profile Image */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <img
                src={User.userAvatar.url}
                alt="Guide Image"
                className="rounded-full border-4 border-white shadow-lg w-32 h-32"
              />
            </div>
          </div>
          {/* Guide Details Card */}
          <div className="mt-20 bg-white shadow-lg rounded-lg p-6">
            {/* Guide's Name */}
            <h2 className="text-center text-2xl font-bold text-gray-700">
              {User.firstname} {User.lastname}
            </h2>
            {/* Contact Information */}
            <div className="text-center mt-4">
              <p className="text-gray-600">
                <strong>Email:</strong> {User.email}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +{User.phone}
              </p>
              <p className="text-gray-600">
                <strong>Preferred Language:</strong> {User.preferedLanguage}
              </p>
            </div>
            {/* Journey Information */}
            <div className="mt-6">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-500 font-semibold">Old Journeys</p>
                  <p className="text-2xl font-bold text-blue-600">25</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-500 font-semibold">Total Journeys</p>
                  <p className="text-2xl font-bold text-blue-600">100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Book Button */}
          <div
            className="text-center mt-10"
            style={
              User.role === "Guide" ? { display: "none" } : { display: "block" }
            }
          >
            <button className="relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-pulse" onClick={gotoBookJourney}>
              Book Now
            </button>
          </div>
          
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
