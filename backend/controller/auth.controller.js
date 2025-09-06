import User from "../model/User.model.js";
import generateToken from "../utils/generateToken.js";
import {validationResult} from "express-validator";

export async function SignUp(req, res, next){
    try{
        const {fullName, username, password, confirmPassword, gender} =  req.body;
        const user =  await User.findOne({username});
        if(user)  return res.status(400).json({success: false, message: "User Already exists"})
        const newUser = new User({
            fullName,
            username,
            password,
            confirmPassword,
            gender,
            profilePic:`https://avatar.iran.liara.run/username?username=${username}`
        });
        await newUser.save();
        await generateToken(newUser._id, res)
        
        res.status(201).json({
            success: true,
            data: {
                _id: newUser._id,
                username,
                fullName
            }

        });
    }catch (error) {
        console.error(`Error in Login Controller: ${error.message}`);
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }

}

export async function Login(req, res, next){
  try{
      const {errors} = validationResult(req)

      if(errors.length > 0) {
          return res.status(400).json({
              success: false,
              errors: errors
          })
      }

      const {username, password} = req.body;
      const user =  await User.findOne({username})
      if(!user || !(await user.correctPassword(password, user.password))) return res.status(401).json({
          success: false,
          message: "Incorrect email or password"
      })
      await generateToken(user._id, res);

      res.json({
          success: true,
          message: "User successfully loggedin"
      })

  }catch (error) {
      console.log("Error in Login Controller", error.message);
      res.status(500).json({
          success: false,
          message: "Server error"
      })
  }
}

export async function LogOut(req, res, next){
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({success: true, message: "Logged out successfully"})
    }catch (error) {
      console.log("Error in Logout Controller", error.message);
      res.status(500).json({
          success: false,
          message: "Server error"
      })
  }
}