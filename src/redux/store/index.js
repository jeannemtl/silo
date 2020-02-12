import {createStore, combineReducers} from 'redux';

import bookingsReducer from '../reducers/BookingsReducer';
const store = createStore(
  combineReducers({
    bookings: bookingsReducer,

  })
);
export default store;
