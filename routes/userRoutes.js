const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/signup", userController.signupPage);
router.post("/signup", userController.signupUser);

router.get("/signin", userController.signinPage);
router.post("/signin", userController.signinUser);
router.get("/logout", userController.logout);

module.exports = router;