import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import drawReducers from './draw'
import userReducers from './user'

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2,
}
const user = persistReducer(persistConfig, userReducers)
const draw = persistReducer(persistConfig, drawReducers)
export default combineReducers({
  user,
  draw,
})
