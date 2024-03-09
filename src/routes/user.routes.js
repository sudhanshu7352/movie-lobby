const { loginUser, createUser } = require("../controller/user.controller");

const userRoutes = require("express").Router();

userRoutes.post("/login" , loginUser);
userRoutes.post("/register",createUser);

module.exports = userRoutes;