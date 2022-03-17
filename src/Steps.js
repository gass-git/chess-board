import React from 'react'

export default function Steps({ moves }) {
  return (
    <div>{
      moves.map(pos => {
        return (
          <p>{pos.col},{pos.row}</p>
        )
      })
    }</div>
  )
}
