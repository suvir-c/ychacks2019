import { combineReducers } from 'redux';

import UserReducer from './user/reducer';
import FormReducer from './form/reducer';

export default combineReducers({
  user: UserReducer,
  forms: FormReducer,
});
