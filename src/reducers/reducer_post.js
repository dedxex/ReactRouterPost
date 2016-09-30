import {FETCH_POSTS,FETCH_NEW_POST,showComment} from '../actions/index';
const INITIAL_STATE = { all: [] , post:null, comment:null};
export default function (state=INITIAL_STATE,action) {
  switch(action.type) {
    case 'FETCH_NEW_POST':
    return { ...state, post : action.payload.data };
    case 'FETCH_POSTS':
    return { ...state, all: action.payload.data };
    case 'showComment' :
    console.log("the comments are",action.payload.data);
    return { ...state, comment : action.payload.data };
    default:
    return state;
  }
}
