module.exports = validateMiddleWare = (req, res, next) => {
    if (req.body.title == null || req.body.body == null) {
      res.statusCode = 400;
      return res.send({header: 'Invalid Request', message: 'title or body cannot be null'} );
    }
    next();
};