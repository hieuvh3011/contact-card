import {combineReducers} from 'redux';
import contactReducer from '@app/components/home/home.slice';

export type AppState = ReturnType<typeof appReducers>;

export const appReducers = combineReducers({
  contact: contactReducer,
});
