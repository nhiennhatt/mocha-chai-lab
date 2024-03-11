const app = require("./app");

app.listen(parseInt(process.env.APP_PORT), () => {
  console.log(`Server is living at port 3000`);
})
