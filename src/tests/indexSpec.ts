// import myFunc from '../index';
import app from '../app'
import supertest from 'supertest'
import bodyParser from 'body-parser';
import User from '../models/User';
import Products from '../models/Products';
import Orders from '../models/Orders';
import { create } from 'domain';
const request = supertest(app);
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

  // uaers create testing 

  
// products testing



//oreders testing

