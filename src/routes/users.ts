import express from 'express'
import User from '../models/User'
import jwt from 'jsonwebtoken'
const router=express.Router()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create router 
let user:User=new User()
const jwtToken:any=process.env.JWT
router.post('/create', (req:any, res:any,  next:any) =>{
 
let Id=(req.body.id)
let firstName=req.body.firstName
let LastName=req.body.lastName
let Password=req.body.password
const token =req.body.token

try {
  
    user.create(Id,firstName,LastName,Password)
    next()

    res.send("hi")    

} catch (error) {

    res.send(error)
}

    }
    )
///////////////////////////////
    //index router 
    router.get('/index', (req:any, res:any,  next:any) =>{
let data
const token =req.body.token
try {
    console.log("index   ")

    data=user.index()
    next()
    data.then((data:any)=>res.send(data.rows))
 
} catch (error) {
    res.send("you cant do that because you are loser")
}
 

    
   
            }
            )
            router.get('/show', (req:any, res:any,  next:any) =>{
                let data
                const name=req.body.name
                const token =req.body.token
                try {
                   
                    console.log("show   ")
                    data=user.show(name)
                    next() 
                    data.then((data:any)=>res.send(data.rows))
                  
                } catch (error) {
              
                }     
              
                      
                
                    
                   
                            }
                            )

export default router