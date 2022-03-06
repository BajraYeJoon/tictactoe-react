import React from 'react';

const Messages = ({ winner, board, isXNext }) => {
  // Iterate through the moves (intially the noMoves is set to be true)
  const noMoves = board.every(el => el !== null);

  return (
    <div className="status-message">
      {/* //Condition 1: in case of winner */}
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {/* //Condition 2 : in case of no winner and moves remaining */}
      {!winner && !noMoves && (
        <>
          Next player is{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {isXNext ? 'X' : ' O'}
          </span>
        </>
      )}
      {/* //Condition 3 : in case of no winners and no moves left */}
      {!winner && noMoves && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> are both tied !!!!!
        </>
      )}
    </div>
  );
};

export default Messages;
