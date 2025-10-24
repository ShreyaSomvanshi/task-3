const User = require("../models/user.model")
async function GetAllUsers(req,res) {
    const allDBusers = await User.find({});
    return res.json(allDBusers);
}

async function GetUserByID(req,res) {
    const user = await User.findById(req.params.id)
    return res.json(user);
    if(!user) return res.status(404).json({error:"user not found"});
    return res.json(user);
}

async function UpdateUserByID(req,res) {
    await User.findByIdAndUpdate(req.params.id,{last_name:"Changed"});
    res.json({message:"updated"});
}

async function DeleteUser(req,res) {
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: "your account has been deleted" });
}

async function NewUser(req,res) {
    const body = req.body;
    if(
        !body||
        !body.first_name||
        !body.last_name||
        !body.email
    ){
        return res.status(400).json({msg:"All fields are required"});
    }

    const result = await User.create({
        first_name : body.first_name,
        last_name : body.last_name,
        email : body.email
    });
    console.log("result",result);
    return res.status(201).json({msg:"success"})
}

module.exports={
    GetAllUsers,
    GetUserByID,
    UpdateUserByID,
    DeleteUser,
    NewUser
}