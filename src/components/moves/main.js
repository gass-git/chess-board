import React, { useContext } from 'react'
import { AppCtx } from '../../App'
import { Card } from 'react-bootstrap'

export default function Moves() {
  const { state } = useContext(AppCtx)
  const { moves } = state

  return (
    <Card className='border-0' style={{ maxWidth: '600px', minWidth: '300px' }} >
      <Card.Body className='text-center'>
        <h5>
          {'['}
          {
            moves.map((pos) => {
              return (
                <span>{`{${pos.col},${pos.row}}`}</span>
              )
            })
          }
          {']'}
        </h5>
      </Card.Body>
    </Card>
  )
}
