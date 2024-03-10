const mongoose = require("mongoose");
const UserService = require("../service/user.service");
const { userModel } = require("../model/user.model");

const userService = new UserService();

before(() => {
  mongoose.connect("mongodb://root:123456@127.0.0.1:27017");
});

describe("Test user service", () => {
  it("Test create user", (done) => {
    userService.createUser({
      username: "21415",
      password: "1234567"
    }).then(function (data) {
      try {
        expect(data).to.be.a("object", "data must be an object");
        expect(data).to.be.an.instanceOf(mongoose.Model);
        expect(data._id).to.be.an.instanceOf(mongoose.Types.ObjectId, "result._id must be an Mongoose.ObjectId");
        done();
      } catch (error) {
        done(error);
      }
    })
  });
})

after(() => {
  userModel.deleteOne({
    username: "21415"
  }).then(() => {
    return mongoose.disconnect();
  });
});
