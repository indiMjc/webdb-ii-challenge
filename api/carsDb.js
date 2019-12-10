const db = require('../data/dbConfig');

module.exports = {
  get,
  insert
};

function get(id) {
  if (id) {
    return db
      .select('*')
      .from('cars')
      .where({ id })
      .first();
  } else {
    return db.select('*').from('cars');
  }
}

function insert(car) {
  return db('cars').insert(car, 'id');
}
