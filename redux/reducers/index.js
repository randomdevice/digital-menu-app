import { combineReducers } from 'redux'
import { user } from './user'
import { items } from './items'

const Reducers = combineReducers({
    userState: user,
    menuState: items
})

export default Reducers