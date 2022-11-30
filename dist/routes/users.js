"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
// var urlencodedParser = bodyParser.urlencoded({ extended: false })
// create router 
let user = new User_1.default();
const jwtToken = process.env.JWT;
router.post('/create', (req, res, next) => {
    let Id = (req.body.id);
    let firstName = req.body.firstName;
    let LastName = req.body.lastName;
    let Password = req.body.password;
    const token = req.body.token;
    try {
        user.create(Id, firstName, LastName, Password);
        next();
        res.send("hi");
    }
    catch (error) {
        res.send(error);
    }
});
///////////////////////////////
//index router 
router.get('/index', (req, res, next) => {
    let data;
    const token = req.body.token;
    try {
        console.log("index   ");
        data = user.index();
        next();
        data.then((data) => res.send(data.rows));
    }
    catch (error) {
        res.send("you cant do that because you are loser");
    }
});
router.get('/show', (req, res, next) => {
    let data;
    const name = req.body.name;
    const token = req.body.token;
    try {
        console.log("show   ");
        data = user.show(name);
        next();
        data.then((data) => res.send(data.rows));
    }
    catch (error) {
    }
});
exports.default = router;
