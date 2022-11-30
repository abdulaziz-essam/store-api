import bcrybt from 'bcrypt'
import client from '../database/database';
const saltRounds:number=Number(process.env.SALT_ROUND)

export default class User {
     id:number =0

      firstName:string=''
      lastName:string=""
     password:string=''

User(){

}

create=async(id:number,firstName:string,lastName:string,password:string)=>{
try {



        // Store hash in your password DB.
  
const pass:any=await this.generatePassword(password)
await client.query("INSERT INTO users(id,firstName, lastName, password)VALUES ('"+id+"','"+firstName+"','"+lastName+"','"+ pass+"');")
   


}    catch (error) {
    console.log(error)
    }

    }

     generatePassword = async (password:any) => {
        return await new Promise((res, rej) => {
         // Your hash logic 
         bcrybt.hash(password, 10, (err:any, hash:any) => {
           if (err) rej(err);
           res(hash);
          });
        });
       };
// getHasing_pass=(password:string)=>{
// const hash= bcrybt.hash(password,saltRounds)
// return hash   
// }

    //index
     index =async()=>{

     const query= await client.query("select * from users;")  
return query
    }
        
     show =async(name:any)=>{
      const query= await client.query("select * from users where firstname='"+name+"';")  

      return query
    }

}
//create 






