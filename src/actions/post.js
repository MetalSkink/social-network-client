import * as api from '../api';
import { types } from '../types/actionTypes';

export const getPosts = () => async(dispatch)=> {
    try {
        const {data} = await api.fetchPosts();
        dispatch({ type: types.FETCH, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const {data} = await api.createPost(post);
        dispatch({type: types.CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (_id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(_id,post);
        dispatch({type: types.UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (_id) => async (dispatch)=>{
    try{
        await api.deletePost(_id);
        dispatch({type: types.DELETE, payload: _id})
    }catch(error){
        console.log(error);
    }
}

export const likePost = (_id) => async(dispatch) => {
    try {
        const {data} = await api.likePost(_id);
        dispatch({type: types.LIKE, payload: data});
    } catch (error) {
        console.log(error);
    }
}