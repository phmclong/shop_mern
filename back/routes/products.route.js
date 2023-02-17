const express = require("express");
const { body } = require("express-validator");

const productController = require("../controllers/product.controller");
const isAuth = require("../middleware/is-auth");
const userRole = require("../middleware/user-role");
const isAdmin = userRole.isAdmin;
const isAdminOrSuperAdmin = userRole.isAdminOrSuperAdmin;

const router = express.Router();

router.get("/products", isAuth, productController.getProducts);

router.post(
  "/product",
  isAuth,
  isAdminOrSuperAdmin,
  productController.postProducts
);

module.exports = router;
