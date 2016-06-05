import bunyan from 'bunyan';

export default (config) => {
  if (!config.has('logger.name')) {
    throw new Error('Missing `logger.name` in config');
  }

  const log = bunyan.createLogger({ name: 'lappse' });

  return log;
};
