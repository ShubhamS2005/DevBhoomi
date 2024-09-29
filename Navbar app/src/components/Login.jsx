import React from "react";
import "./Navbar.css";

const Login = () => {
  return (
    <>
      <div className="mt-24 mb-24 flex justify-center items-center">
        <div className="flex relative shadow-2xl justify-between items-center h-[70vh] w-[70vw] bg-gray-100 pr-[130px] rounded-xl ">
          <div className="box1 rounded-lg ml-8">
            <img
              width={540}
              src="https://cdn.pixabay.com/photo/2023/01/07/11/30/alpine-7703065_1280.jpg"
              alt="Dev-Bhoomi"
            />
            <h1 className="absolute top-16 left-6">Uttarakhand</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-end items-center">
            <div className="flex flex-col justify-center items-center mr-8 pb-10 gap-4">
              <h1 className="dev tracking-wider font-extrabold text-4xl">DEV BHOOMI</h1>
              <h2 className="font-bold text-2xl">Log in</h2>
              <p className="font-semibold text-xl">to your account</p>
            </div>
            <div className="absolute top-4 right-7 hover:bg-gray-400 rounded-full p-3">
              <img src="/cross_icon.svg" alt="" />
            </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-7">
              <form className="flex flex-col gap-7 " action="">
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

                <div className="border-2 bg-stone-900 text-white rounded-md cursor-pointer flex justify-center items-center p-3 text-lg font-bold hover:bg-red-600">
                  <button type="submit">Log in</button>
                </div>
              </form>
              <p className="text-lg">
                Don't have an account?{" "}
                <a className="text-blue-900 underline text-lg" href="/Signup">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
