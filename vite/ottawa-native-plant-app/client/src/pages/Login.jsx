// import { Form, redirect } from "react-router-dom";
// import { Post } from '../../../server/models/index.js'
// import { User } from '../../../server/models/index.js'
// // import { createSecretToken } from '../../../server/utils/auth.js'
// import { createSecretToken } from '../../../server/utils/auth.js'
// import bcrypt from 'bcrypt';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'

export default function Login(){
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth()// Access the login function from context
    const navigate = useNavigate(); 
   
    function handleChange(e) {
        e.preventDefault();
        // console.log(e.target.value)
        setEmail(e.target.value)
        setPassword(e.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        //  debugger;
        try {
            const formData = {
                email: email,
                password: password
            } 
            // debugger;
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
            //new code
            if (result && result.message === 'Login successful'){
                // console.log(result.message);
                login(result) //Update the user context with the logged-in user's info
                setEmail('');
                setPassword('');
                navigate('/dashboard')
            } else {
                alert(result.message)
            }
            //old code
            // if (result && result.message === 'AuthController: no user'){
            // alert('AuthController: no user');
            // } else if (result && result.message === 'AuthController: cannot authenticate'){
            // alert('AuthController: cannot authenticate');
            // }else {
            //     // console.log('the login result is:', result)
               
            // }
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
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password-login" autoComplete="off" />
                </div>
                <div>
                    <button onSubmit={handleSubmit} onChange={handleChange} type="submit">Login</button>
                </div>                   
            </form>            
        </div>
    </div>              
    )
}