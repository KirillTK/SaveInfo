const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const configuration = require('../configuration/configuration');
const cookieSession = require('cookie-session');
const passport = require('./auth/passport');

const app = express();

mongoose.Promise = Promise;
mongoose
  .connect(configuration.DATABASE_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log('Mongoose up!'))
  .catch(() => console.log('Connection failed'));


app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  httpOnly: true,
  keys: ['randomstringhere'],
}));

app.use(passport.initialize());
app.use(passport.session());

require('./auth/auth')(app, passport);

const server = http.createServer(app);


server.listen(configuration.PORT, () => console.log(`listen ${configuration.PORT} port`));
