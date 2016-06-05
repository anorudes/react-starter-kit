import { Router } from 'express';

import ReactDOM from 'react-dom/server';
import { match } from 'universal-router';

import configureStore from 'client/store/configureStore';
import { runtime } from 'client/store/modules';
import routes from 'client/routes';

import assets from './assets';


export default (congig, logger) => {
  // const log = logger.child({ component: 'ssr' });

  const router = new Router();

  router.get('*', async (req, res, next) => {
    try {
      let css = [];
      let statusCode = 200;
      const template = require('./views/index.jade');
      const data = { title: '', description: '', css: '', body: '', entry: assets.main.js };

      const store = configureStore({});

      store.dispatch(runtime.setRuntimeVariable({
        name: 'initialNow',
        value: Date.now(),
      }));

      await match(routes, {
        path: req.path,
        query: req.query,
        context: {
          store,
          insertCss: styles => css.push(styles._getCss()),
          setTitle: value => (data.title = value),
          setMeta: (key, value) => (data[key] = value),
        },
        render(component, status = 200) {
          css = [];
          statusCode = status;
          data.state = JSON.stringify(store.getState());
          data.body = ReactDOM.renderToString(component);
          data.css = css.join('');
          return true;
        },
      });

      res.status(statusCode);
      res.send(template(data));
    } catch (err) {
      next(err);
    }
  });

  return router;
};
