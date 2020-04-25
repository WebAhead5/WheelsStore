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

function getByCompany(Company, cb ) {
    console.log('hiiii')
    databaseConnection.query(`select * from wheels  where Company = '${Company}'; `, (err, res) => {
        if (err) {
        }
        else {
            cb(null, JSON.stringify(res.rows));

        }

    })


}

function getByMeasure(Measure) {
    databaseConnection.query(`select * from wheels  where Measure = '${Measure}'; `, (err, res) => {
        if (err) {
            console.log("errrrrrrrr");
        }
        else {
            cb(null, JSON.stringify(res.rows));

        }

    })

}

module.exports={getAllWheels,getByCompany,getByMeasure}