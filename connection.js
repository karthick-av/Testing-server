const config = require("./config.json");
require('dotenv').config()

const mysql = require('mysql2');

const ENV_MODE = process.env.MODE;
const port = config[ENV_MODE]["port"];
const host = config[ENV_MODE]["host"];
const db_host = config[ENV_MODE]["db_host"];
const db_user = config[ENV_MODE]["db_user"];
const db_password = config[ENV_MODE]["db_password"];
const db_name = config[ENV_MODE]["db_name"];

const connection = mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
    database: db_name,
    port: port,
    //timezone: timezone,
    multipleStatements: true,
    waitForConnections: true,
    connectTimeout: 20000
});
connection.connect(function(err) {
if (err) {
    console.error('error connecting MYSQL : ' + err);
    return;
}
console.log('MYSQL connected as id : ' + connection.threadId);
});

module.exports = connection;