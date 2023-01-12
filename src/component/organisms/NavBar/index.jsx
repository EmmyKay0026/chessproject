import React from "react";
import { Link } from "react-router-dom";
import { Button, Logo } from "../../atoms";
import { MobNavBar } from "../../molecules";
import search from "../../../assets/searchvector.svg";

export const NavBar = () => {
  return (
    <nav>
      <Logo />
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
          <Link to="/signup">
            <Button className="nav-btn bwn-btn" children="Sign up" />
          </Link>
          <Link to="/signin">
            <Button className="nav-btn blk-btn" children="Sign in" />
          </Link>
        </div>
      </div>
      <MobNavBar />
    </nav>
  );
};
