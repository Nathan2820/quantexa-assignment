const mysql = require('mysql');

/*
    mysql database connection information to connect to the mysql server
*/
const con = mysql.createConnection({
    host: "34.142.90.253", //"localhost",
    user: "root",
    password: "root",
    database: "quantexa"
});

/*
    Query to the database which retrieves all data from the table named "data"
*/
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