// src/components/Board.tsx

import React, { useState, useEffect } from 'react'
import './style.css'

interface BoardProps {
  player1: string
  player2: string
}

interface CursorPosition {
  x: number
  y: number
}

const Board: React.FC<BoardProps> = ({ player1, player2 }) => {
  const [board, setBoard] = useState<string[][]>([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ])
  const [currentPlayer, setCurrentPlayer] = useState<string>('X')
  const [cursor, setCursor] = useState<CursorPosition>({ x: 0, y: 0 })
  const [winner, setWinner] = useState<string | null>(null)


  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      // Verificar filas
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        setWinner(board[i][0])
        return
      }
      // Verificar columnas
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        setWinner(board[0][i])
        return
      }
    }
    // Verificar diagonales
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      setWinner(board[0][0])
      return
    }
    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      setWinner(board[0][2])
      return
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (winner) return

    let newCursor = { ...cursor }

    if (e.code === 'ArrowLeft') {
      newCursor.y = Math.max(0, newCursor.y - 1)
      // Izquierda
    } else if (e.code === 'ArrowUp') {
      newCursor.x = Math.max(0, newCursor.x - 1)
      // Arriba
    } else if (e.code === 'ArrowRight') {
      newCursor.y = Math.min(2, newCursor.y + 1)
      // Derecha
    } else if (e.code === 'ArrowDown') {
      // Abajo
      newCursor.x = Math.min(2, newCursor.x + 1)
    } else if (e.code === 'Space') {
      // Espacio
      if (board[newCursor.y][newCursor.x] === '') {
        const newBoard = [...board]
        newBoard[newCursor.y][newCursor.x] = currentPlayer
        setBoard(newBoard)
        checkWinner()
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
      }
      return
    }

    setCursor(newCursor)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [board, currentPlayer, cursor])

  return (
    <div>
      <div className="player-labels">
        <div className={winner === 'X' ? 'winner' : 'loser'}>{player1}</div>
        <div className={winner === 'O' ? 'winner' : 'loser'}>{player2}</div>
      </div>
      <div className="board">
        {board.map((row, y) => (
          <div className="row" key={y}>
            {row.map((cell, x) => (
              <div
                className={`cell ${
                  cursor.x === x && cursor.y === y ? 'cursor' : ''
                }`}
                key={x}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Board
