const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const { generateHash, validPassword } = require('./secure');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, (req, email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err)
        return done(err);
      if (!user)
        return done({ message: 'Incorrect details' }, false);
      if (!validPassword(password, user.password)) {
        return done({ message: 'Incorrect password or email' }, false);
      }
      return done(null, user);
    });
  },
));

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
}, (req, email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      return done({ message: 'This email is already using' }, false);
    } else {
      const user = new User({ email, password: generateHash(password) });
      user.save().then((user) => {
        return done(null, user);
      });
    }
  });
}));


module.exports = passport;
