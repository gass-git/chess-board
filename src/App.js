import React, { useReducer } from 'react'
import { initialState, appReducer } from './stateCapsule'
import Layout from './Layout'

const AppCtx = React.createContext()

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppCtx.Provider value={{ state, dispatch }} key='ctx-key'>
      <Layout />
    </AppCtx.Provider>
  )
}

export { App, AppCtx }
