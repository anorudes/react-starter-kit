import express from 'express';

import mw from './middleware';
import utils from './utils';

export default (
  config,
  logger,
  ssr,
  news,
) => {
  const port = config.get('server.port');

  const app = express();

  utils.setNavigator();

  app.use(mw.serveStatics());
  app.use(mw.cookieParser());
  app.use(mw.bodyParser());

  app.use('/api/news', news);

  app.use(ssr);
  app.use(mw.errors());

  app.run = () => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`The server is running at http://localhost:${port}/`);
    });
  };

  return app;
};
