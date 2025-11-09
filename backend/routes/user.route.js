const express=require("express");
const { register, login, logout,checkAuth } = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router=express.Router();

router.post("/register",register);
router.post("/login",login)
router.post("/logout",logout)
router.get("/check",authMiddleware,checkAuth)

module.exports=router;