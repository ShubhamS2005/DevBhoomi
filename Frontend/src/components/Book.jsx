import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";
import './Book.css'; // Add this to include external CSS for styling

const Book = () => {
  const { id2 } = useContext(Context);
  const [guide, setGuide] = useState([]);
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [journeyDate, setJourneyDate] = useState("");
  const [guide_firstname, setGuideFirstName] = useState("");
  const [guide_lastname, setGuideLastName] = useState("");
  const [guide_email, setGuideEmail] = useState("");
  const [pickup, setPickUp] = useState("");
  const [end, setEnd] = useState("");

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        if (id2) {
          const { data } = await axios.get(
            `http://localhost:8000/api/v1/user/get-guide/${id2}`,
            { withCredentials: true }
          );
          setGuide(data.Guide);
          setGuideFirstName(data.Guide.firstname);
          setGuideLastName(data.Guide.lastname);
          setGuideEmail(data.Guide.email);
        }
      } catch (error) {
        setGuide([]);
        console.log("some error occurred ", error);
      }
    };
    fetchGuide();
  }, [id2]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:8000/api/v1/journey/post",
          {
            firstname,
            lastname,
            email,
            phone,
            guide_firstname,
            guide_lastname,
            pickup,
            end,
            journeyDate,
          },
          {
            withCredentials: true,
            headers: "Content-Type:application/json",
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          NavigateTo("/dashboard");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const NavigateTo = useNavigate();
  return (
    <section className="page book-page">
      <h3>Book Your Journey</h3>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-container">
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-input"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
            <input
              type="date"
              placeholder="Journey Date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-input"
              required
            />
            <input
              type="text"
              placeholder="Pick Up Point"
              value={pickup}
              onChange={(e) => setPickUp(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="End Point"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Confirm Booking
          </button>
        </div>
      </form>
    </section>
  );
};

export default Book;
