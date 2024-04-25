const express = require("express");
const User = require("../Models/User")
const db = require("../Connection/conn");
const Helper = require("../Helper/Helper");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findAll({
      where: {
        email: email,
        password: password
      },
    }); 
    // console.log(Helper.encryptPassword(user[0].dataValues.password), "encrypted password");
    // return false
    if (
      Helper.decryptPassword(user[0].dataValues.req.body.password) === req.body.password
    ) {
      let token = jwt.sign(
        { id: user[0].dataValues.id },
        process.env.SECRET_KEY,
        {
          expiresIn: "50m",
        }
      );
   console.log("token--",token)
      await User.update(
        { token: token },
        {
          where: {
            id: user[0].dataValues.id,
          },
        }
      );
      Helper.response(
        "Success",
        "Authentication Success",
        {
          id: user[0].dataValues.id,
          username: user[0].dataValues.name,
          token: token,
          user_type: user[0].dataValues.user_type,
        },
        res,
        200
      );
    }
    else {
      Helper.response(
        "Failed",
        "Username or Password Wrong!",
        {},
        res,
        200
      );
    }
  } catch (error) {
    console.log(error);
   }
  };

  exports.registerUser=async(req,res)=>{
    try {
      const { fname, Mname, lname, mobile, email, user_name, password, conPass, gender, dob, hobbies, state, district, city, status } = req.body;
      // Extract file paths from the uploaded files
      const profileImagePath = req.files['profileImg'][0].path;
      const documentPath = req.files['docImg'][0].path;
 const newUser = await User.create({
          fname,
          Mname,
          lname,
          mobile,
          email,
          user_name,
          password,
          conPass,
          gender,
          dob,
          hobbies,
          state,
          district,
          city,
          status,
          profileImage: profileImagePath,
          document: documentPath
      });

      if (newUser) {
        Helper.response("Success", "Record Created Successfully", {}, res, 200);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  exports.GetUsers=async(req,res)=>{
    try {
      const users = await User.findAll();
      if (users) {
        Helper.response("Success", "Record Created Successfully", {}, res, 200);
      }
    } catch (error) {
      console.log("Failed to Fetch Records.")
    }
  };
