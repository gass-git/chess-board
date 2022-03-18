import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { AppCtx } from '../../App'
import FormGroupOne from './FormGroupOne'
import FormGroupTwo from './FormGroupTwo'

export default function FormComponent() {
  const navigateTo = useNavigate()
  const { state, ACTIONS, dispatch } = useContext(AppCtx)
  const { boardSize, maxSteps } = state

  function handleSubmit() {
    dispatch({ type: ACTIONS.SET_BOARD_DATA })
    dispatch({ type: ACTIONS.ACTIVATE_CELL })
    navigateTo('/game')
  }

  function handleChange(event) {
    dispatch({
      type: ACTIONS.UPDATE_INPUT_DATA,
      propName: event.target.name,
      inputValue: event.target.value
    })
  }

  return (
    <Card style={{ maxWidth: '600px', minWidth: '300px' }} >
      <Card.Body className='text-center'>
        <FormGroupOne handleChange={handleChange} boardSize={boardSize} />
        <FormGroupTwo handleChange={handleChange} maxSteps={maxSteps} />
        <Button
          variant='outline-primary'
          className='mt-4 mb-3'
          onClick={handleSubmit}
        >
          START
        </Button>
      </Card.Body>
    </Card>
  )
}
