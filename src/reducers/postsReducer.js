import { types } from "../types/actionTypes";

const reducer = (posts = [], action) => {
    switch (action.type) {
        case types.FETCH:
            return action.payload;
        case types.CREATE:
            return [...posts, action.payload];
        case types.UPDATE:
            return posts.map((post)=>(post._id === action.payload._id) ? action.payload : post);
        case types.LIKE:
            return posts.map((post)=>(post._id === action.payload._id) ? action.payload : post);
        case types.DELETE:
            return posts.filter((post)=>(post._id !== action.payload));
        default:
            return posts;
    }
}

export default reducer;