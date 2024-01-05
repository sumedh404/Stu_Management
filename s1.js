const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json)

const con = mysql.createConnection({
      host:"localhost",
      user:"root",
      password:"abc456",
      database:"19oct22_mern_stu_mang_sys"
})

app.post("/create",(req,res)=>{
       let data = [req.body.rno,req.body.name]
       let sql = "insert into student values(?,?)";
       con.query(sql,data,(err,result)=>{
                if(err)
                     res.send(err);
                else
                     res.send(result);
       })
});

app.get("/view",(req,res)=>{
      let sql = "select * from student";
      con.query(sql,(err,result)=>{
            if(err)
                res.send(err);
            else
                res.send(result);
      })

});

app.delete("/remove",(req,res)=>{

       let data = [req.body.rno]
       let sql = "delete from student where rno=?";
       con.query(sql,data,(err,result)=>{
                if(err)
                     res.send(err);
                else
                     res.send(result);
       })
});

app.listen(9000,()=>{console.log("server ready @ 9000")});

