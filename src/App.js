import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Navigate, Routes, Route, useNavigate } from 'react-router'
import FormComponent from './FormComponent'
import ChessBoard from './ChessBoard'
import Steps from './Steps'


export default function App() {
  const navigateTo = useNavigate()

  const initialState = {
    boardSize: '',
    maxSteps: '',
    colsArr: [],
    rowsArr: []
  }
  const [activeCell, setActiveCell] = useState({ col: '', row: '' })
  const [data, updateData] = useState(initialState)

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false)
    document.addEventListener("keyup", handleKeyUp, false)
  })

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      setActiveCell({ ...activeCell, col: activeCell.col + 1 })
      console.log(e.key)
    }
    if (e.key === "ArrowLeft") setActiveCell({ ...activeCell, col: activeCell.col - 1 })
    if (e.key === "ArrowDown") setActiveCell({ ...activeCell, row: activeCell.row + 1 })
    if (e.key === "ArrowUp") setActiveCell({ ...activeCell, row: activeCell.row - 1 })
  }
  function handleKeyUp(e) {

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
    <Container>
      <Routes>
        <Route path='*' element={<Navigate to='/' />} />
        <Route path='/' element={<FormComponent data={data} handleChange={handleChange} buildBoardData={buildBoardData} activateCell={activateCell} />} />
        <Route path='/chess-board' element={<ChessBoard data={data} activeCell={activeCell} setActiveCell={setActiveCell} />} />
        <Route path='/show-steps' element={<Steps />} />
      </Routes>
    </Container >
  )
}
