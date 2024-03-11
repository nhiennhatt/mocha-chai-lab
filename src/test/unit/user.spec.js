const mongoose = require("mongoose");
const UserService = require("../../service/user.service");
const { userModel } = require("../../model/user.model");
const userService = new UserService();

before((done) => {
  mongoose.connect("mongodb://root:123456@127.0.0.1:27017")
    .then(() => {
      return userModel.deleteMany({
        username: { $in: ["21415", "444222"] }
      });
    })
    .then(() => {
      done();
    });
});

describe("Test user service", () => {
  describe("#createUser", () => {
    it("Case 1: Normal", (done) => {
      userService.createUser({
        username: "21415",
        password: "1234567"
      }).then(function(data) {
        try {
          expect(data).to.be.an.instanceOf(mongoose.Model);
          expect(data._id).to.be.an.instanceOf(mongoose.Types.ObjectId, "result._id must be an Mongoose.ObjectId");
          done();
        } catch (error) {
          done(error);
        }
      }).catch((err) => {
        done(err);
      });
    });

    it("Case 2: Already existing user", (done) => {
      userService.createUser({
        username: "21415",
        password: "1234567"
      }).catch((err) => {
        try {
          expect(err).to.be.an.instanceOf(Error);
          expect(err.code).to.eq(11000);
          done();
        } catch (chaiErr) {
          done(chaiErr);
        }
      });
    });
  });

  describe("#deleteUser", () => {
    it("Case 1: Normal", (done) => {
      userService.deleteUser("21415")
        .then((result) => {
          try {
            expect(result).to.be.a("object");
            expect(result.deletedCount).to.eq(1);
            done();
          } catch (e) {
            done(e);
          }
        });
    });

    it("Case 2: Not existing user", (done) => {
      userService.deleteUser("444222")
        .then((result) => {
          try {
            expect(result.deletedCount).to.eq(0);
            done();
          } catch (e) {
            done(e);
          }
        });
    });
  });
});

after(() => {
  userModel.deleteOne({
    username: "21415"
  }).then(() => {
    return mongoose.disconnect();
  });
});
