import React from "react";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class signIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error)
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            handleChange={this.handleChange}
            id="email"
            label="email"
            type="email"
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            handleChange={this.handleChange}
            id="password"
            label="password"
            type="password"
            value={this.state.password}
            required
          />
          <div className="button">
            {" "}
            <Button type="submit"> SIGN IN</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default signIn;
