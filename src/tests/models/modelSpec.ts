// import myFunc from '../index';
import app from '../../app'
import supertest from 'supertest'
import bodyParser from 'body-parser';
import User from '../../models/User';
import Products from '../../models/Products';
import Orders from '../../models/Orders';
import client from '../../database/database';
import bcrybt from 'bcrypt'
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
// users model testing
describe('post /users',():void =>{
    it('new usrws has usersssssss', async () => {
      let user=new User()
       let  firstName="yasseb"
      let lastName="ahmad"
  let password="rwe3"
        let id=3525434
        let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjY0ODAzMzl9.Iul58enrAk7xaIuwhgA1E0-NBHkgv7THRfkG0sATqx8"
  
      
   
         
  //  const query=await client.query("INSERT INTO users(id,firstName, lastName, password)VALUES ('"+user.id+"','"+user.firstName+"','"+user.lastName+"','"+ hash_pass+"');")
  let data=user.create(id,firstName,lastName,password)
  data.then(res=>expect(res).toContain(User))
  
  
    });
  });
  
// show users
  describe('GET /users/create',() :void=>{
         const user =new User()
    it("should have a create method", async () => {
 
      let data=user.show(1)
      data.then(res=>expect(res).toContain(User))
    })
   
  });
  //index 
  describe('GET /users/index',() :void=>{
  it("user index",  () => {
let user =new User()

    // const query= await client.query("select * from users;")  
let data=user.index()
data.then(res=>  expect(res).toContain(User))
  
})
  
  });
  describe('GET /users/show 34',() :void=>{
   
  it("should have a create method",() => {
    let name ="azoz"
    let user=new User()
    // const query= await client.query("select * from users where firstname='"+name+"';")  
         let data= user.show(name)
         data.then(res=> expect(res.rows[0].id).toBe(34))
 
  })
  
  });
  


// products model testing


  describe('POST create products',() :void=>{
         const product =new Products()
    it("should have a create method", () => {
      let data=product.create(1,'yassen',59)
      data.then(res=>expect(res).toContain(Products))
  
    })
   
  });
  describe('GET /products',() :void=>{
    const product =new Products()
  it("product show", async() => {
  
    let data= product.show(1)
    data.then(res=> expect(res.rows[0].id).toContain(Products))
  })
  
  });
  describe('GET /products',() :void=>{
    const product =new Products()
  it("product index method",async () => {
    let data=product.index()
    data.then(res=>  expect(res).toContain(Products))

  })
  
  });
  
  describe("products Model", ():void => {
  it('new product has create',async()=>{
  const product: Products =new Products()
  let name ="Hans"
  let price =100
  let id =7557675
  product.create(id,name,price)
  
  
  const show=product.show(name)
  
  
  expect(show.then(res=>res.rows)).toBeDefined
  })
  })



// orders model testing


describe("orders Model", () => {
    it('new order has create',()=>{
    const oreders: Orders =new Orders()
  
    
    const show=oreders.currentOrder(oreders.id)
    
    let data=oreders.index()
    data.then(res=>  expect(res).toContain(Orders))

    })
    })
  
    describe('GET /current orders by users',() =>{
      it('new orders has orders',()=> {
        let order=new Orders()
       let id=1
       let data=order.index()
       data.then(res=>  expect(res).toContain(Orders))
  
    
      });
    });

    describe("orders Model", () => {
      it('order products model testing',()=>{
      const oreders: Orders =new Orders()
    
      
      const addOrder=oreders.order_product(1,12,20)
      
      
      expect(addOrder.then(res=>res)).toBeDefined
      })
      })