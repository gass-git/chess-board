import React, { useContext } from 'react'
import { AppCtx } from './App'

export default function Steps() {
  const { state } = useContext(AppCtx)
  const { moves } = state

  return (
    <div>{'['}
      {
        moves.map((pos) => {
          return (
            <span>{`{${pos.col},${pos.row}}`}</span>
          )
        })
      }
      {']'}</div>
  )
}
