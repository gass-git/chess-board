const initialState = {
  boardSize: '',
  maxSteps: '',
  colsArr: [],
  rowsArr: [],
  moves: [],
  activeCell: { col: '', row: '' },
  currentStep: 0
}

const ACTIONS = {
  UPDATE_INPUT_DATA: 'update input data',
  SET_BOARD_DATA: 'build board data',
  ACTIVATE_CELL: 'activate cell',
  MOVE_UP: 'move up',
  MOVE_DOWN: 'move down',
  MOVE_RIGHT: 'move right',
  MOVE_LEFT: 'move left',
  SAVE_PREV_POS: 'save previews position',
  RESET_APP_STATE: 'reset the state of the app'
}

function appReducer(state, action) {
  let newCol = state.activeCell.col
  let newRow = state.activeCell.row

  switch (action.type) {
    case ACTIONS.UPDATE_INPUT_DATA:
      return {
        ...state,
        [action.propName]: Number(action.inputValue)
      }

    case ACTIONS.SET_BOARD_DATA:
      let newArr = []
      for (let i = 0; i < state.boardSize; i++) {
        newArr[i] = i
      }
      return {
        ...state,
        colsArr: newArr,
        rowsArr: newArr,
        maxSteps: state.maxSteps
      }

    case ACTIONS.ACTIVATE_CELL:
      let activeCol = Math.round(Math.random() * (state.boardSize - 1))
      let activeRow = Math.round(Math.random() * (state.boardSize - 1))
      return {
        ...state,
        activeCell: { col: activeCol, row: activeRow }
      }

    case ACTIONS.MOVE_UP:
      newRow = state.activeCell.row - 1
      return {
        ...state,
        activeCell: { col: newCol, row: newRow }
      }

    case ACTIONS.MOVE_DOWN:
      newRow = state.activeCell.row + 1
      return {
        ...state,
        activeCell: { col: newCol, row: newRow }
      }

    case ACTIONS.MOVE_RIGHT:
      newCol = state.activeCell.col + 1
      return {
        ...state,
        activeCell: { col: newCol, row: newRow }
      }

    case ACTIONS.MOVE_LEFT:
      newCol = state.activeCell.col - 1
      return {
        ...state,
        activeCell: { col: newCol, row: newRow }
      }

    case ACTIONS.SAVE_PREV_POS:
      let col = state.activeCell.col
      let row = state.activeCell.row
      let newPos = { col, row }
      return {
        ...state,
        moves: [...state.moves, newPos],
        currentStep: state.currentStep + 1
      }

    case ACTIONS.RESET_APP_STATE:
      return initialState

    default:
      return state
  }
}

export { initialState, ACTIONS, appReducer }