import { combineReducers } from 'redux';
import balance from './balance';
import bitcoin from './bitcoin';

export default combineReducers({ balance, bitcoin });