import React, { useReducer } from 'react'
import { initialState, ACTIONS, appReducer } from './stateCapsule'
import { Navigate, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Game from './pages/Game'
import Results from './pages/Results'

const AppCtx = React.createContext(null)

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)
  const { isGameActive, isResultsActive } = state

  return (
    <AppCtx.Provider value={{ state, ACTIONS, dispatch }} key='ctx-key'>
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/game' element={isGameActive ? <Game /> : <Navigate to='/' />} />
        <Route path='/results' element={isResultsActive ? <Results /> : <Navigate to='/' />} />
      </Routes>
    </AppCtx.Provider>
  )
}

export { App, AppCtx }
