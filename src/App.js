import React, { useReducer } from 'react'
import { Container } from 'react-bootstrap'
import { Navigate, Routes, Route, useNavigate } from 'react-router'
import FormComponent from './FormComponent'
import ChessBoard from './ChessBoard'
import Steps from './Steps'
import useEventListener from '@use-it/event-listener'
import { initialState, appReducer } from './stateCapsule'

export const AppCtx = React.createContext()

export function App() {
  const navigateTo = useNavigate()
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { maxSteps, currentStep } = state

  useEventListener('keydown', handleKeyDown)

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      dispatch({ type: 'move right' })
      dispatch({ type: 'save previews position' })
    }
    if (e.key === "ArrowLeft") {
      dispatch({ type: 'move left' })
      dispatch({ type: 'save previews position' })
    }
    if (e.key === "ArrowDown") {
      dispatch({ type: 'move down' })
      dispatch({ type: 'save previews position' })
    }
    if (e.key === "ArrowUp") {
      dispatch({ type: 'move up' })
      dispatch({ type: 'save previews position' })
    }
    if (currentStep === maxSteps) navigateTo('/show-steps')
  }

  return (
    <AppCtx.Provider value={{ state, dispatch }} key='ctx-key'>
      <Container>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<FormComponent />} />
          <Route path='/chess-board' element={<ChessBoard />} />
          <Route path='/show-steps' element={<Steps />} />
        </Routes>
      </Container >
    </AppCtx.Provider>
  )
}
