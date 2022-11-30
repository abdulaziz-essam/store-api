"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../database/users");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create router 
router.get('/create', (req, res) => {
    const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const password = req.body.password;
    const token = req.body.token;
    let hash_pass = '';
    console.log("passsssssssssssssss   " + firstName);
    try {
        jsonwebtoken_1.default.verify(token, "ahmmadewfpofeoo");
        (0, users_1.create)(id, firstName, lastName, password);
        console.log("hhahahahhaha" + hash_pass);
        res.send(token);
    }
    catch (error) {
        res.send(error);
    }
});
///////////////////////////////
//index router 
router.get('/index', (req, res) => {
    let data;
    const token = req.body.token;
    try {
        console.log("index   ");
        jsonwebtoken_1.default.verify(token, "ahmmadewfpofeoo");
        data = (0, users_1.index)();
        data.then((data) => res.send(data.rows));
    }
    catch (error) {
        res.send("you cant do that because you are loser");
    }
});
router.get('/show', (req, res) => {
    let data;
    const token = req.body.token;
    try {
        jsonwebtoken_1.default.verify(token, "ahmmadewfpofeoo");
        console.log("show   ");
        data = (0, users_1.show)();
        data.then((data) => res.send(data.rows));
    }
    catch (error) {
        res.send();
    }
});
exports.default = router;
