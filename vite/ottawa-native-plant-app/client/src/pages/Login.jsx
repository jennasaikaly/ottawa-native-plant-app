// import { Form, redirect } from "react-router-dom";
// import { Post } from '../../../server/models/index.js'
// import { User } from '../../../server/models/index.js'
// // import { createSecretToken } from '../../../server/utils/auth.js'
// import { createSecretToken } from '../../../server/utils/auth.js'
// import bcrypt from 'bcrypt';

export default function Login(){

    return (    
    <div>
        <h1> This is the Login page</h1>
        
        <div>           
             {/* <Form method="post"> */}
            {/* <Form method="post">
            {/* <Form method="post" action="/login"> */}
            <form class="login-form">
                    <div>
                        <label for="email-login">email:</label>
                        <input type="text" id="email-login" />
                    </div>
                    <div>
                        <label for="password-login">password:</label>
                        <input type="text" id="password-login" />
                    </div>
                                        <div>
                        <button type="submit">Login</button>
                    </div>                   
            </form>
            
        </div>
    </div>              
    )
}

// export const loginAction = async (req, res, next) => {
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
//      const token = createSecretToken(user._id);
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