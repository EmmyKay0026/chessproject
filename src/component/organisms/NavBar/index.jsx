import React from "react";
import { Link } from "react-router-dom";
import { Button, Text } from "../../atoms";
import search from "../../../assets/searchvector.svg";

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
            <li>
              <Link className="link-btn" to="play">
                Play
              </Link>
            </li>
            <li>
              <Link className="link-btn" to="livegames">
                Live games
              </Link>
            </li>
            <li>
              <Link className="link-btn" to="/puzzles">
                Puzzles
              </Link>
            </li>
            <li>
              <Link className="link-btn" to="/news">
                News
              </Link>
            </li>
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
