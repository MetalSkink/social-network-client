import { combineReducers } from "redux";
import posts from './postsReducer'
import authReducer from "./authReducer";


export default combineReducers({
    posts,
    authReducer
});