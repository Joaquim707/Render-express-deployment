const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
});

router.post("/signin", (req, res) => {});

module.exports = router;
