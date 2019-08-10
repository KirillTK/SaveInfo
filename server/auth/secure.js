const bcrypt = require('bcrypt');
const http = require('http');

const generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(9));

const validPassword = (userPassword, password) => bcrypt.compareSync(userPassword, password);

const mustAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send({});
  }
  next();
};

module.exports = {
  generateHash,
  validPassword,
  mustAuthenticated,
};
