const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user:"projectUser",
    password :"",
    database:"myschema"
})

app.get("/",(req,res) =>{
    
    const sql = "SELECT * FROM myschema.books";
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error" + err);
        return res.json(data);

    })

})
app.put('/update/', (req, res) => {
    
    const sql = "UPDATE books SET `TITLE` = ?, `AUTHOR` = ?, `LINK` = ? WHERE `CODE` = ?";
    const values = [
        req.body.TITLE,
        req.body.AUTHOR,
        req.body.LINK,
        req.body.CODE
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.json("Error" + err);
        return res.json(data);
    });
});
app.delete('/delete/', (req, res) => {
  const sql = "DELETE FROM `books` WHERE (`CODE` = ?)";
  const Code = req.body.CODE;  
  console.log(Code);

  db.query(sql, [Code], (err, data) => {
    if (err) return res.json("Error" + err);
    return res.json(data);
  });
});





app.listen(8081,() =>{
    console.log("listening ");


})