import React from 'react';
import '../styles/root.scss';

const Square = ({ value }) => {
  return <button className="square">{value}</button>;
};

export default Square;
