import React, { useState } from "react";
import axios from "axios";

const OTPComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const sendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:8000/send-otp", { phoneNumber });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error sending OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:8000/verify-otp", { phoneNumber, otp });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error verifying OTP");
    }
  };

  return (
    <div className='page messages'>
      <div className="banner">
        <div>
          <h2 >OTP Verification</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>

          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default OTPComponent;
