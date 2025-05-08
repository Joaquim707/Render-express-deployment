// const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res) => {
    let { name, email, password, dateOfBirth } = req.body;

    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth = dateOfBirth.trim();

    if (!name || !email || !password || !dateOfBirth) {
        return res.json({ status: "Failed", message: "Empty input fields!" });
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        return res.json({ status: "Failed", message: "Invalid Name Entered" });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.json({ status: "Failed", message: "Invalid Email Entered" });
    } else if (!new Date(dateOfBirth).getTime()) {
        return res.json({ status: "Failed", message: "Invalid Date Of Birth Entered" });
    } else if (password.length < 8) {
        return res.json({ status: "Failed", message: "Minimum 8 characters required" });
    } else {
        // Check if user already exists
        User.find({ email })
            .then(result => {
                if (result.length) {
                    return res.json({
                        status: "Failed",
                        message: "User with the provided email already exists",
                    });
                } else {
                    // Create new user
                    const saltRounds = 10;
                    bcrypt.hash(password, saltRounds)
                        .then(hashedPassword => {
                            const newUser = new User({
                                name,
                                email,
                                password: hashedPassword,
                                dateOfBirth,
                            });

                            newUser.save()
                                .then(result => {
                                    res.json({
                                        status: "Success",
                                        message: "Signup Successful",
                                        data: result,
                                    });
                                })
                                .catch(err => {
                                    console.error(err);
                                    res.json({
                                        status: "Failed",
                                        message: "An error occurred while saving user account!",
                                    });
                                });
                        })
                        .catch(err => {
                            console.error(err);
                            res.json({
                                status: "Failed",
                                message: "An error occurred while hashing password",
                            });
                        });
                }
            })
            .catch(err => {
                console.error(err);
                res.json({
                    status: "Failed",
                    message: "An error occurred while checking for existing user",
                });
            });
    }
});

module.exports = router;
