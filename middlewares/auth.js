const auth = (req, res, next) => {

    if (req.cookies.user) {
        next();
    } else {
        res.redirect("/signin");
    }

};

module.exports = auth;