import React, { useState } from 'react';
import Board from './components/Board';
import './styles/app.scss';
import { calculateWinner } from './Logic';
import Messages from './components/Messages';

const App = () => {
  //Hooks to handle the changes
  //Initialization of the arrays and setting another usestate for the second player move

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  // To determine the winner from the logic.jsx
  const { winner, winningSquare } = calculateWinner(board);

  //message output

  //This event handles the position of the square clicked
  const handleSquareEvent = position => {
    //Check whether the square is already clicked!!!!
    if (board[position] || winner) {
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

  return (
    <div className="app">
      <h1> TIC <span className="text-green">TAC</span> TOE</h1>
      <Messages winner={winner} board={board} isXNext={isXNext} />
      <Board
        board={board}
        handleSquareEvent={handleSquareEvent}
        winningSquare={winningSquare}
      />
      <button
        onClick={() => window.location.reload(false)}
        className={`btn-reset ${winner ? 'active' : ' '}`}
      >
        Reset the game !
      </button>
      <div className="bg-balls" />

      
    </div>
  );
};

export default App;
