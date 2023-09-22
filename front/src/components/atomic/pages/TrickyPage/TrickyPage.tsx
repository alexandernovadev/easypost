import { useState } from 'react'
import Board from './Board'

export const TrickyPage = () => {
  const [player1, setPlayer1] = useState('Alexander')
  const [player2, setPlayer2] = useState('Nova')
  const [isGameStarted, setGameStarted] = useState(true)
  const [isError, setIsErros] = useState(false)

  const startGame = () => {
    setIsErros(false)
    if (player1.trim().length > 2 && player2.trim().length > 2) {
      setGameStarted(true)
    } else {
      setIsErros(true)
    }
  }

  const resetGame = () => {
    setGameStarted(false)
    setPlayer1('')
    setPlayer2('')
  }

  return (
    <div className="App">
      {isError && <span style={{color:'red'}}>Debe poner el poner de cada player stupid !</span>}
      {!isGameStarted ? (
        <div>
          <input
            placeholder="Nombre Jugador 1"
            onChange={(e) => setPlayer1(e.target.value)}
          />
          <input
            placeholder="Nombre Jugador 2"
            onChange={(e) => setPlayer2(e.target.value)}
          />
          <button onClick={startGame}>Iniciar Juego</button>
        </div>
      ) : (
        <Board player1={player1} player2={player2} />
      )}
      {isGameStarted && <button onClick={resetGame}>Reiniciar Juego</button>}
    </div>
  )
}
