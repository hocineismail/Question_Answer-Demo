import React from "react";
import SignupComponent from "../../components/form/SignupComponent";
import ForgotPasswordComponent from "../../components/form/ForgotPasswordComponent";
export default function ForgotPassword() {
  return (
    <div id="container">
      <div class="box" id="bluebox">
        <h3>Find Your Account</h3>
        Please enter your email to search for your account.
        <ForgotPasswordComponent />
      </div>
    </div>
  );
}
