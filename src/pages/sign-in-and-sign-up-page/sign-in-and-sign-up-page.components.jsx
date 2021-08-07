import React from "react";
import SignIn from "../../components/sign-in/sign-in.components";
import "./sign-in-and-sign-up-page.styles.scss";
import SignUp from "../../components/sign-up/sign-up.component";

function signIn_signUp() {
  return (
    <div className="signIn_signUp">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default signIn_signUp;
