import React, { useContext } from 'react'
import { AppCtx } from '../../App'

export default function Cell({ colIndex, rowIndex }) {
  const { state } = useContext(AppCtx)
  let activeRow = state.activeCell.row
  let activeCol = state.activeCell.col

  if (activeRow === rowIndex && activeCol === colIndex) {
    return <div style={{ backgroundColor: 'orange', width: '100%', height: '100%' }}></div>
  }
  else if ((colIndex + rowIndex) % 2 === 0) {
    return <div style={{ backgroundColor: 'gray', width: '100%', height: '100%' }}></div>
  }
  else {
    return <div style={{ backgroundColor: 'white', width: '100%', height: '100%' }}></div>
  }
}

