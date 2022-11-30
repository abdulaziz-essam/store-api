"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const POSTGRES_HOST = '127.0.0.1';
const POSTGRES_DB = 'postgres';
const POSTGRES_USER = 'postgres';
const POSTGRES_PASSWORDS = '1420';
let client = new pg_1.Client({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORDS
});
client.connect(err => {
    if (err) {
        console.error('connection error', err.stack);
    }
    else {
        console.log('connected');
    }
});
exports.default = client;
// await client.query("CREATE TABLE user(id integer SERIAL PRIMARY KEY, firstName VARCHAR(40) NOT NULL, lastName VARCHAR(40) NOT NULL,password (30) not null"
