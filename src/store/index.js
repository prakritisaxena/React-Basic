import {createStore} from 'redux';
import rootReducer from '../reducers';
import middlewares from '../utils/logger';

const store = createStore(rootReducer, middlewares);

export default store;
