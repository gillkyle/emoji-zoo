const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const index = require("./index");

app.listen(port, () => {
  console.log("App is running on port " + port);
  index.tweetZoo();
});
