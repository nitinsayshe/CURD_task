const express = require("express");
const { addUser,getUser,editUser,deleteUser ,getUserById} = require("../controllers/userController");
const router = express.Router();

router.post("/adduser",addUser)
router.get("/getusers",getUser)
router.get('/:id', getUserById)
router.put('/:id', editUser)
router.delete('/:id', deleteUser)



module.exports = router