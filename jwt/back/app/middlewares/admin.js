const adminMiddleware = (req, res, next) => {
  if (req.user.admin != true) {
    return res.status(403).send("Désolé vous devez être admin");
  }
  next();
};

module.exports = adminMiddleware;