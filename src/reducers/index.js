import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication-reducer';
import IdeaPadFormReducer from './ideapad-form-reducer';
import IdeaReducer from './idea-reducer';

export default combineReducers({
  auth: AuthenticationReducer,
  ideaPadForm: IdeaPadFormReducer,
  ideas: IdeaReducer
})
