const express = require('express');
const {connectMongoDB} = require("./connections")
const UserRouter = require("./routes/user");
const app = express();
const PORT = 8000;

connectMongoDB("mongodb://127.0.0.1:27017/users").then(() =>
     console.log("MongoDB Connected"));

app.use(express.urlencoded({express:false}))

app.use("/users",UserRouter);

app.listen(PORT, () => console.log("server started"));