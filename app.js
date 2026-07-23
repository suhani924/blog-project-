const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const dataRoutes = require("./routes/dataRoutes");

const userRoutes = require("./routes/userRoutes");

const auth = require("./middlewares/auth");

const app = express();

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/adminpanel")
.then(() => {
    console.log("Database Connected...");
})
.catch((err) => {
    console.log(err);
});

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/", dataRoutes);

app.use("/", userRoutes);
// Dashboard
app.get("/", auth, (req, res) => {
    res.render("dashboard");
});
// Signup Page
app.get("/signup", (req, res) => {
    res.render("signup");
});
// Signin Page
app.get("/signin", (req, res) => {
    res.render("signin");
});
// Store Cookie
app.get("/setcookie", (req, res) => {
    res.cookie("username", "Suhani");
    res.send("Cookie Stored Successfully");
});

// Get Cookie
app.get("/getcookie", (req, res) => {
    res.send(req.cookies);
});

// Clear Cookie
app.get("/clearcookie", (req, res) => {
    res.clearCookie("username");
    res.send("Cookie Cleared Successfully");
});

// Server
app.listen(8000, () => {
    console.log("Server Started...");
});