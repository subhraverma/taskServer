const express = require("express");
const { login, registerUser, GetUsers } = require("../Controller/Login");
const router = express.Router();
const img_upload=require('../multer/fileUpload');


router.post("/login", login);
router.post("/register",img_upload.fields([
    { name: 'profileImage', maxCount: 1 },
    { name: 'document', maxCount: 4 }
]),registerUser);
router.post("/users-list", GetUsers);

module.exports = router;