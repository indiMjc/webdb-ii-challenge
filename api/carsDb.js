const db = require('../data/dbConfig');

module.exports = {
  get,
  insert,
  update,
  remove
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

function update(id, changes) {
  return db('cars')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('cars')
    .where({ id })
    .del();
}
