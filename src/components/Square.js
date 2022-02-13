import React from 'react';
import '../styles/root.scss';

const Square = ({ value, onClick }) => {
  // console.log('square');
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
