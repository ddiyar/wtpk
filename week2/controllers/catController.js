'use strict';
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  console.log('get all the cats from controllers', req.query);
  if(req.query.sort == 'age') {
    const catsSort = cats.slice().sort((catA, catB) => catA.age - catB.age); // 1 line = can do without {
    res.json(catsSort);
    return; // force exit method
  }
  res.json(cats);
};

const cat_get_by_id = (req, res) => {
  console.log('get one cat by id', req.params);
  res.json(cats.find(cat => cat.id == req.params.id));
};

module.exports = {
  cat_list_get,
  cat_get_by_id,
};
// catController
