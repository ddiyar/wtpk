'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => { // async query because it can be long-lasting
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    console.log('something back from db?', rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getAllCatsSort = async (order) => {
try {
  // TODO: do the LEFT (or INNER) JOIN to get owner name too.
  const [rows] = await promisePool.query(`SELECT * FROM wop_cat ORDER BY ${order}`);
  return rows;
} catch (e) {
  console.error('error', e.message);
  }
};

const insertCat = async (cat) => {
  const [row] = await promisePool.execute('INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES(?, ?, ?, \'1\, \'foo.jpg\')', [cat.name, cat.age, cat.weight]);
  console.log('insert row', row);
  return row.insertId;
};

module.exports = {
  getAllCats,
  getAllCatsSort,
  insertCat,
};
