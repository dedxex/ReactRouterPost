import axios from 'axios';
export const FETCH_POSTS='FETCH_POSTS';
export const FETCH_NEW_POST='FETCH_NEW_POST';
export const CREATE_POST='CREATE_POST';
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "werwejldsdgjldgkdjgi";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`);
  return {
    type : FETCH_POSTS,
    payload : request
  };
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`,props);
  return {
    type : CREATE_POST,
    payload : request
  };
}

export function fetchNewPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  return {
    type : FETCH_NEW_POST,
    payload : request
  };
}
export function showComment(randomnumber) {
      const url = `https://jsonplaceholder.typicode.com/comments/${randomnumber}`;
      const request = axios.get(url);
      return {
        type : 'showComment',
        payload : request
      };
    }
  export function deletePost(id) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);
    return {
      type : 'deletepost',
      payload : request
    }; 
}

