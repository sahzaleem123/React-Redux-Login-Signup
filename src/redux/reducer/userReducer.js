import { SET_USER, REMOVE_USER } from '../actiontype'

const userReducer = (state = null, action) => {
    switch (action.type) {
        case SET_USER:
            return state = action.user
        case REMOVE_USER:
            return state = null
        default:
            return state
    }
}
export default userReducer

