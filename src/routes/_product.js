const express = require("express");
const { verifyToken } = require("../middlewares/user");
const Validator = require("../middlewares/validator");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post(
  "/createnew",
  Validator("product"),
  verifyToken,
  ProductController.createProduct
);
router.put(
  "/update/:id",
  Validator("product"),
  verifyToken,
  ProductController.updateProduct
);
router.get("/getall", ProductController.findAll);
router.get("/getuserproducts", verifyToken, ProductController.getUserProducts);
router.delete(
  "/deleteuserproduct/:id",
  verifyToken,
  ProductController.deleteProduct
);
router.get("/getone/:id", ProductController.getOne);
module.exports = router;
