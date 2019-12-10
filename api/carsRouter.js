const express = require('express');

const router = express.Router();

const CarsDb = require('./carsDb');

router.use(express.json());

router.get('/', (req, res) => {
  CarsDb.get()
    .then(cars => {
      if (cars.length) {
        res.status(200).json(cars);
      } else {
        res.status(404).json({ message: 'No cars found.' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Error while getting cars.' });
    });
});

module.exports = router;
