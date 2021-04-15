'use strict';
// tehdään muuttujat, require =/ "import"
// kutsutaan express functio

const express = require('express');

// tallenetaan nimellä app

const app = express();
const port = 3000;

// ei käytetä pug tai template enginejä projektissa
app.set('views', './views');
app.set('view engine', 'pug');

// app.get avulla tämä jakaa " public " sivun

app.use(express.static('public'));

// reitti, get pyyntö = selain pyytää http protokollan avulla, get, post ,put, delete, patch etc.
// / = polku, niin ajetaan functio => " nuolifunktio"
// function sana korvataan "=>"
// get metodilla / = juuri pyyntö, renderöitään index eli index.pug
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Frank',
    age: 6,
    weight: 5,
  };
  res.json(cat);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})