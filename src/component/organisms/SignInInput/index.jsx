import React from "react";
import { Input } from "../../atoms";
import { PwInput } from "../../molecules";
import usericon from "../../../assets/usericon.svg";

export const SignInInput = () => {
  return (
    <div>
      <div className="inpt-div-cont wid-100">
        <div className="icon-cont">
          <img src={usericon} alt="user's icon" />
        </div>
        <div className="em-inp">
          <Input
            type="email"
            placeholder="Username or e-mail"
            id="username"
            name="username"
          />
        </div>
      </div>
      <PwInput />
    </div>
  );
};
