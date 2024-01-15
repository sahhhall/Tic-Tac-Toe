import {useState} from 'react'
function Sqaure({value, onSquareClick}) {

    return (
        <>
            <button onClick={onSquareClick}
                className="square">
                {value}</button>
        </>
    )
}

export default function Board() {
    const [secondP, setSec] = useState(true)
    const [sqaures, setSqaures] = useState(Array(9).fill(null))
    function handleClick(i) {
        if (sqaures[i] || calculateWinner(sqaures)) {
            return;
        }
        const next = sqaures.slice();
        if (secondP) {
            next[i] = "X";
        } else {
            next[i] = "O";
        }
        setSqaures(next)
        setSec(!secondP)
    }
    const winner = calculateWinner(sqaures);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (
            secondP  ? 'X' : 'O'
    );
    }

    return (
        <>
            <div className="status">
                {status}</div>
            <div className="board-row">
                <Sqaure value={
                        sqaures[0]
                    }
                    onSquareClick={
                        () => handleClick(0)
                    }/>
                <Sqaure value={
                        sqaures[1]
                    }
                    onSquareClick={
                        () => handleClick(1)
                    }/>
                <Sqaure value={
                        sqaures[2]
                    }
                    onSquareClick={
                        () => handleClick(2)
                    }/>
            </div>
            <div className="board-row">
                <Sqaure value={
                        sqaures[3]
                    }
                    onSquareClick={
                        () => handleClick(3)
                    }/>
                <Sqaure value={
                        sqaures[4]
                    }
                    onSquareClick={
                        () => handleClick(4)
                    }/>
                <Sqaure value={
                        sqaures[5]
                    }
                    onSquareClick={
                        () => handleClick(5)
                    }/>
            </div>
            <div className="board-row">
                <Sqaure value={
                        sqaures[6]
                    }
                    onSquareClick={
                        () => handleClick(6)
                    }/>
                <Sqaure value={
                        sqaures[7]
                    }
                    onSquareClick={
                        () => handleClick(7)
                    }/>
                <Sqaure value={
                        sqaures[8]
                    }
                    onSquareClick={
                        () => handleClick(8)
                    }/>
            </div>

        </>
    )


}


function calculateWinner(squares) {
    const lines = [
        [
            0, 1, 2
        ],
        [
            3, 4, 5
        ],
        [
            6, 7, 8
        ],
        [
            0, 3, 6
        ],
        [
            1, 4, 7
        ],
        [
            2, 5, 8
        ],
        [
            0, 4, 8
        ],
        [
            2, 4, 6
        ]

    ]
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
