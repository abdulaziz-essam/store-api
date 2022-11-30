"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Orders_1 = __importDefault(require("../models/Orders"));
const router = express_1.default.Router();
let orders = new Orders_1.default();
const jwtToken = process.env.JWT;
// router.get('/checkorder', (req:any, res:any) =>{
//    const user_id=req.body.user_id
//     const token =req.body.token
//     let data
//      try {
//         Jwt.verify(token,jwtToken)
//         data=orders.currentOrder(user_id)
//     data.then((data:any)=>res.send(data.rows))
//     } catch (error) {
//         res.status(401)
//      res.send("401 invalid " +error)
//      }
//     })
//      export default router
//create order route
router.post("/create", (req, res, next) => {
    let user_id = req.body.user_id;
    let id = req.body.id;
    let status = req.body.status;
    let quantity = req.body.quantity;
    let product_id = req.body.product_id;
    const token = req.body.token;
    try {
        let create = orders.create(id, user_id, status, product_id, quantity);
        create.then(() => orders.order_product(id, product_id, quantity));
        next();
        res.send("orders");
    }
    catch (error) {
        res.status(401);
        res.send("401 invalid " + error);
    }
});
router.get("/index", (req, res, next) => {
    let index;
    console.log("index   ");
    next();
    index = orders.index();
    index.then((data) => res.send(data.rows));
});
router.get("/show", (req, res, next) => {
    let data;
    let id = req.body.id;
    const token = req.body.token;
    jsonwebtoken_1.default.verify(token, jwtToken);
    console.log("show   ");
    next();
    data = orders.show(id);
    data.then((data) => console.log(data.rows));
});
router.get("/currentuser", (req, res, next) => {
    let data;
    let id = req.body.id;
    const token = req.body.token;
    console.log("show   ");
    next();
    data = orders.currentOrder(id);
    data.then((data) => console.log(data.rows));
});
router.post("/addproduct", (req, res, next) => {
    let data;
    let order = req.body.order;
    let product = req.body.product;
    let quantity = req.body.quantity;
    const token = req.body.token;
    next();
    console.log("show   ");
    data = orders.order_product(order, product, quantity);
});
exports.default = router;
