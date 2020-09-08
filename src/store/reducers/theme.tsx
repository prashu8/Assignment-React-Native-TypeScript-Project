import { UPDATE_THEME } from '../action/theme';
import THEME from '../../model/theme';


const initialState = {

    theme: THEME
};

const themeReducers = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_THEME:
            return {
                ...state,
                theme: action.payload,
            };

        default:
            return state;
    }
};

export default themeReducers;
