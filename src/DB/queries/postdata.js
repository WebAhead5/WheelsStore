const databaseConnection = require('../dbConnection');

function PostWheels (Company,Mesure,Quantity,Speedcode,MODEL)
{
        databaseConnection.query(
          'INSERT INTO wheels (Company, Mesure,Quantity,Speedcode,MODEL) VALUES ($1, $2,$3,$4,$5)',
          [Company, Mesure,Quantity,Speedcode,MODEL],
          (err, res) => {
            if (err) {
              return cb(err);
            } else {
              cb(null, res);
            }
          }
        );

}