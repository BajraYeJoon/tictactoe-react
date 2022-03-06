import React from 'react';

const Messages = ({ winner, board, isXNext }) => {
  // Iterate through the moves (intially the noMoves is set to be true)
  const noMoves = board.every(el => el !== null);

  return (
    <h2>
      //Condition 1: in case of winner
      {winner && `Winner is ${winner}`}
      //Condition 2 : in case of no winner and moves remaining
      {!winner && !noMoves && `Next player is ${isXNext ? 'X' : 'O'}`}
      //Condition 3 : in case of no winners and no moves left
      {!winner && noMoves && 'X and O tied'}
    </h2>
  );
};

export default Messages;
