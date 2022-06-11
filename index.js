const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  expressSession = require('express-session'),
  createPostController = require('./controllers/createPost'),
  getPostController = require('./controllers/getPost'),
  updatePostController = require('./controllers/updatePost'),
  userSignUpController = require('./controllers/userSignUp'),
  userSignInController = require('./controllers/userSignIn'),
  userSignOutController = require('./controllers/userSignOut'),
  validationMiddleware = require("./middleware/postValidation"),
  authMiddleware = require('./middleware/auth'),
  redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticated'),
  app = express();

let port = process.env.PORT;

if (port == null || port == '') {
  port = 3000;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/posts',validationMiddleware);
app.use(expressSession({
  secret: 'keyboard cat'
}))

mongoose.connect('mongodb+srv://username:password08%40Mongodb@cluster0.ffmpao3.mongodb.net/my_database', {useNewUrlParser: true});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.get('/', (req, res) => {
  console.log('hi');
  res.send(req.session);
});
app.get('/post', authMiddleware, getPostController);
app.get('/post/:id', authMiddleware, getPostController);
app.post('/posts', authMiddleware, createPostController);
app.post('/sign-up', redirectIfAuthenticatedMiddleware, userSignUpController);
app.get('/sign-in', redirectIfAuthenticatedMiddleware, userSignInController);
app.get('/sign-out', userSignOutController);

app.use((req, res) => {
  res.statusCode = 404;
  res.send({'message': 'Page not found'});
});
