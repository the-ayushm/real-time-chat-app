import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const signUp = async (req, res) => {
    try{ 
    const {fullName, username, password, confirmPassword , gender} = req.body
    if(password !== confirmPassword){
        return res.status(400).json({
            error : "Password do not match!" 
        })
    }
    const user = await User.findOne({
        username
    })
    if(user){
        return res.status(400).json({
            error: "Username already exists!"
        })
    }
    // HASH PASSWORD HERE 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
        fullName,
        username,
        password: hashedPassword,
        gender,
        profilepic: gender === "male" ?  boyProfilePic : girlProfilePic
    })
    if(newUser){
        // GENERATE JWT TOKEN HERE
        generateTokenAndSetCookie(newUser._id,res)
        await newUser.save()
        res.status(201).json({
            _id : newUser._id,
            fullName : newUser.fullName,
            username : newUser.username,
            profilepic : newUser.profilepic
        })
    }else{
        res.status(400).json({
            error: "Invalid user data!"
        })
    }
    }catch(err){
        console.error(err)
        res.status(404).json({
            error: "Something went wrong!"
        })
    }
}

export const login = async (req, res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({
            username
        })
        const isPasswordMatch = await bcrypt.compare(password,user?.password || "") 
        if(!user || !isPasswordMatch){
            return res.status(400).json({
                error: "Invalid username or password!"
            })
        }
        generateTokenAndSetCookie(user._id,res)
        res.status(200).json({
            message: "Logged in successfully!",
            _id : user._id,
            fullName : user.fullName,
            username : user.username,
            profilepic : user.profilepic
        })

    }catch(err){
        console.error(err)
        res.status(404).json({
            error: "Something went wrong!"
        })
    }
}
 
export const logout = (req, res) => {
    res.cookie("token", "" ,{maxAge: 0})
    res.status(200).json({
        message: "Logged out successfully!" 
    })
} 