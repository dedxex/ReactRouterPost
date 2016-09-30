import {FETCH_POSTS,FETCH_NEW_POST} from '../actions/index';
const INITIAL_STATE = { all: [] , post:null };
export default function (state=INITIAL_STATE,action) {
  switch(action.type) {
    case 'FETCH_NEW_POST':
    return { ...state, post : action.payload.data };
    case 'FETCH_POSTS':
    return { ...state, all: action.payload.data };
    default:
    return state;
  }
}
