const winston = require('winston');
require('winston-loki');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Loki({
      host: '192.168.59.100', // Replace with your Loki server URL
      port: 32514, // Replace with your Loki server port
      labels: { app: 'node-app' }, // Optional labels for your logs
    }),
  ],
});

// Example log statements
logger.info('This is an information message.');
logger.error('This is an error message.');
