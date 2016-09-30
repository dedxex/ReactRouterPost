import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostReducer from './reducer_post';
const rootReducer = combineReducers({
  post : PostReducer,
  form : formReducer
});
export default rootReducer;
