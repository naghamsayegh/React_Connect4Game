import React from "react";

import { GAME_STATE_PLAYING, GAME_STATE_WIN ,GAME_STATE_DRAW} from "../Constant";

const Header = ({ gameState, currentPlayer,winPlayer }: any) => {
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return <>Player {currentPlayer} Turn</>;
      case GAME_STATE_WIN:
        return <>Player {currentPlayer} Wins</>;
      case GAME_STATE_DRAW:
        return <>Game is a Draw</>;
      default:
        break;
    }
  };
  return (
    <div className="panel header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Header;
