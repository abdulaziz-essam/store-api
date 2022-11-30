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
const bcrypt_1 = __importDefault(require("bcrypt"));
const database_1 = __importDefault(require("../database/database"));
const saltRounds = Number(process.env.SALT_ROUND);
class User {
    constructor() {
        this.id = 0;
        this.firstName = '';
        this.lastName = "";
        this.password = '';
        this.create = (id, firstName, lastName, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Store hash in your password DB.
                const pass = yield this.generatePassword(password);
                yield database_1.default.query("INSERT INTO users(id,firstName, lastName, password)VALUES ('" + id + "','" + firstName + "','" + lastName + "','" + pass + "');");
            }
            catch (error) {
                console.log(error);
            }
        });
        this.generatePassword = (password) => __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((res, rej) => {
                // Your hash logic 
                bcrypt_1.default.hash(password, 10, (err, hash) => {
                    if (err)
                        rej(err);
                    res(hash);
                });
            });
        });
        // getHasing_pass=(password:string)=>{
        // const hash= bcrybt.hash(password,saltRounds)
        // return hash   
        // }
        //index
        this.index = () => __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query("select * from users;");
            return query;
        });
        this.show = (name) => __awaiter(this, void 0, void 0, function* () {
            const query = yield database_1.default.query("select * from users where firstname='" + name + "';");
            return query;
        });
    }
    User() {
    }
}
exports.default = User;
//create 
