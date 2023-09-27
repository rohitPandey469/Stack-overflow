import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "../../App.css";
import ChatChild from "./ChatChild";

const Chatbot = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div style={{margin:0}} className="home-container-2">
        <ChatChild />
      </div>
    </div>
  );
};

export default Chatbot;
