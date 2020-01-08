import {combineReducers} from 'redux';
import RENTHOUSELIST_REDUCER from './rentHouseList';
import HOUSEDETAIL_REDUCER from './houseDetail';

export default combineReducers({
  RENTHOUSELIST_REDUCER,
  HOUSEDETAIL_REDUCER
});
