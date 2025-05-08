// require("./config/db");

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 10000;

// const UserRouter = require("./api/User");

// app.use(express.json()); // for parsing JSON request bodies

// app.use("/user", UserRouter); // fixed route prefix

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

require("./config/db");

const express = require("express");
const app = express();
const port = process.env.PORT || 10000;

const UserRouter = require("./api/User");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is live 🚀");
});

app.use("/user", UserRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
