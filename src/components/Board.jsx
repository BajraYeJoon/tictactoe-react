import React, { useState } from 'react';
import Square from './Square';

// Functional Component that handles the overall BOARD

const Board = () => {
  //Hooks to handle the changes
  //Initialization of the arrays and setting another usestate for the second player move

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  //This event handles the position of the square clicked

  const handleSquareEvent = position => {
    //Check whether the square is already clicked!!!!
    if (board[position]) {
      return;
    }

    // To map the square with values
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });

    // Alternation of the values

    setIsNext(prev => !prev);
  };

  // Updating the position whenever clicked
  const updateSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareEvent(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {updateSquare(0)}
        {updateSquare(1)}
        {updateSquare(2)}
      </div>

      <div className="board-row">
        {updateSquare(3)}
        {updateSquare(4)}
        {updateSquare(5)}
      </div>

      <div className="board-row">
        {updateSquare(6)}
        {updateSquare(7)}
        {updateSquare(8)}
      </div>
    </div>
  );
};

export default Board;
