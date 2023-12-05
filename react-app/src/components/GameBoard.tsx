import React, { useEffect, useState } from "react";

//components
import Header from "./Header";
import Footer from "./Footer";
import GameCircle from "./GameCircle";

import { isDraw, isWinner, getRandomComputerMove } from "../helper";

//styles
import "../styles/Game.css";

import {
  GAME_STATE_PLAYING,
  no_player,
  player_1,
  no_circles,
  GAME_STATE_WIN,
  player_2,
  GAME_STATE_DRAW,
} from "../Constant";

const GameBoard = () => {
  const [gameBoard, setGameBoard]: any = useState(
    Array(no_circles).fill(no_player)
  );
  const [currentPlayer, setCurrentPlayer] = useState(player_1);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winPlayer, setWinPlayer] = useState(no_player);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    setCurrentPlayer(player_1);
    setGameBoard(Array(no_circles).fill(no_player));
    setGameState(GAME_STATE_PLAYING);
  };

  const initBoard = () => {
    const circles = [];
    // setCurrentPlayer(player_1);
    // setGameBoard(Array(16).fill(no_player));
    for (let i = 0; i < no_circles; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  };

  const suggestMove = () => {
    circleClicked(getRandomComputerMove(gameBoard));
  };

  const circleClicked = (id: number) => {
    if (gameBoard[id] != no_player) return;
    if (gameState != GAME_STATE_PLAYING) return;

    if (isWinner(gameBoard, id, currentPlayer)) {
      // const board = [...gameBoard];
      // board[id] = currentPlayer;
      // setGameBoard(board);

      setGameState(GAME_STATE_WIN);
      setWinPlayer(currentPlayer);
    }

    if (isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinPlayer(no_player);
    }

    // They are replaced by this :
    setGameBoard((prev: any) => {
      return prev.map((circle: any, pos: any) => {
        if (pos === id) return currentPlayer;
        return circle;
      });
    });

    setCurrentPlayer(currentPlayer === player_1 ? player_2 : player_1);
  };

  const renderCircle = (id: any) => {
    return (
      <GameCircle
        key={id}
        id={id}
        className={`player_${gameBoard[id]}`}
        onCircleClicked={circleClicked}
      />
    );
  };

  return (
    <>
      <Header
        gameState={gameState}
        currentPlayer={currentPlayer}
        winPlayer={winPlayer}
      />
      <div className="gameBoard">{initBoard()}</div>
      <Footer
        onNewGameClick={initGame}
        onSuggestClick={suggestMove}
        gameState={gameState}
      />
    </>
  );
};

export default GameBoard;
