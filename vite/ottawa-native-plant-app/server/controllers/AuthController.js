import { User } from '../models/index.js'
import {  createAccessToken } from '../utils/auth.js'
// import {  createRefreshToken } from '../utils/auth.js'
import bcrypt from 'bcrypt'

export const userRegister = async (req, res, next) => {
  debugger;
    try {
        const { email, password, username, createdAt } = req.body;
        
        // const existingUser = await User.findOne({ 
        //   $or: [{ username }, { email }]
        // });
        // if(existingUser) {
        //   if (existingUser.username === username){
        //     return res.json({ message: "Username already exists" });
        //   }
        //     return res.json({ message: "Email already exists" });
        // } 
         const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.json({ message: "User already exists" });
        } 
        const user = await User.create({ email, password, username, createdAt });
        const token = createAccessToken(user._id);
        res.cookie("token", token, {
            withCredentials: true, 
            httpOnly: false,
        });
        res.status(201)
            .json({message: "User signed up successfully", success: true, user });
            next();
    }catch (error) {
        console.error(error)
    }
}

export const userLogin = async (req, res, next) => {
  try {
    //destructuring email and password from body
    const { email, password } = req.body;

    //checking if the credentials match
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    // console.log("user is", user)
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
    //creating an access token
    // console.log("user is", user)
    const accessToken = createAccessToken(user);
    //  res.cookie("token", createRefreshToken, {
    res.cookie("token", createAccessToken, {
       withCredentials: true,
       httpOnly: true, //change to true
       sameSite: 'None', secure: true,
       maxAge: 24 * 60 * 60 * 1000
     });
     return res.json({ accessToken });
    //  res.status(201).json({ message: "User logged in successfully", success: true });
    //  next()
  } catch (error) {
        console.error(error);
        return res.status(406).json({ message: 'Invalid credentials' });
  }
}

// export const cookieRefresh = async (req, res, next) => {
//   if (req.cookies?.jwt) {

//         // Destructuring refreshToken from cookie
//         const refreshToken = req.cookies.jwt;

//         // Verifying refresh token
//         jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,
//             (err, decoded) => {
//                 if (err) {

//                     // Wrong Refesh Token
//                     return res.status(406).json({ message: 'Unauthorized' });
//                 }
//                 else {
//                     // Correct token we send a new access token
//                     const accessToken = jwt.sign({
//                         username: userCredentials.username,
//                         email: userCredentials.email
//                     }, process.env.ACCESS_TOKEN_SECRET, {
//                         expiresIn: '10m'
//                     });
//                     return res.json({ accessToken });
//                 }
//             })
//     } else {
//         return res.status(406).json({ message: 'Unauthorized' });
//     }
// }

//GET CURRENT USER WILL GO HERE
export const getCurrentUser = async (req, res) => {
try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }

}