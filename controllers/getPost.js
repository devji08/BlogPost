const BlogPost = require('../models/BlogPost'),
  
  getAllPost = async () => {
      let blogposts = await BlogPost.find({}).populate('userId');
      
      return blogposts;
  },

  getPostById = async (id) => {
      let blogposts = await BlogPost.findById(id).populate('userId');
      
      return blogposts;
  }

module.exports = async (req, res) => {
    let blogpost;

    try {
        if (req.params.id) {
            blogpost = await getPostById(req.params.id);
        }
        else {
            blogpost = await getAllPost();
        }
    
        res.send(blogpost);
    }
    catch (error) {
        res.send(error);
    }
};