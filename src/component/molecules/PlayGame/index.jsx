import React from "react";
import trophy from "../../../assets/trophy.svg";
import rook from "../../../assets/rook.svg";
import about from "../../../assets/Vector.svg";
import help from "../../../assets/Vector2.svg";
import knight from "../../../assets/knightvector.svg";
import queen from "../../../assets/queen.svg";
import rooks from "../../../assets/rooks.svg";
import { Button, Text } from "../../atoms/";
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
          <div className="play-container">
            <div className="btn help-btn">
              <div>
                <img src={help} alt="help" className="img-btn" />
                <span className="s-btn s-1">Help</span>
              </div>
              <div>
                <Button className="about">
                  <img src={about} alt="help" className="img-btn" />
                  <span className="s-btn">About</span>
                </Button>
              </div>
            </div>
            <div className="btn bot-btn bot-btn-1">
              <div className="bot-help">
                <div>
                  <img src={help} alt="help" className="img-btn" />
                  <span className="s-btn s-1">Help</span>
                </div>
                <div>
                  <Button className="about">
                    <img src={about} alt="help" className="img-btn" />
                    <span className="s-btn">About</span>
                  </Button>
                </div>
              </div>

              <Button className="knight-bot-btn btn">
                <div>
                  <Text type="h2" className="bot-h2">
                    Play with computer
                  </Text>
                  <Text type="h3" className="bot-h3">
                    Play against trained bots
                  </Text>
                </div>
                <div className="knight-icon">
                  <img src={knight} alt="knight" />
                </div>
              </Button>
            </div>
            <div className="play-right">
              <div className="play-3">
                <div className="btn bot-btn bot-btn-2">
                  <Button className="knight-bot-btn rooks-bot btn">
                    <div>
                      <Text type="h2" className="bot-h2">
                        Play online
                      </Text>
                      <Text type="h3" className="bot-h3">
                        Play with someone at your level
                      </Text>
                    </div>
                    <div className="knight-icon">
                      <img src={rooks} alt="rooks" />
                    </div>
                  </Button>
                </div>
              </div>
              <div className="play-4">
                <div className="btn bot-btn bot-btn-3">
                  <Button className="knight-bot-btn btn">
                    <div>
                      <Text type="h2" className="bot-h2">
                        Play with a friend
                      </Text>
                      <Text type="h3" className="bot-h3">
                        Play with someone you know
                      </Text>
                    </div>
                    <div className="knight-icon">
                      <img src={queen} alt="queen" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
