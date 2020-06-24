import defaultState from './defaultState'
import { UPDATE, ADD_ITEM, DELETE, GET_LIST } from './ationType'

const reducer = (state = defaultState, action) => {
  if (action.type === UPDATE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.listItem.push(newState.inputValue)
    return newState
  }

  if (action.type === DELETE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.listItem.splice(action.Index, 1)
    return newState
  }
  if (action.type === GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.listItem = action.data
    return newState
  }

  return state
}

export default reducer
