const express =require('express');
const User =require ('./_user');
const Product =require ('./_product');

const api = express();

api.use('/user', User);
api.use('/product', Product);
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

module.exports= api;