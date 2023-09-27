import React from "react";
import { NavLink } from "react-router-dom";

const Cancel = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h4 style={{ textAlign: "center" }}>
        Oops! Your payment has been cancelled.
      </h4>
      <p style={{ textAlign: "center" }}>
        We appreciate your business! If you have any questions, please email us
        at
        <NavLink to="mailto:rd8614196@gmail.com"> rd8614196@gmail.com</NavLink>.
      </p>
      <div
        style={{ display: "grid", placeContent: "center", paddingTop: "5px" }}
      >
        <NavLink style={{ textAlign: "center" }} to="/">
          Go to Home Page
        </NavLink>
      </div>
    </div>
  );
};

export default Cancel;
