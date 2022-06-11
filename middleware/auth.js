const User = require("../models/User")

module.exports = async (req, res, next) => {
    try {
        let user = await User.findById(req.session.userId);
        if (!user) {
            res.send({"message": "Unauthorized Access"});
        }
        next();
    }
    catch (error) {
        res.send(error);
    }
}