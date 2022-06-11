const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    try {
      console.log(req.body);
      let blogpost = await BlogPost.create({
        ...req.body,
        userId: req.session.userId
      });
      res.send(blogpost);
    }
    catch (error) {
      res.send(err);
    }
};