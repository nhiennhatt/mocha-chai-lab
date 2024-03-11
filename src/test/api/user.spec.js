const request = require("supertest");
const app = require("../../app");

describe("Test router: /user", () => {
  describe("/user/create", () => {
    it("Case 1: Normal", (done) => {
      request(app)
        .post("/user/create")
        .send({ username: "hiew5234qfen", password: "124124" })
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body.message).to.eq("Success");
          return done();
        });
    });
  });

  describe("/user/delete", () => {
    it("Case 1: Normal", (done) => {
      request(app)
        .delete("/user/delete")
        .send({ username: "hiew5234qfen" })
        .expect(204, done)
    });
  });
});
