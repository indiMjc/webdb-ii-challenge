const db = require('../data/dbConfig');

module.exports = {
  get
};

function get(carId) {
  if (carId) {
    return db
      .select('*')
      .from('cars')
      .where({ id })
      .first();
  } else {
    return db.select('*').from('cars');
  }
}
