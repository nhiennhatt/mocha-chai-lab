describe("Test /user", function() {
  describe("/user/create", function() {
    it("Case 1: Normal", (done) => {
      fetch("http://localhost:3000/user/create", {
        method: "POST",
        body: JSON.stringify({
          username: "315325",
          password: "1643636233"
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => {
        return res.json()
      }).then((data) => {
        expect(data.message).to.eq("Success");
        done();
      }).catch((error) => {
        done(error)
      })
    });
  })
})
