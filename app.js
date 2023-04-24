// grabs express from node modules
const express = require("express");
const data = require('./data');
// init express app
const app = express();

app.get('/', (req,res)=>{
    res.send("<h1>Hello World</h1>")
})

app.get('/things', (req,res)=>{
    res.send(data)
})

app.get('/things/:id', (req,res)=>{
    res.send(data[req.params.id])
})

console.log("listening on port 3000");

app.listen(3000);


