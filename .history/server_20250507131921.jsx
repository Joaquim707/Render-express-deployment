const app = require("express")();
const port = 3000;

//for accepting post form data
const bodyParser = require("express").json;

app.use(bodyParser());
