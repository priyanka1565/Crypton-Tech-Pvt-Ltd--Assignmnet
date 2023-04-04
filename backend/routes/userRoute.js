const express = require("express");
const { addUser, getUser, updateUser,delete_User ,get_single_User} = require("../controllers/userControllers");
const router = express.Router();


router.post("/add-user/", addUser);
router.get("/get-user", getUser);
router.patch("/update-user/:id",updateUser );
router.delete("/user-delete/:id",delete_User)
router.get("/get-single/:id",get_single_User)

// file system route 


module.exports = router;