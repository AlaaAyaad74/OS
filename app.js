const express=require('express');
const app=express();
app.get('/',(req,res)=>res.send('hello world'));
app.listen(3000,()=>{
    console.log("My rest Api is working in port 3000!");
})