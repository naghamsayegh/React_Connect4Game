import React from "react";
import { GAME_STATE_PLAYING } from "../Constant";

const Footer = ({ onNewGameClick, onSuggestClick, gameState }: any) => {

  return (
    <div className="panel footer">
      {gameState === GAME_STATE_PLAYING ? (
        <button onClick={onSuggestClick}>Suggest</button>
      ) : (
        <button onClick={onNewGameClick}>New Game</button>
      )}
    </div>
  );
};

export default Footer;
