import React from "react";
import { Link } from "react-router-dom";
import { Button, Text } from "../../atoms";
import googlelogo from "../../../assets/google logo.png";
import fblogo from "../../../assets/fblogo.png";
import applelogo from "../../../assets/apple logo.png";

export const SignupBtns = ({
  // signChildren,
  googleChildren,
  fbChildren,
  appleChildren,
  // signUpOnClick,
}) => {
  return (
    <div className="">
      {/* <Link>
        <Button
          onClick={signUpOnClick}
          className="signin-btn"
          children={signChildren}
        />
      </Link> */}
      <div className="or-hr">
        <div className="wit-hr"></div>
        <div>
          <Text type="h3">OR</Text>
        </div>
        <div className="wit-hr"></div>
      </div>
      <div>
        <Link>
          <div className="signup-wit-btn white-btn">
            <div className="pad-sign-btn"></div>
            <div>
              <div>
                <img src={googlelogo} alt="" />
              </div>
              <Button>{googleChildren}</Button>
            </div>
            <div className="pad-sign-btn"></div>
          </div>
        </Link>
        <Link>
          <div className="signup-wit-btn blue-btn">
            <div className="pad-sign-btn"></div>
            <div>
              <div>
                <img src={fblogo} alt="" />
              </div>
              <Button className="blue-btn">{fbChildren}</Button>
            </div>
            <div className="pad-sign-btn"></div>
          </div>
        </Link>
        <Link>
          <div className="signup-wit-btn black-btn">
            <div className="pad-sign-btn"></div>
            <div>
              <div>
                <img src={applelogo} alt="" />
              </div>
              <Button className="black-btn">{appleChildren}</Button>
            </div>
            <div className="pad-sign-btn"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};
