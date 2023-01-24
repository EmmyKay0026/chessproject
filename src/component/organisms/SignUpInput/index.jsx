import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Text, Button } from "../../atoms";
import { globalAxios } from "../../../store/features/auth/authAPI";
// import { PwInput, SignupBtns } from "../../molecules";
import usericon from "../../../assets/usericon.svg";
import pwlock from "../../../assets/PWlock.svg";
import openpwi from "../../../assets/openPWeye.svg";
import closepwi from "../../../assets/closePWeye.svg";
import mailicon from "../../../assets/envelop.svg";
import pawnIcon from "../../../assets/signuppawn.svg";
import bishopIcon from "../../../assets/signupbishop.svg";
import knightIcon from "../../../assets/signupknight.svg";
import queenIcon from "../../../assets/signupqueen.svg";
// import axios from "axios";

export const SignUpInput = () => {
  const initialData = {
    userName: "",
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialData);
  const [openpwState, setOpenPwState] = useState(false);
  const [closepwState, setClosePwState] = useState(true);
  const [pwType, setPwType] = useState("password");
  const pwStateHandler = () => {
    if (openpwState === false) {
      setOpenPwState(true);
      setClosePwState(false);
      setPwType("text");
    } else {
      setOpenPwState(false);
      setClosePwState(true);
      setPwType("password");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormValues(initialData);
    try {
      const response = await globalAxios.post("/signup", JSON.stringify({}));
    } catch (err) {}
  };
  const handleChange = (e) =>
    setFormValues((prev) => {
      console.log(e.target.value);
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  return (
    <>
      <div className="inpt-div-cont wid-100">
        <div className="icon-cont">
          <img src={usericon} alt="user's icon" />
        </div>
        <div className="em-inp">
          <Input
            type="username"
            placeholder="Username"
            id="username"
            name="username"
            value={formValues.firstName}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="inpt-div-cont">
        <div className="icon-cont ">
          <img src={mailicon} alt="mail icon" />
        </div>
        <div className="em-inp">
          <Input
            type="email"
            placeholder="E-mail"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
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
            password={pwType}
            onChange={handleChange}
            value={formValues.password}
          />
          <div onClick={pwStateHandler} className="icon-cont">
            {openpwState && <img src={openpwi} alt="open eye icon" />}
            {closepwState && <img src={closepwi} alt="closed eye icon" />}
          </div>
        </div>
      </div>
      {/* <PwInput /> */}
      <div>
        <Text
          className="skil-text"
          children="What’s your skill level?"
          type="h4"
        />

        <div className="skil-icon-cont">
          <Input
            id="rookie"
            className="test-radio"
            type="radio"
            name="skill-level"
          />
          <label htmlFor="rookie">
            <div className="skil-icon ">
              <img src={pawnIcon} alt="pawn icon" />
              <Text type="p" children="Rookie" />
            </div>
          </label>
          <Input
            id="intermediate"
            className="test-radio"
            type="radio"
            name="skill-level"
          />
          <label htmlFor="intermediate">
            <div className="skil-icon">
              <img src={bishopIcon} alt="bishop icon" />
              <Text type="p" children="Intermediate" />
            </div>
          </label>
          <Input
            id="master"
            className="test-radio"
            type="radio"
            name="skill-level"
          />
          <label htmlFor="master">
            <div className="skil-icon">
              <img src={knightIcon} alt="knight icon" />
              <Text type="p" children="Master" />
            </div>
          </label>
          <Input
            id="grandmaster"
            className="test-radio"
            type="radio"
            name="skill-level"
          />
          <label htmlFor="grandmaster">
            <div className="skil-icon">
              <img src={queenIcon} alt="queen icon" />
              <Text type="p" children="Grand master" />
            </div>
          </label>
        </div>
      </div>
      <Link>
        <Button
          onClick={handleSubmit}
          className="signup-mar-top signin-btn"
          children="Sign up"
        />
      </Link>
    </>
  );
};
