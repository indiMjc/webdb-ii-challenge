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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  CarsDb.get(id)
    .then(car => {
      car
        ? res.status(200).json(car)
        : res.status(404).json({ message: 'Car not found.' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Error while getting car.' });
    });
});

router.post('/', (req, res) => {
  const car = req.body;
  CarsDb.insert(car)
    .then(ids => {
      return CarsDb.get(ids[0]).then(car => {
        res.status(201).json(car);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Error adding new car.' });
    });
});

module.exports = router;
