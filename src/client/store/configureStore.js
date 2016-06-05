import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [
  apiMiddleware,
  thunk,
];

let enhancer;

if (__DEV__ && process.env.BROWSER) {
  const createLogger = require('redux-logger');
  const logger = createLogger({
    collapsed: true,
  });
  middleware.push(logger);

  enhancer = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );
} else {
  enhancer = applyMiddleware(...middleware);
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (__DEV__ && module.hot) {
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer').default)
    );
  }

  return store;
}
