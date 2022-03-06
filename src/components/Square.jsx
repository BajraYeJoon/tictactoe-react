import React from 'react';

// OnClick as a prop triggered when the button(the empty space) is clicked
// ReRenders everytime the event is triggered and at the beginning ((9) Square rendered)
const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
    >
      {value}
    </button>
  );
};

export default Square;
