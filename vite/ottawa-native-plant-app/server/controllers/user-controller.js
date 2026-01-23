import { User } from '../models/index.js'
// import { createSecretToken } from '../utils/auth.js'
// import bcrypt from 'bcrypt';

// export const userSignup = async (req, res, next) => {
//   debugger;
//     try {
//         const { email, password, username, createdAt } = req.body;
        
//         // const existingUser = await User.findOne({ 
//         //   $or: [{ username }, { email }]
//         // });
//         // if(existingUser) {
//         //   if (existingUser.username === username){
//         //     return res.json({ message: "Username already exists" });
//         //   }
//         //     return res.json({ message: "Email already exists" });
//         // } 
//          const existingUser = await User.findOne({ email });
//         if(existingUser) {
//             return res.json({ message: "User already exists" });
//         } 
//         const user = await User.create({ email, password, username, createdAt });
//         const token = createSecretToken(user._id);
//         res.cookie("token", token, {
//             withCredentials: true, 
//             httpOnly: false,
//         });
//         res.status(201)
//             .json({message: "User signed up successfully", success: true, user });
//             next();
//     }catch (error) {
//         console.error(error)
//     }
// }

// export const userLogin = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if(!email || !password ){
//       return res.json({message:'All fields are required'})
//     }
//     const user = await User.findOne({ email });
//     if(!user){
//       return res.json({message:'Incorrect password or email' }) 
//     }
//     const auth = await bcrypt.compare(password,user.password)
//     if (!auth) {
//       return res.json({message:'Incorrect password or email' }) 
//     }
//     const token = createSecretToken(user._id);
//      res.cookie("token", token, {
//        withCredentials: true,
//        httpOnly: false,
//      });
//      res.status(201).json({ message: "User logged in successfully", success: true });
//      next()
//   } catch (error) {
//     console.error(error);
//   }
// }

//GET USER BY ID
export const getUserById = (req, res) => {
    console.log("I am trying to find by id")
    User.findById(req.params.id)
        .then(console.log('i am here'))
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json("This user cannot be found")
            } else {
                res.json(dbUserData)
            }
        })
        .catch(err => res.status(400).json(err))
}


export const getAllUsers = (req, res) => {
    User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })        
}
