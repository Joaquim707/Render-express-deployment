const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth =dateOfBirth.trim();

    if(name == "" || email == "" || password == "" || dateOfBirth == ""){

    }
});

router.post("/signin", (req, res) => {});

module.exports = router;
