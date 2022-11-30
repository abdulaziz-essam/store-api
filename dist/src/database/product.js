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
exports.show = exports.index = exports.create = void 0;
const database_1 = __importDefault(require("./database"));
const saltRounds = 10;
//create 
const create = (id, name, price) => {
    database_1.default.query("INSERT INTO product(id,name, price)VALUES ('" + id + "','" + name + "','" + price + "');", (err, res) => {
        console.log(err);
    });
    console.log('hi mother fucker');
};
exports.create = create;
//index
const index = () => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.default.query("select * from product;");
    return query;
});
exports.index = index;
const show = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const query = yield database_1.default.query("select * from product where name='" + name + "';");
    return query;
});
exports.show = show;
