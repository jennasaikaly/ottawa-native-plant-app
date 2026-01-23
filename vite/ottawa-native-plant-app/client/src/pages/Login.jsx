// import { Form, redirect } from "react-router-dom";
// import { Post } from '../../../server/models/index.js'
// import { User } from '../../../server/models/index.js'
// // import { createSecretToken } from '../../../server/utils/auth.js'
// import { createSecretToken } from '../../../server/utils/auth.js'
// import bcrypt from 'bcrypt';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    function handleChange(e) {
        e.preventDefault();
        console.log(e.target.value)
        setEmail(e.target.value)
        setPassword(e.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // debugger;

        try {
            const formData = {
                email: email,
                password: password
            }
            // const response = await fetch('http://localhost:3000/api/users/login',{
            const response = await fetch('http://localhost:3000/api/auth/login',{    
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                body: JSON.stringify(formData)
            });
            if (!response.ok){
                //Handle HTTP errprs
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json();
            if (result && result.message === "Incorrect password or email"){
            alert('Incorrect password or email');
            }else {
                console.log('Success', result);
                alert('Login successful');
                setEmail('');
                setPassword('');
                navigate('/dashboard')
            }
        }
        catch(error){
            console.error('Error:', error);
            alert('Login failed')
        }        
    }
    return (    
    <div>
        <h1> This is the Login page</h1>
        
        <div>           
                <form onSubmit={handleSubmit} className="login-form">
                    <div>
                        <label htmlFor="email-login">email:</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} id="email-login" />
                    </div>
                    <div>
                        <label htmlFor="password-login">password:</label>
                        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} id="password-login" />
                    </div>
                                        <div>
                        <button onSubmit={handleSubmit} onChange={handleChange} type="submit">Login</button>
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