export const initialState = {
  boardSize: '',
  maxSteps: '',
  colsArr: [],
  rowsArr: [],
  moves: [],
  activeCell: { col: '', row: '' },
  currentStep: 0
}

export function appReducer(state, action) {
  let newCol = state.activeCell.col
  let newRow = state.activeCell.row

  switch (action.type) {
    case 'update input data':
      return {
        ...state,
        [action.propName]: Number(action.inputValue)
      }


    case 'build board data':
      let newArr = []
      for (let i = 0; i < state.boardSize; i++) {
        newArr[i] = i
      }
      return {
        ...state,
        colsArr: newArr,
        rowsArr: newArr,
        maxSteps: state.maxSteps - 1
      }


    case 'activate cell':
      let activeCol = Math.round(Math.random() * (state.boardSize - 1))
      let activeRow = Math.round(Math.random() * (state.boardSize - 1))
      return {
        ...state,
        activeCell: { col: activeCol, row: activeRow }
      }


    case 'move up':
      newRow = state.activeCell.row - 1
      return {
        ...state,
        activeCell: { col: newCol, row: newRow }
      }

    case 'move down':
      newRow = state.activeCell.row + 1
      return {
        ...state,
        activeCell: { col: newCol, row: newRow }
      }

    case 'move right':
      newCol = state.activeCell.col + 1
      return {
        ...state,
        activeCell: { col: newCol, row: newRow }
      }

    case 'move left':
      newCol = state.activeCell.col - 1
      return {
        ...state,
        activeCell: { col: newCol, row: newRow }
      }

    case 'save previews position':
      let col = state.activeCell.col
      let row = state.activeCell.row
      let newPos = { col, row }
      return {
        ...state,
        moves: [...state.moves, newPos],
        currentStep: state.currentStep + 1
      }


    default:
      return state
  }
}

