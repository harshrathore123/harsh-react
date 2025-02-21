import React, { useState } from 'react'

function TicTacGame() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [turnX, setTurnX] = useState(true);
    const [winner, setWinner] = useState(null);

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

    const checkWinner = (newBoard) => {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (
                newBoard[a] &&
                newBoard[a] === newBoard[b] &&
                newBoard[a] === newBoard[c]
            ) {
                setWinner(newBoard[a]);
                return;
            }
        }
    };

    const handleClick = (index) => {
        if (board[index] || winner) return;
        const newBoard = [...board];
        newBoard[index] = turnX ? "X" : "O";
        setBoard(newBoard);
        setTurnX(!turnX);
        checkWinner(newBoard);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(""));
        setTurnX(true);
        setWinner(null);
    };

    const newbtn = () => {
        setBoard(Array(9).fill(""));
        setTurnX(true);
        setWinner(null);
    }
    return (
        <>

            {winner && (
                <>
                    <div className="text-[#fffd76] text-[2.1rem]">
                        Congratulations, Winner is {winner}!
                    </div>

                    <button type="button" 
                    onClick={resetGame}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                    font-bold rounded-lg h-20 w-80 text-3xl px-5 py-2.5 me-2 mb-2 mt-9 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">New Game</button>
                </>

            )}

            <div className="h-[70vh] flex justify-center items-center">
                <div className='flex flex-wrap justify-center items-center h-[60vmin] w-[60vmin] gap-[1.2vmin] border-transparent'>
                    {board.map((value, index) => (
                        <button
                            key={index}
                            className="h-[18vmin] w-[18vmin] rounded-[10px] border-transparent bg-[#fffc7f] text-red-500 text-[2rem] shadow-[0_0_1rem_black]"
                            onClick={() => handleClick(index)}
                            disabled={value || winner}
                        >
                            {value}
                        </button>
                    ))}
                </div>

            </div>

            <button
                                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
                    font-bold rounded-lg h-20 w-80 text-3xl px-5 py-2.5 me-2 mb-2 mt-9 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={resetGame}
            >
                Reset Game
            </button>
        </>
    )
}

export default TicTacGame