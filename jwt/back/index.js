const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const router = require('./app/router');

app.use(cors());
app.use(router);
app.listen(process.env.PORT);

console.log('App running on localhost:3001');