import React, { useContext } from 'react'
import { AppCtx } from '../../App'

export default function Cell({ colIndex, rowIndex }) {
  const { state } = useContext(AppCtx)
  let activeRow: number | null = state.activeCell.row
  let activeCol: number | null = state.activeCell.col

  if (activeRow === rowIndex && activeCol === colIndex) {
    return <div className='orange-cell' />
  }
  else if ((colIndex + rowIndex) % 2 === 0) {
    return <div className='gray-cell' />
  }
  else {
    return <div className='white-cell' />
  }
}

