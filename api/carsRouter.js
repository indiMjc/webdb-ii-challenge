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

router.post('/', validateCarData, (req, res) => {
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

// prettier-ignore
function validateCarData(req, res, next) {
    const { vin, make, model, mileage } = req.body;
    (!vin || !make || !model || !mileage) && res.status(400).json({ message: 'Please provide VIN number, make, model and mileage for car to post.' });
    next();
}

function validateCarId(req, res, next) {
  const { id } = req.params;
  CarsDb.get(id).then(car => {
    !car && res.status(404).json({ message: 'Car not found.' });
    next();
  });
}

module.exports = router;
