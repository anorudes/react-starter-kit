import PrettyError from 'pretty-error';

const pe = new PrettyError();

pe.skipNodeFiles();
pe.skipPackage('express');

// eslint-disable-next-line no-unused-vars
export default () => (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(pe.render(err));

  const template = require('../views/error.jade');
  const statusCode = err.status || 500;
  res.status(statusCode);
  res.send(template({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  }));
};
