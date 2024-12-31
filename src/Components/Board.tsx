import React from 'react';

type Player = 'X' | 'O' | null;

interface BoardProps {
  board: Player[];
  handleClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ board, handleClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2 mx-auto bg-blue-700">
      {board.map((cell, index) => (
        <button
          key={index}
          className="w-20 h-20 sm:w-40 sm:h-40 text-6xl font-bold flex items-center justify-center bg-white border border-white hover:bg-gray-200"
          onClick={() => handleClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

export default Board;
