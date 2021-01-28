import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk-fsa';
import appModules from '../modules';

/**
 * Create redux store and apply middlewares
 * @return {object} returns the store with all middleware applied
 */
const initialize = () => {
  let middleware = null;

  // Enable thunks middleare and redux dev tools extension only on development mode
  if (process.env.NODE_ENV === 'development') {
    middleware = applyMiddleware(thunk);

    // Enable redux devtool if browser extension is installed
    // eslint-disable-next-line no-underscore-dangle
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      middleware = compose(
          middleware,
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );
    }
  } else {
    // Just apply thunk middleware
    middleware = applyMiddleware(thunk);
  }

  return createStore(appModules, {}, middleware);
};

export default initialize;
