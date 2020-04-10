import { createStore } from 'redux';

import reducer from './modulos/reducer';

const store = createStore(reducer);

export default store;
