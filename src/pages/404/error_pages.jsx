import React from "react";
import "./error_pages.css";
import Image from "../../assets/Mike.png";
function error_pages() {
  return (
    <div className="error">
      <h1 className="error-text">404 Page Not Found</h1>
      <img className="error-img" alt="" src={Image} />
    </div>
  );
}

export default error_pages;
