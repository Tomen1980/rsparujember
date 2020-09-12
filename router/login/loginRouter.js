const express = require("express");
const router = express.Router();
const loginController = require("../../controller/login/loginController")
const auth = require("../../middleware/auth")

router.get("/login",loginController.getLogin)
router.get("/reg",loginController.getRegister)
router.post("/login",loginController.postLogin)
router.post("/reg",loginController.postReg)
router.post("/logout",auth,loginController.postLogout)

module.exports = router;