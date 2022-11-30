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
const request = (0, supertest_1.default)(app_1.default);
app_1.default.use(body_parser_1.default.json());
app_1.default.use(body_parser_1.default.urlencoded({ extended: true }));
// users endpoints testing
describe('GET /create users end points testing', () => {
    it('new users', () => __awaiter(void 0, void 0, void 0, function* () {
        let body = {
            lastname: "yasseb",
            firstName: 100,
            id: 876,
            password: 'aaa123',
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8"
        };
        const res = yield request.post('/products/create').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(200);
    }));
});
//show
describe('GET /show users end points testing', () => {
    it('get products', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request.get('/users/show').send({ id: 1 }).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(200);
    }));
});
//index
describe('GET /index products end points testing', () => {
    it('new users', () => __awaiter(void 0, void 0, void 0, function* () {
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8";
        const res = yield request.get('/users/index').send({ token: token });
        expect(200);
    }));
});
// products endpoints testing
describe('GET /create products end points testing', () => {
    it('new products has products', () => __awaiter(void 0, void 0, void 0, function* () {
        let body = {
            name: "yasseb",
            price: 100,
            id: 8176,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8"
        };
        const res = yield request.post('/products/create').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(200);
    }));
});
//show
describe('GET /show products end points testing', () => {
    it('get products', () => {
        request.get('/products/show').set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(200);
    });
});
//index
describe('GET /index products end points testing', () => {
    it('new products has products', () => __awaiter(void 0, void 0, void 0, function* () {
        let body = {
            name: "yasseb",
            price: 100,
            id: 876,
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8"
        };
        const res = yield request.get('/products/index').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(200);
    }));
});
// orders endpoints testing
describe('GET /orders  end points testing', () => {
    it('users', () => {
        let body = {
            id: 876
        };
        request.get('/orders/currentuser').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(200);
    });
});
describe('GET /orders  end points testing', () => {
    it('add product orders ', () => {
        let body = {
            order: 876,
            product: 21,
            quantity: 30
        };
        request.post('/orders/addproduct').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json');
        expect(200);
    });
});
