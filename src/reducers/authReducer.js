import { types } from "../types/actionTypes";

const authReducer = (state = {authData: null}, action) => {
    switch (action.type) {
        case types.AUTH:
            // console.log(action?.data);
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return { ...state, authData: action?.data};
        case types.LOGOUT:
            localStorage.clear();
            return { ...state, authData: null};
        default:
            return state;
    }
};

export default authReducer;