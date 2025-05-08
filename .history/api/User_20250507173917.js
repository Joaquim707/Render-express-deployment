const express = require("express");
const router = express.Router();

router.post("/signup", (req, res) => {
    let {name, email, password, dateOfBirth} = req.body;
    name = name.trim();
    email = email.trim();
    password = password.trim();
    dateOfBirth =dateOfBirth.trim();

    if(name == "" || email == "" || password == "" || dateOfBirth == ""){
        res.json({status: "Failed", message: "Empty input fields!"});
    } else if(!/^[a-zA-Z\s]+$/.test(name)){
        res.json({status: "Failed",
            message: "Invalid Name Entered",
        })
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        res.json({status: "Failed",
            message: "Invalid Email Entered",
        })
    } else if(!new Date(dateOfBirth).getTime()){
        res.json({status: "Failed",
            message: "Invalid Date Of Birth Entered",
        })
    } else if(password.length < 8){
        res.json({status: "Failed",
            status: "Failed",
            message: "Minimum 8 characters",
        })
    } else {
        console.log(err);
        res.json({
            status: "Failed",
            message: "An Error Occurred While Checking For Existing User",
        })
    }
});


if (!name || !email || !password || !dateOfBirth) {
    res.json({ status: "Failed", message: "Empty input fields!" });
} else if (!/^[a-zA-Z\s]+$/.test(name)) {
    res.json({ status: "Failed", message: "Invalid Name Entered" });
} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.json({ status: "Failed", message: "Invalid Email Entered" });
} else if (isNaN(new Date(dateOfBirth).getTime())) {
    res.json({ status: "Failed", message: "Invalid Date Of Birth Entered" });
} else if (password.length < 8) {
    res.json({ status: "Failed", message: "Minimum 8 characters required for password" });
} else {
    console.log(err);
        res.json({
            status: "Failed",
            message: "An Error Occurred While Checking For Existing User",
        })
}

router.post("/signin", (req, res) => {});

module.exports = router;
