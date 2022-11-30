import express from "express";
import Products from "../models/Products";
import Jwt from "jsonwebtoken";
import { nextTick } from "process";
const router = express.Router();
let product = new Products();
const jwtToken: any = process.env.JWT;
router.post("/create", (req: any, res: any,next:any) => {
  let id = req.body.id;
  let name = req.body.name;
  let price = req.body.price;
  const token = req.body.token;
  try {
  

    product.create(id, name, price);
    next()
    res.send("product");
  } catch (error) {
    res.status(401);
    res.send("401 invalid " + error);
  
  }
});
///////////////////////////////
//index router
router.get("/index", (req: any, res: any,  next:any) => {
  let data;
  console.log("index   ");
  next()
  data = product.index();
  data.then((data) => res.send(data.rows));

});
router.get("/show", (req: any, res: any,  next:any) => {
  let data;
  let name = req.body.name;
  console.log("show ");
  next()
  data = product.show(name);
  data.then((data) => console.log(data.rows));

});

export default router;
