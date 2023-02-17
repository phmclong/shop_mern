const express = require("express");

const mapController = require("../controllers/map.controller");
const isAuth = require("../middleware/is-auth");
const userRole = require("../middleware/user-role");
const isSuperAdmin = userRole.isSuperAdmin;

const router = express.Router();

router.get("/map", isAuth, isSuperAdmin, mapController.getMap);

module.exports = router;
