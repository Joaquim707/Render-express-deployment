// require("./config/db");

// const app = require("express");
// const port = 3000;

// const UserRouter = require("./api/User");

// //for accepting post form data
// const bodyParser = require("express").json;
// app.use(bodyParser());

// app.use("/user", UserRouter);

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

require("./config/db");

const express = require("express");
const app = express();
const port = 3000;

const UserRouter = require("./api/User");

app.use(express.json()); // for parsing JSON request bodies

app.use("/user", UserRouter); // fixed route prefix

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
