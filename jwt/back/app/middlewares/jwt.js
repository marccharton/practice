const jwt = require('express-jwt');

const jwtSecret = process.env.SECRET;

const jwtMiddleware = jwt({ 
  secret: jwtSecret, 
  algorithms: ['HS256'],
});

module.exports = jwtMiddleware;