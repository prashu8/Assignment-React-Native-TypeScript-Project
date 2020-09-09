import { LOGIN_USER, USER_PROFILE } from '../actions/apis';

const initialState = {
    userLogin: {},
    profile: {}
}

const apisReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userLogin: action.payload,
            };

        case USER_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };

        default:
            return state;
    }
}

export default apisReducers;
