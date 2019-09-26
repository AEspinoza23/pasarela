import { createStore, applyMiddleware } from 'redux'
import homeReducer from '../reducers/home'
import { composeWithDevTools } from 'redux-devtools-extension'
import apiSaga from '../sagas/api-sagas'
import createSagaMiddleware from 'redux-saga'

const initialiseSagaMiddleware = createSagaMiddleware()

const store = createStore(
  homeReducer,
  composeWithDevTools(applyMiddleware(initialiseSagaMiddleware))
)

initialiseSagaMiddleware.run(apiSaga)

const vuelo = store.getState()
console.log(vuelo)

export default store