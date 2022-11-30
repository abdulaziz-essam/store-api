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
// import myFunc from '../index';
const app_1 = __importDefault(require("../../app"));
const supertest_1 = __importDefault(require("supertest"));
const body_parser_1 = __importDefault(require("body-parser"));
const User_1 = __importDefault(require("../../models/User"));
const Products_1 = __importDefault(require("../../models/Products"));
const Orders_1 = __importDefault(require("../../models/Orders"));
const request = (0, supertest_1.default)(app_1.default);
app_1.default.use(body_parser_1.default.json());
app_1.default.use(body_parser_1.default.urlencoded({ extended: true }));
// users model testing
describe('post /users', () => {
    it('new usrws has usersssssss', () => __awaiter(void 0, void 0, void 0, function* () {
        let user = new User_1.default();
        let firstName = "yasseb";
        let lastName = "ahmad";
        let password = "rwe3";
        let id = 3525434;
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8";
        //  const query=await client.query("INSERT INTO users(id,firstName, lastName, password)VALUES ('"+user.id+"','"+user.firstName+"','"+user.lastName+"','"+ hash_pass+"');")
        let data = user.create(id, firstName, lastName, password);
        data.then(res => expect(res).toContain(User_1.default));
    }));
});
// show users
describe('GET /users/create', () => {
    const user = new User_1.default();
    it("should have a create method", () => __awaiter(void 0, void 0, void 0, function* () {
        let data = user.show(1);
        data.then(res => expect(res).toContain(User_1.default));
    }));
});
//index 
describe('GET /users/index', () => {
    it("user index", () => {
        let user = new User_1.default();
        // const query= await client.query("select * from users;")  
        let data = user.index();
        data.then(res => expect(res).toContain(User_1.default));
    });
});
describe('GET /users/show 34', () => {
    it("should have a create method", () => {
        let name = "azoz";
        let user = new User_1.default();
        // const query= await client.query("select * from users where firstname='"+name+"';")  
        let data = user.show(name);
        data.then(res => expect(res.rows[0].id).toBe(34));
    });
});
// products model testing
describe('POST create products', () => {
    const product = new Products_1.default();
    it("should have a create method", () => {
        let data = product.create(1, 'yassen', 59);
        data.then(res => expect(res).toContain(Products_1.default));
    });
});
describe('GET /products', () => {
    const product = new Products_1.default();
    it("product show", () => __awaiter(void 0, void 0, void 0, function* () {
        let data = product.show(1);
        data.then(res => expect(res.rows[0].id).toContain(Products_1.default));
    }));
});
describe('GET /products', () => {
    const product = new Products_1.default();
    it("product index method", () => __awaiter(void 0, void 0, void 0, function* () {
        let data = product.index();
        data.then(res => expect(res).toContain(Products_1.default));
    }));
});
describe("products Model", () => {
    it('new product has create', () => __awaiter(void 0, void 0, void 0, function* () {
        const product = new Products_1.default();
        let name = "Hans";
        let price = 100;
        let id = 7557675;
        product.create(id, name, price);
        const show = product.show(name);
        expect(show.then(res => res.rows)).toBeDefined;
    }));
});
// orders model testing
describe("orders Model", () => {
    it('new order has create', () => {
        const oreders = new Orders_1.default();
        const show = oreders.currentOrder(oreders.id);
        let data = oreders.index();
        data.then(res => expect(res).toContain(Orders_1.default));
    });
});
describe('GET /current orders by users', () => {
    it('new orders has orders', () => {
        let order = new Orders_1.default();
        let id = 1;
        let data = order.index();
        data.then(res => expect(res).toContain(Orders_1.default));
    });
});
describe("orders Model", () => {
    it('order products model testing', () => {
        const oreders = new Orders_1.default();
        const addOrder = oreders.order_product(1, 12, 20);
        expect(addOrder.then(res => res)).toBeDefined;
    });
});
