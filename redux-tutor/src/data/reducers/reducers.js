import { combineReducers } from 'redux';
import home from './home-reducers';
import ipfsReducers from './ipfs-reducers';

export default combineReducers({
  home,
  ipfsReducers,
});