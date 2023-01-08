import React from "react";
import trophy from "../../../assets/trophy.svg";
import rook from "../../../assets/rook.svg";
export const PlayGame = () => {
  return (
    <>
      <section className="play-section">
        <div className="play-game-left">
          <div className="play-1">
            <div className="game-1">
              <img src={trophy} alt="trophy" className="trophy" />
              <p className="games-today pg-1">14,000,000 games today</p>
            </div>
            <div className="game-2">
              <img src={rook} alt="rook" className="rook" />
              <p className="games-today pg-2">80,000 playing now</p>
            </div>
          </div>
          <div className="play-2"></div>
        </div>
        <div className="play-game-right">
          <div className="play-3"></div>
          <div className="play-4"></div>
        </div>
      </section>
    </>
  );
};
