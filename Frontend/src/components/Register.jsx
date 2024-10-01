import React, { useContext, useState } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./Navbar.css";

const Signup = () => {
  const { isAuthenticated } = useContext(Context)

  const navigateTo = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [role, setRole] = useState("");
  const [userAvatarPreview, setUserAvatarPreview] = useState("");
  const [preferedLanguage, setPreferedLanguage] = useState("");

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setUserAvatarPreview(reader.result);
      setUserAvatar(file);
    };
  };
  const registerhandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("userAvatar", userAvatar);
      formData.append("role", role);
      formData.append("preferedLanguage", preferedLanguage);

      console.log(formData);

      await axios
        .post("http://localhost:8000/api/v1/user/register", formData, {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          toast.success(res.data.message);
          navigateTo("/");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  if (isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  const closefun = () => {
    navigateTo("/");
  };
  return (
    <>
      <div className="mt-[3.5rem] mb-[3.5rem] flex justify-center items-center">
        <div className="flex relative flex-col justify-between shadow-2xl items-center max-h-fit w-[50vw] bg-gray-100 rounded-xl">
          <div className="flex justify-end items-center">
            <div className="mt-10 ml-32">
              <div className="flex flex-col justify-center items-center mr-8 pb-2 gap-2 ">
                <h1 className="dev font-extrabold tracking-wider text-4xl mr-16">
                  DEV BHOOMI
                </h1>
                <h2 className="font-bold text-2xl mr-20">Sign up</h2>
              </div>
            </div>
            <div
              onClick={closefun}
              className="absolute cursor-pointer right-10 top-8 hover:bg-gray-400 rounded-full p-3"
            >
              <img src="/cross_icon.svg" alt="" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-8 m-5 ">
            <div className="box1 ">
              <section >
                <form onSubmit={registerhandler}>
                  <div className="doctor-add">
                    <div className="form-container-doctor mr-2 flex gap-10">
                      <div className="flex flex-col gap-3">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={firstname}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={lastname}
                          onChange={(e) => setLastName(e.target.value)}
                        />

                        <input
                          type="text"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="text"
                          placeholder="Mobile Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                        <select
                          className="w-[280px]"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option value="">Select Role</option>
                          <option value="Tourist">Tourist</option>
                          <option value="Guide">Guide</option>
                        </select>
                        <div className="flex gap-2">
                          <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                    
                          />
                          <span>
                            Accept{" "}
                            <a className="text-blue-700 underline" href="/terms">
                              terms & conditions
                            </a>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <input
                          type="text"
                          placeholder="Prefered language"
                          value={preferedLanguage}
                          onChange={(e) => setPreferedLanguage(e.target.value)}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />

                        <div className="first-wrapper flex flex-col gap-3">
                          
                          <img width={90}
                            src={
                              userAvatarPreview
                                ? `${userAvatarPreview}`
                                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQDSYG6SQxmSy1CvepM_BuYtyRdvtS2IATGJtNUgEHOO1MeVzMIyjWpyJ1NBPJDs-QTE&usqp=CAU"
                            }
                            alt="User Avatar"
                          />
                          <input type="file" onChange={handleAvatar}/>
                          
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 mr-10 flex justify-center p-3 rounded-md text-white font-bold transition-all duration-200 bg-black border-2 border-black hover:bg-lime-600 hover:border-lime-600 cursor-pointer">
                      <button type="submit" className="Submit">
                        Sign Up{" "}
                      </button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <div className="flex mb-5 justify-center items-center flex-col gap-2 ml-28 ">
            <p className="text-lg pr-28">
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
