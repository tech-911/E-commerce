import React from "react";
import "./custom-button.styles.scss";
function CustomButton({ children, ...otherProps }) {
  return (
    <button type={otherProps.type} className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
