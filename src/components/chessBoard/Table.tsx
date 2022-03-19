import React from 'react'
import Cell from './Cell'

export default function Table({ boardSize, rowsArr, colsArr }) {
  const size: number = Math.round(400 / boardSize)

  return (
    <table className='chess-board'>
      <tbody>
        {
          rowsArr.map((row: number, rowIndex: number) => {
            return (
              <tr key={`${rowIndex}`}>
                {
                  colsArr.map((col: number, colIndex: number) => {
                    return (
                      <td
                        key={`${rowIndex}-${colIndex}`}
                        style={{ border: '1px solid gray', width: `${size}px`, height: `${size}px` }}
                      >
                        <Cell colIndex={colIndex} rowIndex={rowIndex} />
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </tbody>
    </table >
  )
}
