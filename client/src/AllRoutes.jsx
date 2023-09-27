import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Otp from "./Pages/Auth/Otp";
import Chatbot from "./Pages/Chatbot/Chatbot";
import Success from "./Pages/Success/Success";
import Cancel from "./Pages/Cancel/Cancel";
import Info from "./Pages/Info/Info";
import StripePayment from "./Pages/StripePayment/StripePayment";

const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route
        path="/Questions"
        element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions/:id"
        element={
          <DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Tags"
        element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route path="/user/otp" element={<Otp />} />
      <Route
        path="/chatbot"
        element={<Chatbot slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/checkout" element={<StripePayment  slideIn={slideIn} handleSlideIn={handleSlideIn}/>} />
      <Route path="/checkout/success" element={<Success />} />
      <Route path="/checkout/cancel" element={<Cancel />} />
      <Route path="/info" element={<Info slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
    </Routes>
  );
};

export default AllRoutes;
