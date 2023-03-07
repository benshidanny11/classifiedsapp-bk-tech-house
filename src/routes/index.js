import 'regenerator-runtime';
import express from 'express';
import User from './_user';
import Pharmacy from './_pharmacy';

const api = express();

api.use('/user', User);
api.use('/pharmacy', Pharmacy);
api.get('/', (req, res) => {
  res.status(200).send({
    status: 200,
    message: 'Welcome to primary mis',
  });
});
api.use('/', (req, res) => {
  res.status(404).send({
    status: 404,
    message: 'Page not found',
  });
});

export default api;