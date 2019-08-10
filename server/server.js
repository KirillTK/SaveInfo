const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const configuration = require('../configuration/configuration');


const app = express();

mongoose.Promise = Promise;
mongoose
  .connect(configuration.DATABASE_CONNECTION, { useNewUrlParser: true })
  .then(() => console.log('Mongoose up!'))
  .catch(() => console.log('Connection failed'));


app.use(bodyParser.json());


const server = http.createServer(app);


server.listen(configuration.PORT, () => console.log('listen 8080 port'));
