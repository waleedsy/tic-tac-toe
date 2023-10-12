import { useState } from "react";
import Board from "./board";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  //   const [xIsNext, setIsnext] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  //   const currentSquares = history[history.length - 1];
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory([...history, nextSquares]);
    // setIsnext(!xIsNext);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setIsnext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    let moveStr;

    while (move != null) {
      moveStr = "You are at move #" + move;
    }

    return (
      <>
        <h1>{moveStr}</h1>
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
