import React from 'react';

const History = ({ history, moveTo, currMove }) => {
  return (
    <div className="history-wrapper">
      <ul
        style={{
          listStyleType: 'none',
        }}
        className="history"
      >
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                style={{
                  fontWeight: move === currMove ? 'bold' : 'normal',
                }}
                onClick={() => moveTo(move)}
                className={`btn-move ${move === currMove ? 'active' : ''}`}
              >
                {move === 0 ? 'Go to start' : `Go to move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
