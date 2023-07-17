import { useState } from 'react';
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const board = Array(9).fill(null);

const Square = ({ children, updateBoard, isSelected, index }) => {

  const className = `square ${isSelected ? 'is-selected' : ''}`

  const clickAct = () => {
    updateBoard(index);
  }

  return (
    <div className={className} onClick={clickAct}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURNS.X);

  const [winner, setWinner] = useState(null);

  const updateBoardF = (index) => {
    //No actualizar si ya tiene algo (defacto es null)
    console.log('hey')
    if (board[index]||winner) return
    //Marcar una casilla
    const newBoard = [...board];
    newBoard[index] = turn;//Se crea un nuevo array en vez de modificar el board sin el set board para evitar discrepancias.
    setBoard(newBoard);
    //Cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner) setWinner(newWinner);

  }

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]){
          return boardToCheck[a];
        }
    }
  }

  return (
    <>
      <main className='board'>
        <h1>Tic Tac Toe</h1>

        <section className="turn">
          <Square isSelected={turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>

        <section className='game'>
          {
            board.map((_, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoardF}
                >
                  {board[index]}
                </Square>
              )
            })
          }
        </section>

      </main>

    </>
  )
}

export default App
