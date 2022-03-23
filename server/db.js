const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "quantexa"
});

const getData = (request, response) => {
    con.query("SELECT * FROM data", (error, results) => {
        if(error) throw error;
        response.status(200).json(results);
        console.log("The data has been successfully queried from the database");
    });
};

module.exports = {
    getData
};