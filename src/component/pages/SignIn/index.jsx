import React from "react";
import { Link } from "react-router-dom";
import { Logo, Text, Input } from "../../atoms";
import { SigninBtns } from "../../molecules";
import { SignInInput } from "../../organisms";
import { PageTemplate } from "../../templates/Pagetemplates";

export const SignIn = () => {
  return (
    <PageTemplate header=" ">
      <div className="signin-bg">
        <Logo />
        <div className="signin-form">
          <div>
            <SignInInput />
            <div className="oder-form-cont">
              <div className="btn">
                <Input
                  placeholder="Remember me"
                  name="rememberme"
                  type="checkbox"
                  id="rememberme"
                />
                <label htmlFor="rememberme">
                  <Text>Remember me</Text>
                </label>
              </div>
              <div>
                <Text className="btn" type="p">
                  Forgot password?
                </Text>
              </div>
            </div>
            <SigninBtns
              signChildren="Sign In"
              googleChildren="Sign In with Google"
              fbChildren="Sign In with Facebook"
              appleChildren="Sign In with Apple"
            />
          </div>
          <div>
            <Text className="signup-opt" type="p">
              Don’t have an account?{" "}
              <Link to="/signup">
                <Text className="btn">Sign up now!</Text>
              </Link>
            </Text>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
