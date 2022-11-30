import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import  Jwt  from 'jsonwebtoken'
import product from './routes/products'
import users from './routes/users'
import orders from './routes/orders'
const app: express.Application = express()
const address: string = "0.0.0.0:3000"
const jwtToken: any = process.env.JWT;
app.use(bodyParser.json())
app.use('/products', product)
app.use('/users', users)
app.use('/orders', orders)
app.use((req, res, next) => {
    let token =req.body.token
    Jwt.verify(token, jwtToken);
    next()
  
  })

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
export default app