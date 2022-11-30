import express from "express";
import Products from "../models/Orders";
import Jwt from "jsonwebtoken";
import Orders from "../models/Orders";
const router = express.Router();
let orders = new Orders();
const jwtToken: any = process.env.JWT;
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
router.post("/create", (req: any, res: any,  next:any) => {
  let user_id = req.body.user_id;
  let id = req.body.id;
  let status = req.body.status;
  let quantity = req.body.quantity;
  let product_id = req.body.product_id;
  const token = req.body.token;

  try {
  

    let create = orders.create(id, user_id, status, product_id, quantity);
    create.then(() => orders.order_product(id, product_id, quantity));
    next()
    res.send("orders");
  } catch (error) {
    res.status(401);
    res.send("401 invalid " + error);
  
  }
});

router.get("/index", (req: any, res: any,  next:any) => {
  let index;
  console.log("index   ");
  next()
  index = orders.index();
  index.then((data:any)=>res.send(data.rows))
  
});
router.get("/show", (req: any, res: any,  next:any) => {
  let data;
  let id = req.body.id;
  const token=req.body.token
  Jwt.verify(token,jwtToken)
  console.log("show   ");
  next()
  data = orders.show(id);
  data.then((data:any) => console.log(data.rows));

});

router.get("/currentuser", (req: any, res: any,  next:any) => {
  let data;
  let id = req.body.id;
  const token=req.body.token
  console.log("show   ");
  next()
  data = orders.currentOrder(id);
  data.then((data:any) => console.log(data.rows));

});

router.post("/addproduct", (req: any, res: any,  next:any) => {
  let data;
  let order=req.body.order
  let product=req.body.product
  let quantity=req.body.quantity
  const token=req.body.token
  next()
  console.log("show   ");
  data = orders.order_product(order,product,quantity);

});
export default router;
