"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Products_1 = __importDefault(require("../models/Products"));
const router = express_1.default.Router();
let product = new Products_1.default();
const jwtToken = process.env.JWT;
router.post("/create", (req, res, next) => {
    let id = req.body.id;
    let name = req.body.name;
    let price = req.body.price;
    const token = req.body.token;
    try {
        product.create(id, name, price);
        next();
        res.send("product");
    }
    catch (error) {
        res.status(401);
        res.send("401 invalid " + error);
    }
});
///////////////////////////////
//index router
router.get("/index", (req, res, next) => {
    let data;
    console.log("index   ");
    next();
    data = product.index();
    data.then((data) => res.send(data.rows));
});
router.get("/show", (req, res, next) => {
    let data;
    let name = req.body.name;
    console.log("show ");
    next();
    data = product.show(name);
    data.then((data) => console.log(data.rows));
});
exports.default = router;
