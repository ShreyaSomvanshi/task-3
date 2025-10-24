const express = require('express');
const router = express.Router();
const {GetAllUsers,GetUserByID,UpdateUserByID,DeleteUser,NewUser} = require("../controllers/user")

router.get("/",GetAllUsers);

router
    .route("/:id")
    .get(GetUserByID)
    .put(UpdateUserByID)
    .delete(DeleteUser)

router.post("/signup",NewUser)

module.exports = router;