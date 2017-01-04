import {applyMiddleware} from 'redux';
import logger from './logger.middleware';
import errorHandler from './error.middleware';

const middlewares = applyMiddleware(logger, errorHandler);

export default middlewares;
