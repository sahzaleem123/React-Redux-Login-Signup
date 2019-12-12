import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loadingReducer from './loadingReducer'

const rootReducer = combineReducers({
    User: userReducer,
    Loading: loadingReducer
})
export default rootReducer