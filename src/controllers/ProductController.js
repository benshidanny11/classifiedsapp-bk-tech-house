const { Product, User } = require("../db/models");
const {compare, isANumber } = require("../helpers/app");

const ProductController = {
  createProduct: async (req, res) => {
    const { body, user } = req;
    const data = {
      name: body.name,
      description: body.description,
      image: body.image,
      price: body.price,
      category: body.category,
      manufacture_date: body.manufaturedate,
      uid: user.id,
    };

    const product = await Product.create(data);
    if (!product) return res.sendStatus(500);
    return res.sendStatus(201);
  },
  findAll: async (req, res) => {
    const products = await Product.findAll({
      limit: 10,
    });
    res.json(products.sort(compare));
  },
  getUserProducts: async (req, res) => {
    const { user } = req;
    const products = await Product.findAll({
      where: { uid: user.id },
      limit: 10,
    });
    res.json(products.sort(compare));
  },
  updateProduct: async (req, res) => {
    const { id } = req.params;
    const { body, user } = req;
    if (!isANumber(id)) {
      return res.sendStatus(400);
    }
    const data = {
        name: body.name,
        description: body.description,
        image: body.image,
        price: body.price,
        category: body.category,
        manufacture_date: body.manufaturedate,
      };
      let productUser = await Product.findOne({ where: { id } });
      if(productUser && productUser.dataValues.uid!=user.id){
        return res.sendStatus(403);
      }
    const product = await Product.update(data,{ where: { id } });
    if (!product) {
      return res.sendStatus(400);
    }
    return res.sendStatus(200);
  },
  deleteProduct: async (req, res) => {
    const { id } = req.params;
    const { user } = req;
    console.log(id)
    if (!isANumber(id)) {
      console.log(typeof id)
      return res.sendStatus(400);
    }
    const product = await Product.findOne({ where: { id } });
    if (!product) {
      return res.sendStatus(400);
    }
    if (user.id !== product.uid) {
      return res.sendStatus(403);
    }
    return res.sendStatus(200);
  },
  getOne: async (req, res) => {
    const { id } = req.params;
    if (!isANumber(id)) {
      return res.sendStatus(400);
    }
    let product = await Product.findOne({ where: { id } });
    product = product?.dataValues;
    if (!product) {
      return res.sendStatus(204);
    }
    return res.json(product);
  },
};

module.exports = ProductController;
