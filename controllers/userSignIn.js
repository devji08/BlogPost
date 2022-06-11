const bcrypt = require('bcrypt'),
  User = require('../models/User');

module.exports = async (req, res) => {
    let {username, password} = req.body, user, same;

    try {
        user = await User.findOne({username});
        if (user) {
            same = await bcrypt.compare(password, user.password);
            req.session.userId = user._id;
            
            res.send({'sign-in': same});
        }
        
        res.send({"message": 'Invalid Username'});
    }
    catch (error) {
        res.send(error);
    }
};