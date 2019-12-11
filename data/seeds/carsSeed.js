exports.seed = knex => {
  return knex('cars')
    .truncate()
    .then(() => {
      return knex('cars').insert([
        {
          id: 1,
          vin: '2345454567',
          make: 'Ford',
          model: 'F150',
          mileage: '65000',
          transmission: 'auto',
          titleStatus: 'clean'
        },
        {
          id: 2,
          vin: '2345567898',
          make: 'Chevrolet',
          model: 'Colorado',
          mileage: '100200',
          transmission: 'auto',
          titleStatus: 'clean'
        },
        {
          id: 3,
          vin: '7890567857',
          make: 'Dodge',
          model: 'Ram',
          mileage: '150000'
        },
        {
          id: 4,
          vin: '4567789045',
          make: 'Mitsubishi',
          model: 'Spyder',
          mileage: '250000',
          transmission: 'manual'
        },
        {
          id: 5,
          vin: '7890345665',
          make: 'Toyota',
          model: 'Tundra',
          mileage: '135000',
          transmission: 'auto',
          titleStatus: 'salvage'
        },
        {
          id: 6,
          vin: '3456678978',
          make: 'Chevrolet',
          model: 'Cheyenne',
          mileage: '60000',
          transmission: 'manual',
          titleStatus: 'clean'
        },
        {
          id: 7,
          vin: '6789567887',
          make: 'Dodge',
          model: 'Dakota',
          mileage: '75000',
          transmission: 'manual',
          titleStatus: 'clean'
        },
        {
          id: 8,
          vin: '5678456734',
          make: 'Honda',
          model: 'Civic',
          mileage: '280000',
          titleStatus: 'clean'
        },
        {
          id: 9,
          vin: '2346546756',
          make: 'Renault',
          model: 'Renault',
          mileage: '40000',
          transmission: 'manual',
          titleStatus: 'salvage'
        },
        {
          id: 10,
          vin: '3456787634',
          make: 'Chevrolet',
          model: 'Silverado',
          mileage: '125000',
          transmission: 'auto',
          titleStatus: 'clean'
        }
      ]);
    });
};
