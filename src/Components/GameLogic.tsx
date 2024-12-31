import React, { useState } from 'react';

type Player = 'X' | 'O' | 'Draw' | null;

interface GameLogicProps {
  children: (props: {
    board: Player[];
    currentPlayer: Player;
    winner: Player;
    handleClick: (index: number) => void;
    resetGame: () => void;
  }) => React.ReactNode;
}

const GameLogic: React.FC<GameLogicProps> = ({ children }) => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player>(null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const calculatedWinner = calculateWinner(newBoard);
    if (calculatedWinner) {
      setWinner(calculatedWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const calculateWinner = (board: Player[]): Player => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (board.every(cell => cell !== null)) {
      return 'Draw';
    }

    return null; 
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <>
      {children({
        board,
        currentPlayer,
        winner,
        handleClick,
        resetGame,
      })}
    </>
  );
};

export default GameLogic;
