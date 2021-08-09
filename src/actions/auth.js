import * as api from '../api';
import { types } from '../types/actionTypes';

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({type: types.AUTH, data})

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({type: types.AUTH, data})

        history.push('/');
    } catch (error) {
        console.log(error);
    }
}