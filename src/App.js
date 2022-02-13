import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './components/Helper';

import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${!isXNext ? 'X' : 'O'}`;

  // console.log(winner);

  // business logic
  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'O' : 'X';
        }
        return square;
      });
    });
    setIsXNext(prev => !isXNext);
  };

  // alert('Welcome in Tic Tac Toe');
  return (
    <div className="app">
      <h1>TIC TAC TOE!</h1>
      <h3>{message}</h3>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};

export default App;
