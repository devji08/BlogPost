const User = require('../models/User.js');

module.exports = async (req,res) => {
    try {
        let user = await User.create(req.body);

        res.send(user);
    }
    catch (error) {
        res.send(error);
    }
};