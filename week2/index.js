'use strict'
const express = require('express');
const app = express();
const port = 3000;
const catRoute = require('./routes/catRoute'); // dot means current folder

app.use(express.static('week2_public_html'));
//app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true})); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/cat', catRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});