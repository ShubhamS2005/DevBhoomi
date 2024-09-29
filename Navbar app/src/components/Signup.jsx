import React from "react";
import "./Navbar.css";


const Signup = () => {
  return (
    <>
      <div className="mt-[3.5rem] mb-[3.5rem] flex justify-center items-center">
        <div className="flex relative flex-col justify-between shadow-2xl items-center h-[80vh] w-[50vw] bg-gray-100 pr-[130px] rounded-xl ">
          <div className="flex justify-end items-center">
          <div className="mt-10 ml-32">
            <div className="flex flex-col justify-center items-center mr-8 pb-10 gap-2 ">
              <h1 className="dev font-extrabold tracking-wider text-4xl">
                DEV BHOOMI
              </h1>
              <h2 className="font-bold text-2xl">Sign up</h2>
            </div>
          </div>
            <div className="absolute right-10 top-8 hover:bg-gray-400 rounded-full p-3">
              <img src="/cross_icon.svg" alt="" />
            </div>
          </div>

          <div className="flex gap-8 ">
            <div className="box1 max-w-[50%] rounded-lg ml-28">
              <form className="flex flex-col gap-5" action="">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your first Name"
                  required
                />

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your Phone number"
                  required
                />

                <label htmlFor="">Select a role:</label>
                <select name="role" id="role">
                  <option value="">Select a role</option>
                  <option value="admin">Admin</option>
                  <option value="tourist">Tourist</option>
                  <option value="guide">Guide</option>
                </select>
                  <div className="flex gap-2 mt-6">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Accept </label>
                <a className="text-blue-800 underline" href="/">terms & conditions</a>
                </div>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="flex max-w-[50%]flex-col justify-center items-center gap-3">
                <form className="flex flex-col gap-5 " action="">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your last Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your Email"
                    required
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    id="password"
                    required
                  />

                  <label htmlFor="">Add your Photo:</label>
                  <input type="file" name="" id="" />
                </form>
              </div>
            </div>
          </div>
          <div className="flex mb-10 mt-8 justify-center items-center flex-col gap-2 ml-28 ">
            <div className="border-2  bg-stone-900 text-white rounded-md cursor-pointer flex justify-center items-center p-3 text-lg font-bold hover:bg-lime-700 w-[604px]">
              <button type="submit">Sign up</button>
            </div>
            <p className="text-lg mb-3">
              Already registered?{" "}
              <a className="text-blue-900 underline text-lg" href="/Login">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
