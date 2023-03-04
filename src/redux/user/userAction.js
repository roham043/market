import { userActionType } from './userType';
export const setCurrentUser = user => ({
    type: userActionType.SET_CURRENT_USER,
    payload: user
})

export const deleteCurrentUser = user => ({
    type: userActionType.DELETE_CURRENY_USER,
    payload: user
})