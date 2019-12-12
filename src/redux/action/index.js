import { SET_USER, REMOVE_USER, LOADING_TRUE, LOADING_FALSE } from '../actiontype'

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}
export const removeUser = () => {
    return {
        type: REMOVE_USER,
    }
}
export const loadingTrue = () => {
    return {
        type: LOADING_TRUE,
    }
}
export const loadingFalse = () => {
    return {
        type: LOADING_FALSE,
    }
}
