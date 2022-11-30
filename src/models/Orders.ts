import client from "../database/database";

export default class Orders {
  id: number = 0;
  status: string = "";

  user_id: number = 0;

  create = async (
    id: any,
    user_id: any,
    status: any,
    product_id: any,
    quantity: any
  ) => {
    try {
      const query = await client.query(
        "INSERT INTO  orders(id,user_id, status)VALUES ('" +id +  "','" +user_id +"','" + status + "');",
        (err, res) => {
          console.log(err);
        }
      );

      return query;
    } catch (error) {
      console.log(error);
    }
  };

  // order product table
  order_product = async (order_id: any, product_id: any, quantity: any) => {
    try {
      const query = await client.query(   "INSERT INTO  order_products(order_id,product_id, quantity)VALUES ('" +order_id +  "','" +product_id +"','" +quantity +  "');",
        (err, res) => {
          console.log(err);
        }
      );

      return query;
    } catch (error) {
      console.log(error);
    }
  };

  //index
  index = async () => {
    try{
    const query = await client.query("select * from orders;");
    return query;
    }catch(error){console.log(error)}
  };

  show = async (id: any) => {
    try{
    const query = await client.query(  "select * from orders where id='" + id + "';");
    return query;
    }catch(error){console.log(error)}
  };

  currentOrder = async (user_id: number) => {
    try {
      const query = await client.query(
        "SELECT orders.id, orders.status, orders.user_id,order_products.quantity ,order_products.product_id FROM orders INNER JOIN order_products ON orders.id = order_products.order_id  WHERE orders.status= 'active' and orders.id=" +user_id + ";"
      );

      return query;
    } catch (error) {
      console.log(error);
    }
  };
}
// select * from orders where user_id=43 and status='active';

// - Current Order by user (args: user id)[token required]

// insert into orders(id,quantity,status,user_id,product_id) values (1,33,complete,43,43)
// insert into orders(id,quantity,status,user_id,product_id) values (1,33,active,43,43)

// #### Orders
// - id
// - id of each product in the order
// - quantity of each product in the order
// - user_id
// - status of order (active or complete)
