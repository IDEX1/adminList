import express from "express"
import bodyParser from "body-parser"
import path from 'path';    
import  Jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'
import cors from 'cors'
import cookieParser from "cookie-parser";
import connectionDb from "./db.js";

const app = express();
let userid ;
let nameuser = "";
let addresemail = "";
let passworduser = "";
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods : ["POST","GET"],
  credentials : true
}));
app.use(cookieParser());

const db = connectionDb;
const saltRounds = 10;
app.get("/userid",(req,res) =>{
  // console.log(userid)
  const sql = "SELECT userID,user_Name,gmail,passwordd FROM sys.userr WHERE userID=?";
    
    db.query(sql,[userid],(err,data)=>{
        if(err) return res.json("Error" + err);
        return res.json(data);

    })
  // return res.json(userid,nameuser,passworduser,addresemail); 
  
 });

app.post('/signup', async (req , res)=>{ //for the sign up page
  
  const sql = "INSERT INTO sys.userr (`user_Name`, `gmail`,`passwordd`) VALUES (?,?,?) ";  //rani dayer ala hsab data base ta3ak
   await bcrypt.hash(req.body.password , saltRounds , (err , hashPs)=>{
      if(err) return res.json({Error : "ERROR FOR HASHING THE PASSWORD"}) ;
   const VALUES = [
      req.body.username,
      req.body.email,
      hashPs
   ] 
   db.query(sql , VALUES ,  (err , result)=>{
    if(err) return res.json({Error: "INSERTING DATA ERROR IN SERVER"});
    else return res.json({Status : "SUCCESS"})
   })
    })
  })

  app.post('/login' , async (req , res)=>{    //this fo login
    const sql = "SELECT * FROM sys.userr WHERE gmail=? "    //rani dayer ala hsab dbb ta3ak
    db.query(sql , [req.body.email] ,(err,data)=>{
      
      
     if(err) return res.json({Error: "INSERTING DATA ERROR IN SERVER"});
     if(data.length>0) {
      
       bcrypt.compare(req.body.password.toString() , data[0].passwordd , (err , response)=>{
          if(err) 
            return res.json({Error : "ERROR COMAPARING PASSWORD"});
          // if(response){ 
            if(req.body.password.toString() == data[0].passwordd)
            {
            
            const name = data[0].user_Name;
             nameuser = data[0].user_Name;
             passworduser  = data[0].passwordd ;
             //phone  = data[0].passwordd ;
             addresemail = data[0].gmail ;
            userid = data[0].userID;
            const token = Jwt.sign({name}, "jwt.secret-key", {expiresIn : '1d'});
            res.cookie('token', token);
            return res.json({Status : "SUCCESS" , Type : data[0].typpe });}
          // else {
          //   console.log("iam here error3")
          //   return res.json({Error : "WRONG EMAIL OR PASSWORD"});}
       })}

      else return res.json({Error: "No email existing"})
    })
  })
  // app.get("/userid",(req,res) =>{
    
  //   return res.json(userid,nameuser,passworduser,addresemail); 
  //  });
   app.get("/geti",(req,res) =>{
    
    const sql = "SELECT * FROM sys.userr";
    
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error" + err);
        return res.json(data);

    })

})


app.listen(5000 ,() =>{
  console.log("server listening on 5000");
})

