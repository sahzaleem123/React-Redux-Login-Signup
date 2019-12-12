import { LOADING_TRUE, LOADING_FALSE } from '../actiontype'

const loadingReducer = (state = true, action) => {
    switch (action.type) {
        case LOADING_TRUE:
            return state = true;
        case LOADING_FALSE:
            return state = false;
        default:
            return state;
    }
}
export default loadingReducer