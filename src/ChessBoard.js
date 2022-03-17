import React from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { useEffect } from 'react'

export default function ChessBoard({ data, activeCell, setActiveCell }) {

  return (
    <Container className='mt-5'>
      <table style={{ border: '1px solid gray', margin: '0 auto' }}>
        {
          data.rowsArr.map((row, rowIndex) => {
            return (
              <tr>
                {
                  data.rowsArr.map((col, colIndex) => {
                    let activeRow = activeCell.row
                    let activeCol = activeCell.col

                    const Cell = () => {
                      if (activeRow === rowIndex && activeCol === colIndex) {
                        return <div style={{ backgroundColor: 'orange', width: '100%', height: '100%' }}></div>
                      }
                      else if ((colIndex + rowIndex) % 2 === 0) {
                        return <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}></div>
                      }
                      else {
                        return <div style={{ backgroundColor: 'white', width: '100%', height: '100%' }}></div>
                      }
                    }

                    return (
                      <td style={{ border: '1px solid gray', width: '50px', height: '50px' }}>
                        <Cell />
                      </td>
                    )
                  })
                }
              </tr>
            )
          })
        }
      </table>
    </Container>
  )
}
