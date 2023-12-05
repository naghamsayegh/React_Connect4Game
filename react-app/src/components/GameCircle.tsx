import React from "react";
import "../styles/Game.css";

const GameCircle = ({ id, children, className, onCircleClicked }: any) => {
  const onClick = (ev: any, id: any) => {
    onCircleClicked(id);
  };

  return (
    <div
      className={`gameCircle ${className}`}
      onClick={(ev) => onClick(ev, id)}
    >
      {children}
    </div>
  );
};

export default GameCircle;
