import React from "react";
import "./form-input.style.scss";

function formInput({ handleChange, label, ...otherprops }) {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherprops} />
      {label ? (
        <label
          className={`${
            otherprops.value.length ? "shrink" : ""
          } form-input-label`} for={otherprops.id}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default formInput;
