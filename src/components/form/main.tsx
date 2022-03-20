import React, { useContext, useState, useCallback } from 'react'
import { Card, Button, Row, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { AppCtx } from '../../App'
import FormGroupOne from './FormGroupOne'
import FormGroupTwo from './FormGroupTwo'
import RedAlert from './RedAlert'

export default function Form() {
  const navigateTo = useNavigate()
  const { state, ACTIONS, dispatch } = useContext(AppCtx)
  const { boardSize, maxSteps } = state
  const [showAlert, setShowAlert] = useState(false)

  // render RedAlert component only when showAlert state changes
  const switchAlertOn = useCallback(() => { setShowAlert(true) }, [])
  const switchAlertOff = useCallback(() => { setShowAlert(false) }, [])

  // submit conditions - validation
  const C: any[] = [
    boardSize !== '',
    boardSize <= 20,
    maxSteps !== '',
    maxSteps <= 100
  ]

  function handleSubmit() {
    if (C[0] && C[1] && C[2] && C[3]) {
      dispatch({ type: ACTIONS.RESET_MOVES })
      dispatch({ type: ACTIONS.RESET_CURRENT_STEPS })
      dispatch({ type: ACTIONS.SET_BOARD_DATA })
      dispatch({ type: ACTIONS.ACTIVATE_CELL })
      dispatch({ type: ACTIONS.ACTIVATE_GAME })
      navigateTo('/game')
    }
    else {
      switchAlertOn()
    }
  }

  function handleChange(event: any) {
    dispatch({
      type: ACTIONS.UPDATE_INPUT_DATA,
      propName: event.target.name,
      inputValue: event.target.value
    })
  }

  return (
    <Container fluid className='maxW-600px-minW-300px'>
      <Row>
        <RedAlert showAlert={showAlert} switchAlertOff={switchAlertOff} />
      </Row>
      <Row>
        <Card>
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
      </Row>
    </Container>
  )
}
