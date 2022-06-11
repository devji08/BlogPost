const User = require("../models/User")

module.exports = (req, res, next) => {
    try {
        if (req.session.userId) {
            res.send({"message": "User already Logged In"});
        }
        next();
    }
    catch (error) {
        res.send(error);
    }
}