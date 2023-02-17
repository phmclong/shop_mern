const express = require("express");

const branchController = require("../controllers/branch.controller");
const isAuth = require("../middleware/is-auth");
const userRole = require("../middleware/user-role");
const isSuperAdmin = userRole.isSuperAdmin;
const isAdminOrSuperAdmin = userRole.isAdminOrSuperAdmin;

const router = express.Router();

router.get("/branches", isAuth, isAdminOrSuperAdmin, branchController.getBranches);
router.post("/branch", isAuth, isSuperAdmin, branchController.createBranch);
router.post("/branch/:branchId", )

module.exports = router;
