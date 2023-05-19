import {combineReducers} from 'redux';
import contactListReducer from '@app/components/home/home.slice';
export type AppState = ReturnType<typeof appReducers>;

export const appReducers = combineReducers({
  contactList: contactListReducer,
});
