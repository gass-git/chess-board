import React, { useState, useEffect, useRef, useMemo } from 'react'
import { Container } from 'react-bootstrap'
import { Navigate, Routes, Route, useNavigate } from 'react-router'
import FormComponent from './FormComponent'
import ChessBoard from './ChessBoard'
import Steps from './Steps'
import useEventListener from '@use-it/event-listener'

export default function App() {
  const navigateTo = useNavigate()

  const initialState = {
    boardSize: '',
    maxSteps: '',
    colsArr: [],
    rowsArr: []
  }
  const [moves, updateMoves] = useState([])
  const [activeCell, setActiveCell] = useState({ col: '', row: '' })
  const [data, updateData] = useState(initialState)
  const count = useRef(0)

  useEventListener('keydown', handleKeyDown)

  function handleKeyDown(e) {
    if (count.current <= data.maxSteps) {
      if (e.key === "ArrowRight") {
        setActiveCell({ ...activeCell, col: activeCell.col + 1 })
        savePreviewsMove()
      }
      if (e.key === "ArrowLeft") {
        setActiveCell({ ...activeCell, col: activeCell.col - 1 })
        savePreviewsMove()
      }
      if (e.key === "ArrowDown") {
        setActiveCell({ ...activeCell, row: activeCell.row + 1 })
        savePreviewsMove()
      }
      if (e.key === "ArrowUp") {
        setActiveCell({ ...activeCell, row: activeCell.row - 1 })
        savePreviewsMove()
      }
    }
    else {
      navigateTo('/show-steps')
    }
  }

  function savePreviewsMove() {
    if (activateCell.col !== '') {
      let col = activeCell.col
      let row = activeCell.row
      let newPos = { col, row }
      updateMoves([...moves, newPos])
      count.current++
    }
  }

  function buildBoardData() {
    // Build arrays
    let newArr = []
    for (let i = 0; i < data.boardSize; i++) {
      newArr[i] = i
    }
    updateData({ ...data, colsArr: newArr, rowsArr: newArr })
  }

  function activateCell() {
    // Set active cell data
    let activeCol = Math.round(Math.random() * (data.boardSize - 1))
    let activeRow = Math.round(Math.random() * (data.boardSize - 1))

    setActiveCell({ col: activeCol, row: activeRow })
  }

  function handleChange(event) {
    let propName = event.target.name
    let inputValue = event.target.value
    updateData({ ...data, [propName]: Number(inputValue) })
  }

  return (
    <Container onKeyDown={handleKeyDown}>
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/' element={<FormComponent data={data} handleChange={handleChange} buildBoardData={buildBoardData} activateCell={activateCell} />} />
        <Route path='/chess-board' element={<ChessBoard data={data} activeCell={activeCell} setActiveCell={setActiveCell} />} />
        <Route path='/show-steps' element={<Steps moves={moves} />} />
      </Routes>
    </Container >
  )
}
