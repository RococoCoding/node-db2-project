
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars3').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars3').insert([
        { id: 1, 
          model: 'Toyota', 
          make: "Siena", 
          vin: 012314, 
          transmission: "Whatever", 
          mileage: 1243, 
          title: null
        },
        { id: 3, 
          model: 'BMW', 
          make: "Siena", 
          vin: 713284, 
          transmission: null, 
          mileage: 732109, 
          title: null
        },
        { id: 2, 
          model: 'rowValue1', 
          make: "adf", 
          vin: 124, 
          transmission: null, 
          mileage: 12398, 
          title: "asdf"
        },
      ]);
    });
};
