"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_1 = require("../database/product");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
router.get('/create', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const token = req.body.token;
    try {
        jsonwebtoken_1.default.verify(token, "ahmmadewfpofeoo");
        (0, product_1.create)(id, name, price);
    }
    catch (error) {
        res.status(401);
        res.send("401 invalid " + error);
    }
});
///////////////////////////////
//index router 
router.get('/index', (req, res) => {
    let data;
    console.log("index   ");
    data = (0, product_1.index)();
    data.then((data) => res.send(data.rows));
});
router.get('/show', (req, res) => {
    let data;
    let name = req.body.name;
    console.log("show   ");
    data = (0, product_1.show)(name);
    data.then((data) => res.send(data.rows));
});
exports.default = router;
