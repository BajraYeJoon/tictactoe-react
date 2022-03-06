import React from 'react';

// OnClick as a prop triggered when the button(the empty space) is clicked
// ReRenders everytime the event is triggered and at the beginning ((9) Square rendered)
const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
