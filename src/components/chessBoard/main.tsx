import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container'
import { AppCtx } from '../../App'
import useEventListener from '@use-it/event-listener'
import { useNavigate } from 'react-router'
import Table from './Table'

export default function ChessBoard() {
  const { state, ACTIONS, dispatch } = useContext(AppCtx)
  const { activeCell, boardSize, rowsArr, colsArr, currentStep, maxSteps } = state
  const navigateTo = useNavigate()

  useEventListener('keydown', handleKeyDown)

  function handleKeyDown(e: KeyboardEvent) {
    if (currentStep < maxSteps) {
      if (e.key === 'ArrowRight' && isMovable('right')) move('right')
      else if (e.key === 'ArrowLeft' && isMovable('left')) move('left')
      else if (e.key === 'ArrowDown' && isMovable('down')) move('down')
      else if (e.key === 'ArrowUp' && isMovable('up')) move('up')
    }
    if (currentStep === maxSteps) {
      setTimeout(() => {
        dispatch({ type: ACTIONS.ACTIVATE_RESULTS })
        navigateTo('/results')
      }, 400)
    }
  }

  function isMovable(direction: string) {
    switch (direction) {
      case 'right':
        if (activeCell.col === boardSize) return false
        else return true

      case 'left':
        if (activeCell.col === 1) return false
        else return true

      case 'up':
        if (activeCell.row === 1) return false
        else return true

      case 'down':
        if (activeCell.row === boardSize) return false
        else return true

      default:
        return false
    }
  }

  function move(direction: string) {
    dispatch({ type: `move ${direction}` })
    dispatch({ type: ACTIONS.SAVE_PREV_POS })
  }

  return (
    <Container className='mt-5'>
      <Table rowsArr={rowsArr} colsArr={colsArr} boardSize={boardSize} />
    </Container>
  )
}
