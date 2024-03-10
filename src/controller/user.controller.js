const UserService = require("../service/user.service");
const userService = new UserService();

module.exports.createUser =  function (req, res) {
  const userInform = req.body;
  userService.createUser(userInform)
    .catch((error) => {
      if (error)
        res.status(500).json({
          message: "Fail"
        })
    })
    .then((data) => {
      if (data)
        res.status(201).json({
          message: "Success"
        })
    })
}
