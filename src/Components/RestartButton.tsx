import React from 'react';

interface RestartButtonProps {
  resetGame: () => void;
}

const RestartButton: React.FC<RestartButtonProps> = ({ resetGame }) => {
  return (
    <button
      className="mt-10 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      onClick={resetGame}
    >
      Restart Game
    </button>
  );
};

export default RestartButton;
