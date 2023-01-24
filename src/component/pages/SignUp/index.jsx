import React from "react";
import { Link } from "react-router-dom";
// import axios from "../../../store/features/auth/authAPI";
import { Logo, Text } from "../../atoms";
import { SignupBtns } from "../../molecules";
import { SignUpInput } from "../../organisms";
import { PageTemplate } from "../../templates/Pagetemplates";

export const SignUp = () => {
  return (
    <PageTemplate header="  ">
      <div className="signin-bg">
        <Logo />
        <div className="signup-form">
          <Text type="p" className="jin-nw">
            Join Us Now!
          </Text>
          <SignUpInput />
          <SignupBtns
            signChildren="Sign up"
            googleChildren="Sign up with Google"
            fbChildren="Sign up with Facebook"
            appleChildren="Sign up with Apple"
          />
          <div>
            <Text className="signin-opt-ald" type="p">
              Already have an account?
              <Link to="/signin">
                <Text className="btn"> Sign In!</Text>
              </Link>
            </Text>
          </div>
          <div>
            <Text className="signin-opt" type="p">
              I accept the
              <Link to="/">
                <Text className="btn"> Terms and Conditions </Text>
              </Link>
              of service of this site and completely agree with it’s
              <Link to="/">
                <Text className="btn"> privacy policy</Text>
              </Link>
            </Text>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
