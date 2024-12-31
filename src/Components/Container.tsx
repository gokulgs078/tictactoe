import React from 'react';
import GameLogic from './GameLogic.tsx';
import Board from './Board.tsx';
import GameStatus from './GameStatus.tsx';
import RestartButton from './RestartButton.tsx';

const Container: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-12">Tic Tac Toe</h1>
      <GameLogic>
        {({ board, currentPlayer, winner, handleClick, resetGame }) => (
          <>
            <Board board={board} handleClick={handleClick} />
            <GameStatus currentPlayer={currentPlayer} winner={winner} />
            <RestartButton resetGame={resetGame} />
          </>
        )}
      </GameLogic>
    </div>
  );
};

export default Container;
