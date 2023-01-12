import React from "react";
import knightboard from "../../../assets/knightboard.png";
import { Text } from "../../atoms";
export const KnightBoard = () => {
  return (
    <>
      <section className="knight-section">
        <div className="knight-section-left">
          <Text type="h1" className="knight-section-h1">
            Ever thought about making{" "}
            <span className="knight-money">money</span> while going head to head
            with the best chess players in the world?
          </Text>
          <Text type="h1" className="knight-chance">
            Here’s your chance!
          </Text>
        </div>
        <div className="knight-section-right">
          <img src={knightboard} alt="knightboard" className="knight-board" />
        </div>
      </section>
    </>
  );
};
