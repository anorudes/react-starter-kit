const port = process.env.PORT || 3000;

module.exports = {
  server: {
    port,
    host: process.env.WEBSITE_HOSTNAME || `localhost:${port}`,
  },

  logger: {
    name: 'lappse',
  },
};
