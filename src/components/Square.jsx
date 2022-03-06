import React from 'react';

// OnClick as a prop triggered when the button(the empty space) is clicked

const Square = ({ value, onClick }) => {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
