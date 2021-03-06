import config from './config';
import express from 'express';
import apiRouter from './api';

const server  = express();

server.get('/', (req,res) => {
  res.send('Hello Express');
});
server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log('Express listening on port ', config.port);
});
