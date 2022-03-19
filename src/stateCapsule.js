const initialState = {
  boardSize: '',
  maxSteps: '',
  colsArr: [],
  rowsArr: [],
  moves: [],
  activeCell: { col: '', row: '' },
  currentStep: 0,
  isGameActive: false,
  isResultsActive: false
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
  ACTIVATE_GAME: 'activate the game page',
  DEACTIVATE_GAME: 'deactivate the game page',
  ACTIVATE_RESULTS: 'activate the results page',
  DEACTIVATE_RESULTS: 'deactivate the results page',
  RESET_MOVES: 'reset the moves array to initial state',
  RESET_CURRENT_STEPS: 'reset current steps to inital value',
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

    case ACTIONS.ACTIVATE_GAME:
      return {
        ...state,
        isGameActive: true
      }

    case ACTIONS.DEACTIVATE_GAME:
      return {
        ...state,
        isGameActive: false
      }

    case ACTIONS.ACTIVATE_RESULTS:
      return {
        ...state,
        isResultsActive: true
      }

    case ACTIONS.DEACTIVATE_RESULTS:
      return {
        ...state,
        isResultsActive: false
      }

    case ACTIONS.RESET_MOVES:
      return {
        ...state,
        moves: []
      }

    case ACTIONS.RESET_CURRENT_STEPS:
      return {
        ...state,
        currentStep: 0
      }

    case ACTIONS.RESET_APP_STATE:
      return initialState

    default:
      return state
  }
}

export { initialState, ACTIONS, appReducer }