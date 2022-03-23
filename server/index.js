const express = require("express");
const db = require('./db');
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get("/data", db.getData);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});