import React from "react";
import { Button, Text } from "../../atoms";
import search from "../../../assets/search.svg";

export const NavBar = () => {
  return (
    <nav>
      <div>
        <Text type="h2" className="compy-logo">
          Company logo
        </Text>
      </div>
      <div className="rite-nav">
        <div>
          <ul className="md-nav">
            <li>Play</li>
            <li>Live games</li>
            <li>Puzzles</li>
            <li>News</li>
            <li className="srch-btn">
              <img src={search} alt="search" />
            </li>
          </ul>
        </div>
        <div>
          <Button className="nav-btn bwn-btn" children="Sign up" />
          <Button className="nav-btn blk-btn" children="Sign in" />
        </div>
      </div>
    </nav>
  );
};
