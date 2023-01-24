import React, { useState } from "react";
import { Input } from "../../atoms";
import pwlock from "../../../assets/PWlock.svg";
import openpwi from "../../../assets/openPWeye.svg";
import closepwi from "../../../assets/closePWeye.svg";

export const PwInput = () => {
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
  return (
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
        />
        <div onClick={pwStateHandler} className="icon-cont">
          {openpwState && <img src={openpwi} alt="open eye icon" />}
          {closepwState && <img src={closepwi} alt="closed eye icon" />}
        </div>
      </div>
    </div>
  );
};
