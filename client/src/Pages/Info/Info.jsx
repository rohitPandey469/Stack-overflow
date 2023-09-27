import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";


const Info = ({slideIn,handleSlideIn}) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div style={{ margin: 0 }} className="home-container-2">
        <div
          style={{
            paddingTop: "80px",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Workings of the website</h1>
            <div>
              <ul>
                <li>"baseURL/" - Url to homepage</li>
                <li>"baseURL/chatbot" - Url to chatbot</li>
                <li>"baseURL/Questions" - Url to view all the questions</li>
                <li>"baseURL/AskQuestion" - Url to ask a question</li>
                <li>
                  "baseURL/checkout" - Url to purchase offers to stackoverflow
                </li>
                <li>
                  "baseURL/checkout/success" - Url to checkout success page
                </li>
                <li>"baseURL/checkout/cancel" - Url to checkout cancel page</li>
                <li>"baseURL/Users/:id" - Url to User Profile</li>
                <li>"baseURL/info" - Url to this page</li>
                <hr />
                <li>
                  "Email and OTP login" - Not checking if the users email is
                  correct on registering
                </li>
                <li>
                  "Score1" - earned on getting votes on asked questions - 2
                  points
                </li>
                <li>
                  "Score2" - earned on answering questions - 1 points and
                  additional points
                </li>
                <li>"Title/badge" - Newbie to just registered users</li>
                <li>
                  "Title/badge" - Pro to answersGiven&gt;=5 and bonus of 20
                  points
                </li>
                <li>
                  "Title/badge" - Expert to answersGiven&gt;=20 and bonus of 50
                  points
                </li>
                <li>
                  "Title/badge" - Master to answersGiven&gt;=50 and bonus of 70
                  points
                </li>
                <li>
                  "Title/badge" - God to answersGiven&gt;=100 and bonus of 100
                  points
                </li>
                <li>"Title/badge" - Additional points on each title</li>
                <hr />

                <li>
                  <h6>
                    "Responsive" - Healthy for &gt;360px width and &gt;550px
                    height
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
