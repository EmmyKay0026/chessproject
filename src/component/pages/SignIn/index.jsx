import React from "react";
import { Link } from "react-router-dom";
import { Button, Logo, Text } from "../../atoms";
import { Input } from "../../atoms";
import { PageTemplate } from "../../templates/Pagetemplates";
import usericon from "../../../assets/usericon.svg";
import pwlock from "../../../assets/PWlock.svg";
import openpwi from "../../../assets/openPWeye.svg";
import googlelogo from "../../../assets/google logo.png";
import fblogo from "../../../assets/fblogo.png";
import applelogo from "../../../assets/apple logo.png";

export const SignIn = () => {
  return (
    <PageTemplate header=" ">
      <div className="signin-bg">
        <Logo />
        <div className="signin-form">
          <div>
            <div>
              <div className="inpt-div-cont">
                <div className="icon-cont">
                  <img src={usericon} alt="user's icon" />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Username or e-mail"
                    id="username"
                    name="username"
                  />
                </div>
              </div>
              <div className="inpt-div-cont">
                <div className="icon-cont">
                  <img src={pwlock} alt="password lock icon" />
                </div>
                <div className="pw-input">
                  <Input
                    type="password"
                    placeholder="Password"
                    id="password"
                    name="password"
                  />
                  <div className="icon-cont">
                    <img src={openpwi} alt="open eye icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="oder-form-cont">
              <div>
                <Input
                  placeholder="Remember me"
                  name="rememberme"
                  type="checkbox"
                />
                <Text>Remember me</Text>
              </div>
              <div>
                <Text type="p">Forgot password?</Text>
              </div>
            </div>
            <div>
              <Link>
                <Button className="signin-btn" children="Sign In" />
              </Link>
              <div className="or-hr">
                <div className="wit-hr"></div>
                <div>
                  <Text type="h3">OR</Text>
                </div>
                <div className="wit-hr"></div>
              </div>
              <div>
                <Link>
                  <div className="signin-wit-btn white-btn">
                    <div>
                      <img src={googlelogo} alt="" />
                    </div>
                    <Button>Sign In with Google</Button>
                  </div>
                </Link>
                <Link>
                  <div className="signin-wit-btn blue-btn">
                    <div>
                      <img src={fblogo} alt="" />
                    </div>
                    <Button className="blue-btn">Sign In with Facebook</Button>
                  </div>
                </Link>
                <Link>
                  <div className="signin-wit-btn black-btn">
                    <div>
                      <img src={applelogo} alt="" />
                    </div>
                    <Button className="black-btn">Sign In with Apple</Button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Text className="signup-opt" type="p">
              Don’t have an account? <Text>Sign up now!</Text>
            </Text>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
