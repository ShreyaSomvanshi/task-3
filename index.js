// const http = require('http');
const express = require('express');
const fs = require("fs")
const users = require("./mock_data.json")
const app = express();
const PORT = 8000;

app.use(express.urlencoded({express:false}))

app.get("/",(req,res) => {
    return res.send("hello from home");
});

app.get("/users",(req,res) => {
    return res.json(users);
});

app.get("/users/:id",(req,res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/users",(req,res) => {
    const body = req.body;
    users.push({...body,id:users.length+1});
    fs.writeFile("./mock_data.json" ,JSON.stringify(users), (err,data) =>{
        return res.json({status:"succes"});
    })
})
app.listen(PORT, () => console.log("server started"));
//const myServer = http.createServer(app);
//myServer.listen(8000,() => console.log("server started"));