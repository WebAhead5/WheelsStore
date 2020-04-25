const databaseConnection = require('../dbConnection');


function getAllWheels(cb) {
    databaseConnection.query('SELECT * FROM wheels;', (err, res) => {
        if (err) {
            console.log("errrrrrrrr");
        }
        else {
            cb(null, JSON.stringify(res.rows));
        }
    })
}

function getByCompany(Company ) {
    database.query(`select * from wheels  where Company = '${Company}'; `, (err, res) => {
        if (err) {
            console.log("errrrrrrrr");
        }
        else {
            cb(null, JSON.stringify(res.rows));

        }

    })


}

function getByMeasure(Measure) {
    database.query(`select * from wheels  where Measure = '${Measure}'; `, (err, res) => {
        if (err) {
            console.log("errrrrrrrr");
        }
        else {
            cb(null, JSON.stringify(res.rows));

        }

    })

}