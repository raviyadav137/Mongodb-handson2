const express=require('express');
const bodyparser=require('body-parser');
const employeeRouter=require('./routes/employee')
const app=express();

app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("home page");
})
app.use(employeeRouter);
app.listen(5000,()=>{
    console.log("server started on port 5000")
})