import React, { useReducer } from 'react'
import { initialState, appReducer } from './stateCapsule'
import { Navigate, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Game from './pages/Game'
import Results from './pages/Results'

const AppCtx = React.createContext()

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppCtx.Provider value={{ state, dispatch }} key='ctx-key'>
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </AppCtx.Provider>
  )
}

export { App, AppCtx }
