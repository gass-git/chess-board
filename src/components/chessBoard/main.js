import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import { AppCtx } from '../../App'
import useEventListener from '@use-it/event-listener'
import { useNavigate } from 'react-router'
import Table from './Table'

export default function ChessBoard() {
  const { state, dispatch } = useContext(AppCtx)
  const { rowsArr, colsArr, currentStep, maxSteps } = state
  const navigateTo = useNavigate()

  useEventListener('keydown', handleKeyDown)

  function handleKeyDown(event) {
    if (currentStep <= maxSteps) {
      if (event.key === "ArrowRight") move('right')
      else if (event.key === "ArrowLeft") move('left')
      else if (event.key === "ArrowDown") move('down')
      else if (event.key === "ArrowUp") move('up')
    }
    if (currentStep === maxSteps) {
      setTimeout(() => { navigateTo('/results') }, 200)
    }
  }

  function move(direction) {
    dispatch({ type: `move ${direction}` })
    dispatch({ type: 'save previews position' })
  }

  return (
    <Container className='mt-5'>
      <Table rowsArr={rowsArr} colsArr={colsArr} />
    </Container>
  )
}
