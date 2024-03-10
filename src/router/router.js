const userRouter = require("./user.router");
const { Router } = require("express");

const router = Router();

router.use("/user", userRouter);

module.exports = router;
