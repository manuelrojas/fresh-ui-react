import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
})

import RootReducer from '../reducers/HolidayReducer'

const configureStore = (initialState) => {
  return createStore(
    RootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, logger)
    ))
}

export default configureStore