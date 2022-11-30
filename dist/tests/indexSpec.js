"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import myFunc from '../index';
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const body_parser_1 = __importDefault(require("body-parser"));
const request = (0, supertest_1.default)(app_1.default);
app_1.default.use(body_parser_1.default.json());
app_1.default.use(body_parser_1.default.urlencoded({ extended: true }));
// uaers create testing 
// products testing
//oreders testing
