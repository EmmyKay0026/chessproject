import React from "react";
import { Link } from "react-router-dom";
import { Button, Text } from "../../atoms";
import googlelogo from "../../../assets/google logo.png";
import fblogo from "../../../assets/fblogo.png";
import applelogo from "../../../assets/apple logo.png";

export const SigninBtns = ({
  signChildren,
  googleChildren,
  fbChildren,
  appleChildren,
}) => {
  return (
    <div>
      <Link>
        <Button className="signin-btn" children={signChildren} />
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
              <Button>{googleChildren}</Button>
          </div>
        </Link>
        <Link>
          <div className="signin-wit-btn blue-btn">
              <div>
                <img src={fblogo} alt="" />
              </div>
              <Button className="blue-btn">{fbChildren}</Button>
          </div>
        </Link>
        <Link>
          <div className="signin-wit-btn black-btn">
              <div>
                <img src={applelogo} alt="" />
              </div>
              <Button className="black-btn">{appleChildren}</Button>
          </div>
        </Link>
      </div>
    </div>
  );
};
