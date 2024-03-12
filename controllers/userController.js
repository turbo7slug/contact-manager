const asyncHander = require("express-async-handler")
const User = require('../models/user.model.js')
const bcrypt = require("bcrypt")
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHander(async (req,res)=>{

   const {username,email,password} = req.body
   if(!username||!email||!password){
    res.status(400)
    throw new Error("All fields are mandatory")
   }

   const userAvailable =await User.findOne({email})

   if(userAvailable){
    res.status(400)
    throw new Error("User already exists")
   }

   //hash password
   const hashedPassword = await bcrypt.hash(password,10)

   const user = User.create({
    username,
    email,
    password:hashedPassword,
   })

   console.log(`user created ${user}`)

   if(user){
    res.status(201).json({_id:user._id,email:user.email})
   }
   else{
    res.status(400)
    throw new Error("user data not valid")

}
    res.json({message:"register user"})
})

//@desc login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHander(async (req,res)=>{

    res.json({message:"login user"})
})


//@desc get a current user
//@route POST /api/users/current
//@access private
const currentUser = asyncHander(async (req,res)=>{

    res.json({message:"current user"})
})



module.exports  = {registerUser,loginUser,currentUser}