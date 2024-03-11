const userController = require("../controller/user.controller");
const { Router } = require("express");

const userRouter = Router();

userRouter.post("/create", userController.createUser);
userRouter.delete("/delete", userController.deleteUser);

module.exports = userRouter;
