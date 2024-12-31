import React from 'react';

interface GameStatusProps {
  currentPlayer: 'X' | 'O' | null;
  winner: 'X' | 'O' | 'Draw' | null;
}

const GameStatus: React.FC<GameStatusProps> = ({ currentPlayer, winner }) => {
  return (
    <div className="mt-8 text-xl font-semibold">
      {winner ? (
        winner === 'Draw' ? (
          <>Result: <span className="text-gray-600">Draw</span></>
        ) : (
          <>Result: <span className="text-green-600">{winner} wins</span></>
        )
      ) : (
        <>Current Player: {currentPlayer}</>
      )}
    </div>
  );
};

export default GameStatus;
