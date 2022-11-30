"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const path_1 = __importDefault(require("path"));
require('dotenv').config({ path: path_1.default.resolve(__dirname, '../../src/.env') });
console.log(process.env.POSTGRES_HOST);
const POSTGRES_HOST = process.env.POSTGRES_HOST;
let POSTGRES_DB = process.env.POSTGRES_DB;
const POSTGRES_USER = process.env.POSTGRES_USER;
const POSTGRES_PASSWORDS = process.env.POSTGRES_PASSWORDS;
let env = process.env.ENV;
if (env === 'test') {
    POSTGRES_DB = process.env.POSTGRES_TEST_DB;
}
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
