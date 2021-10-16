import React from "react";
import "./signup.css";
import SignupComponent from "../../components/form/SignupComponent";
export default function Signup() {
  return (
    <div id="container">
      <div class="box" id="bluebox">
        <h3>Create a New Account</h3>
        It’s quick and easy.
        <SignupComponent />
      </div>
    </div>
  );
}
