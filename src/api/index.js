import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000'
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (_id, updatedPost) => API.patch(`${'/posts'}/${_id}`,updatedPost);
export const deletePost = (_id) => API.delete(`${'/posts'}/${_id}`);
export const likePost   = (_id) => API.patch(`${'/posts'}/${_id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);




