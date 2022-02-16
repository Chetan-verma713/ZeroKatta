import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';

import { calculateWinner } from './components/Helper';

import './styles/root.scss';
import StatusMessage from './components/StatusMessage';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);

  const [currMove, setCurrMove] = useState(0);

  const curr = history[currMove];

  const { winner, winningSquares } = calculateWinner(curr.board);

  // console.log(history);

  // business logic
  const handleSquareClick = position => {
    if (curr.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'O' : 'X';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrMove(move);
  };

  const startNewGame = () => {
    setHistory(NEW_GAME);
    setCurrMove(0);
  };

  // alert('Welcome in Tic Tac Toe');
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE!
      </h1>
      <StatusMessage curr={curr} winner={winner} />
      <Board
        board={curr.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <br />
      <button
        onClick={startNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start New Game
      </button>

      <History history={history} moveTo={moveTo} currMove={currMove} />
      <div className="bg-balls"></div>
    </div>
  );
};

export default App;
