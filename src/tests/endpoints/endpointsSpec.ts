// import myFunc from '../index';
import app from '../../app'
import supertest from 'supertest'
import bodyParser from 'body-parser';
import User from '../../models/User';
import Products from '../../models/Products';
import Orders from '../../models/Orders';
import { create } from 'domain';
import Jwt  from 'jsonwebtoken';
const jwtToken: any = process.env.JWT;
const request = supertest(app);
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next) => {
  let token =req.body.token
  Jwt.verify(token, jwtToken);
  next()

})

// users endpoints testing


describe('GET /create users end points testing',() :void=>{
  it('new users',async (): Promise<void> => {
    let body={
      lastname:"yasseb",
firstName:100,
      id:876,
      password:'aaa123',
      token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8"

    }
   const res:supertest.Response= await request.post('/products/create').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json')
expect(200)

  });
});

//show
describe('GET /show users end points testing',() :void=>{
  it('get products',async (): Promise<void> => {

   const res:supertest.Response= await request.get('/users/show').send({id:1}).set('Content-Type', 'application/json').set('Accept', 'application/json')
expect(200)

  });
});

//index
describe('GET /index products end points testing',() :void=>{
  it('new users',async (): Promise<void> => {
 let token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8"
   const res:supertest.Response= await request.get('/users/index').send({token:token})
expect(200)

  });
});






// products endpoints testing

describe('GET /create products end points testing',() :void=>{
    it('new products has products',async (): Promise<void> => {
      let body={
        name:"yasseb",
  price:100,
        id:8176,
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8"
  
      }
     const res:supertest.Response= await request.post('/products/create').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json')
  expect(200)
  
    });
  });
  
//show
  describe('GET /show products end points testing',() :void=>{
    it('get products', () => {

    request.get('/products/show').set('Content-Type', 'application/json').set('Accept', 'application/json')
  expect(200)
  
    });
  });
  
  //index
  describe('GET /index products end points testing',() :void=>{
    it('new products has products',async (): Promise<void> => {
      let body={
        name:"yasseb",
  price:100,
        id:876,
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8"
  
      }
     const res:supertest.Response= await request.get('/products/index').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json')
  expect(200)
  
    });
  });
  


// orders endpoints testing
  
  describe('GET /orders  end points testing',() :void=>{
    it('users', ()=> {
      let body={

        id:876
   
      }
 request.get('/orders/currentuser').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json')
  expect(200)
  
    });
  });

  describe('GET /orders  end points testing',() :void=>{
    it('add product orders ', ()=> {
      let body={

        order:876
,product :21
,   quantity:30
      }
 request.post('/orders/addproduct').send(body).set('Content-Type', 'application/json').set('Accept', 'application/json')
  expect(200)
  
    });
  });