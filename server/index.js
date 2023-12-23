import express from "express";
import mysql from "mysql2";
//import bodyparser from "body-parser";
import cors from "cors";

const app=express();

app.use(cors());
app.use(express.json());
// app.use(bodyparser.urlencoded({extended: true}));
const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    port:3306,
    password: "mysql@2023",
    database: "test",

})

app.get("/api/get",(req,res)=>{
    const sqlselect="SELECT * FROM emptable";
    db.query(sqlselect,(err,result)=>{
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
       res.send(result);
    });
}   
)

app.delete("/api/delete/:name",(req,res)=>{
    const name=req.params.name;
    const sqldelete="DELETE FROM emptable where name=?";
    db.query(sqldelete,name,(err,result)=>{
        if(err) console.log(err);
    });
})

app.post("/api/insert",(req,res)=>{ 
    const name=req.body.name;
    const dob=req.body.dob;
    const age=req.body.age;
    const department=req.body.department;
    const address=req.body.address;
    const empid=req.body.empid;
    const salary=req.body.salary;
    const designation=req.body.designation;
    
   const sqlinsert=
    "insert into emptable (name,dob,age,department,address,empid,salary,designation) values(?,?,?,?,?,?,?,?)";
    db.query(sqlinsert,[name,dob,age,department,address,empid,salary,designation],(err,result)=>{
        if (err) {
            res.status(500).json({ error: err.message });
            return;
            console.log("Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
        }
        console.log(result);
        res.status(200).send("Data inserted successfully");
    });
})


app.listen(5000,()=>{
    console.log("app is running");
});
