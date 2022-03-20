import React, { useContext } from 'react'
import { AppCtx } from '../../App'

export default function Cell({ colIndex, rowIndex }) {
  const { state } = useContext(AppCtx)
  const activeRow: number | null = state.activeCell.row
  const activeCol: number | null = state.activeCell.col

  // active cell
  if (activeRow - 1 === rowIndex && activeCol - 1 === colIndex) return <div className='orange-cell' />

  // gray cells
  else if ((colIndex + rowIndex) % 2 === 0) return <div className='gray-cell' />

  // white cells
  else return <div className='white-cell' />
}

