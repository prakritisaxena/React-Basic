import {createStore} from 'redux';
import rootReducer from '../reducers';
import middlewares from '../utils/middlewares';

const store = createStore(rootReducer, middlewares);

export default store;
