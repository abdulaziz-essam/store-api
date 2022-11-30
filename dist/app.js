"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const products_1 = __importDefault(require("./routes/products"));
const users_1 = __importDefault(require("./routes/users"));
const orders_1 = __importDefault(require("./routes/orders"));
const app = (0, express_1.default)();
const address = "0.0.0.0:3000";
const jwtToken = process.env.JWT;
app.use(body_parser_1.default.json());
app.use('/products', products_1.default);
app.use('/users', users_1.default);
app.use('/orders', orders_1.default);
app.use((req, res, next) => {
    let token = req.body.token;
    jsonwebtoken_1.default.verify(token, jwtToken);
    next();
});
app.listen(3000, function () {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
