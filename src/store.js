import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import reducers from './reducers/index'

// Redux stuff
const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error,
})

const store = createStore(
  reducers,
  applyMiddleware(logger),
)

export default store
