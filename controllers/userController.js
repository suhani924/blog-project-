const User = require("../models/User");

// Signup Page
const signupPage = (req, res) => {
    res.render("signup");
};

// Signup
const signupUser = async (req, res) => {
    await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    res.redirect("/signin");
};

// Signin Page
const signinPage = (req, res) => {
    res.render("signin");
};

// Signin
const signinUser = async (req, res) => {

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (user) {

        res.cookie("user", user.email);

        res.redirect("/");

    } else {

        res.send("Invalid Email or Password");

    }

};

const logout = (req, res) => {
    res.clearCookie("user");
    res.redirect("/signin");
};
module.exports = {
    signupPage,
    signupUser,
    signinPage,
    signinUser,
    logout
};