import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const location = useLocation();
  var User =useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (User === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  // useEffect(() => {
  //   if (User === null) {
  //     navigate("/Auth");
  //   }
  // }, [User]);

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}
        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList?.data?.length} questions</p>
            <QuestionList questionsList={questionsList?.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
