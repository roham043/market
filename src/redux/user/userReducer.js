import { userActionType } from './userType';

const INITIAL_STATE = { currentUser: null }

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionType.DELETE_CURRENY_USER:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state;
    }
}
export default userReducer;