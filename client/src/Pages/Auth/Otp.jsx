import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import "./Auth.css";

const Otp = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation(); //the state from login page is being catched through useLocation hook

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LoginUser = async (e) => {
    e.preventDefault();

    if (otp === "") {
      return alert("Enter Your Otp");
    } else if (!/[^a-zA-Z]/.test(otp)) {
      return alert("Enter Valid Otp");
    } else if (otp.length < 6) {
      return alert("Otp Length minimum 6 digit");
    } else {
      const data = {
        otp,
        email: location.state,
      };

      dispatch(login(data, navigate));
    }
  };
  return (
    <>
      <section className="auth-section">
        <div  className="auth-container-2">
          
          <form style={{width:"100%"}}  onSubmit={LoginUser}>
            <div style={{width:"100%"}} className="form_input">
              <label htmlFor="fname">
                <input
                style={{
                  width:"100%"
                }}
                  type="text"
                  name="otp"
                  id=""
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter your Otp here"
                /> 
              </label>
            <button  style={{marginLeft:"10px"}} className="auth-btn">Click to Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Otp;
