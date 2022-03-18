import React from 'react'
import Cell from './Cell'

export default function Table({ rowsArr, colsArr }) {
  return (
    <table style={{ border: '1px solid gray', margin: '0 auto' }}>
      {
        rowsArr.map((row, rowIndex) => {
          return (
            <tr>
              {
                colsArr.map((col, colIndex) => {
                  return (
                    <td style={{ border: '1px solid gray', width: '50px', height: '50px' }}>
                      <Cell colIndex={colIndex} rowIndex={rowIndex} />
                    </td>
                  )
                })
              }
            </tr>
          )
        })
      }
    </table>
  )
}
