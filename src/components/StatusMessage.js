import React from 'react';

const StatusMessage = ({ winner, curr }) => {
  // const message = winner
  // ? `Winner is ${winner}`
  // : `Next player is ${!curr.isXNext ? 'X' : 'O'}`;
  const noMoveLeft = curr.board.every(el => el != null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}{' '}
          </span>
          !
        </>
      )}
      {!winner && !noMoveLeft && (
        <>
          Next player is{' '}
          <span className={curr.isXNext === 'X' ? 'text-green' : 'text-orange'}>
            {' '}
            {!curr.isXNext ? 'X' : 'O'}
          </span>{' '}
          !
        </>
      )}
      {!winner && noMoveLeft && (
        <>
          <span className="text-green">X </span>
          {`and `}
          <span className="text-orange">O </span> tied !
        </>
      )}
    </div>
  );
};

export default StatusMessage;
