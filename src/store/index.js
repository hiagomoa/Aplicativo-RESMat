import { createStore } from 'redux';

import combineReducer from './modules/rootReducer';

const store = createStore(combineReducer);

export default store;
