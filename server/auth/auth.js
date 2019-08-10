const { mustAuthenticated } = require('./secure');

module.exports = function(app, passport) {

  app.post('/api/login', (req, res, next) => {
    return passport.authenticate('local-login', { session: false }, (err, passportUser) => {
      if (err) {
        return res.status(400).send(err);
      }
      if (passportUser) {
        req.logIn(passportUser, () => res.json({}));
      }
    })(req, res, next);
  });

  app.post('/api/registration', (req, res, next) => {

    return passport.authenticate('local-signup', { session: false }, (err, passportUser) => {
      if (err) {
        return res.status(409).send(err);
      }
      if (passportUser) {
        res.send({});
      }
    })(req, res, next);
  });

  app.get('/api/user', mustAuthenticated, (req, res) => {
    res.json(req.user);
  });

  app.get('/api/logout', mustAuthenticated, (req, res) => {
    req.logOut();
    res.send({});
  });
};
