import { LOGIN_USER, SIGN_UP_USER, USER_PROFILE } from '../actions/apis';

const initialState = {
    userLogin: {},
    userSignUp: {},
    userProfile: {}
}

const apisReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userLogin: action.payload,
            };

            case SIGN_UP_USER:
                return {
                    ...state,
                    userSignUp: action.payload,
                };

                case USER_PROFILE:
                    return {
                        ...state,
                        userProfile: action.payload,
                    };
        
        default:
            return state;
    }
}

export default apisReducers;
