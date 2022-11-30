"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database/database"));
class Orders {
    constructor() {
        this.id = 0;
        this.status = "";
        this.user_id = 0;
        this.create = (id, user_id, status, product_id, quantity) => __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query("INSERT INTO  orders(id,user_id, status)VALUES ('" + id + "','" + user_id + "','" + status + "');", (err, res) => {
                    console.log(err);
                });
                return query;
            }
            catch (error) {
                console.log(error);
            }
        });
        // order product table
        this.order_product = (order_id, product_id, quantity) => __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query("INSERT INTO  order_products(order_id,product_id, quantity)VALUES ('" + order_id + "','" + product_id + "','" + quantity + "');", (err, res) => {
                    console.log(err);
                });
                return query;
            }
            catch (error) {
                console.log(error);
            }
        });
        //index
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query("select * from orders;");
                return query;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.show = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query("select * from orders where id='" + id + "';");
                return query;
            }
            catch (error) {
                console.log(error);
            }
        });
        this.currentOrder = (user_id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const query = yield database_1.default.query("SELECT orders.id, orders.status, orders.user_id,order_products.quantity ,order_products.product_id FROM orders INNER JOIN order_products ON orders.id = order_products.order_id  WHERE orders.status= 'active' and orders.id=" + user_id + ";");
                return query;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = Orders;
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
