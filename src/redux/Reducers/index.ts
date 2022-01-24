import { MainReducer, Theme } from './MainReducers';

import { combineReducers } from 'redux';

const Reducers = combineReducers({ MainReducer });

declare module 'react-redux' {
  interface DefaultRootState {
    MainReducer: Theme;
  }
}

export default Reducers;
