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
    database:"sys"
})

app.get("/",(req,res) =>{
    
    const sql = "SELECT b.bookID, b.title, a.auth_Name, b.linkShop,a.authorID FROM sys.Book AS b JOIN sys.AuthorBook AS ab ON b.bookID = ab.bookID JOIN sys.Author AS a ON ab.authorID = a.authorID";
    
    db.query(sql,(err,data)=>{
        if(err) return res.json("Error" + err);
        return res.json(data);

    })

})
app.put('/update/', (req, res) => {
    
    const sql = "UPDATE sys.book AS b JOIN sys.AuthorBook AS ab ON b.bookID = ab.bookID JOIN sys.Author AS a ON ab.authorID = a.authorID SET b.title = ?, a.auth_Name = ?, b.linkShop = ? WHERE b.bookID = ?";
    
    const values = [
        req.body.title,
        req.body.auth_Name,
        req.body.linkShop,
        req.body.bookID
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.json("Error" + err);
        return res.json(data);
    });
});
app.delete('/delete/', (req, res) => {
  const sql = "DELETE FROM sys.book WHERE (bookID = ?)";

  const bookID = req.body.bookID;  
  console.log(bookID);

  db.query(sql, [bookID], (err, data) => {
    if (err) return res.json("Error" + err);
    return res.json(data);
  });
});





app.listen(8081,() =>{
    console.log("listening ");


})