import React from 'react';
import '../styles/root.scss';

const Square = ({ value, onClick, isWinningSquares }) => {
  // console.log('square');
  return (
    <button
      className={`square ${isWinningSquares ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={onClick}
      style={{
        fontWeight: isWinningSquares ? 'bold' : 'normal',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
