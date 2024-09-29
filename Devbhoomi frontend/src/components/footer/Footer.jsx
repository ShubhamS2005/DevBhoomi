import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="m-auto mt-4 grid grid-cols-3 grid-rows-3 p-5 border-gray-200 dark:bg-gray-900 w-[92vw] h-96 bg-gray-900 text-white">
        <div className="grid grid-row-3 items-center">
          <Link to="/" className="p-4 font-bold text-3xl inline-block">
            <h1>GigGineus</h1>
          </Link>
          <div className="p-4 text-xl">Address</div>
        </div>
        <div className="grid grid-row-2 items-center">
          <div className="p-4 text-2xl">Pages</div>
          <div className="pages ">
            <ul>
              <li>
                <Link to="/" className="p-4">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="p-4">
                  About
                </Link>
              </li>
              <li>
                <Link to="/sevices" className="p-4">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="p-4">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="p-4 ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="grid grid-row-2 items-center">
          <div className="p-4 text-2xl">Jobs</div>
          <div className="pages ">
            <ul>
              <li>
                <Link to="/" className="p-4">
                  Data science
                </Link>
              </li>
              <li>
                <Link to="/" className="p-4">
                  Software developer
                </Link>
              </li>
              <li>
                <Link to="/" className="p-4">
                  AI developer
                </Link>
              </li>
              <li>
                <Link to="/" className="p-4">
                  website developer
                </Link>
              </li>
              <li>
                <Link to="/" className="p-4 ">
                  Data entry
                </Link>
              </li>
            </ul>
          </div>
        </div>


        {/* <p className='p-4 justify-start font-bold text-3xl'>Freelancing </p>
      <p className='p-4'>Address</p>
      <p className='p-4'>&copy; - All Rights Reserved</p> */}
      </footer>
    </>
  );
};

export default Footer;
