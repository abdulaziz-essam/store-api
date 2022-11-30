import bcrybt from 'bcrypt'
import client from '../database/database';
const saltRounds=10

export default class Products {
     id:number =0

      name:string=''
      price:number=0
    

User(){

}


//create 
 create=(id:any,name:any,price:any)=>{

    const query=client.query("INSERT INTO product(id,name, price)VALUES ('"+id+"','"+name+"','"+price+"');")
return query
  
      }

    

    //index
     index =async()=>{

     const query= await client.query("select * from product;")  
return query
    }
        
     show =async(name:any)=>{
      const query= await client.query("select * from product where name='"+name+"';")  
      return query
    }


}