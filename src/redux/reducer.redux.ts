import {combineReducers} from 'redux';
import contactListReducer from '@app/redux/contact/contact.slice';
import systemReducer from '@app/redux/system/system.slice';

export type AppState = ReturnType<typeof appReducers>;

export const appReducers = combineReducers({
  contactList: contactListReducer,
  system: systemReducer,
});
