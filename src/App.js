import React, { useReducer } from 'react'
import { Navigate, Routes, Route } from 'react-router'
import { initialState, appReducer } from './stateCapsule'
import Form from './components/form/main'
import ChessBoard from './components/chessBoard/main'
import Results from './components/results/main'

const AppCtx = React.createContext()

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppCtx.Provider value={{ state, dispatch }} key='ctx-key'>
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/' element={<Form />} />
        <Route path='/game' element={<ChessBoard />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </AppCtx.Provider>
  )
}

export { App, AppCtx }
