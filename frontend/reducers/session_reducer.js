import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.user.id }, state)
        case LOGOUT_CURRENT_USER:
            return Object.assign({}, { id: null }, state)
        default:
            return state;
    }
}

export default sessionReducer;