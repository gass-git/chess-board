import React, { useContext } from 'react'
import { AppCtx } from '../App'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'

export default function Moves() {
  const { state, ACTIONS, dispatch } = useContext(AppCtx)
  const { moves } = state
  const navigateTo = useNavigate()

  function handleClick() {
    dispatch({ type: ACTIONS.RESET_APP_STATE })
    navigateTo('/home')
  }

  return (
    <Card className='maxW-600px-minW-300px' >
      <Card.Body className='text-center'>
        <h5>
          {'['}
          {
            moves.map((pos, i) => {
              return (
                <span key={`${pos}-${i}`}>
                  {`{${pos.col},${pos.row}}`}
                </span>
              )
            })
          }
          {']'}
        </h5>
        <Button
          className='mt-5'
          variant='outline-primary'
          onClick={handleClick}
        >
          START OVER
        </Button>
      </Card.Body>
    </Card>
  )
}
