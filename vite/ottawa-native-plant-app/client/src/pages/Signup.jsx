import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(){
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(); //to redirect afterwards

    function handleChange(e) {
        e.preventDefault();
        console.log(e.target.value)
        setUsername(e.target.value)
        setEmail(e.target.value)
        setPassword(e.target.value)     
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        debugger;
            
        try {
            const formData = {
                username: username,
                email: email,
                password: password
            }
            const response=await fetch('http://localhost:3000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //includes other headers like authorization if needed
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                //Handle HTTP errors 
                throw new Error (`HTTP error! status: ${response.status}`)
            }

            const result = await response.json();
            console.log('Success', result);
            alert('Form submitted successfully!');
            setUsername(''); //reset fields
            setEmail('');
            setPassword('')
            navigate('/login');
            // navigate('/dashboard');
          
        } catch (error) {
            console.error('Error:', error);
            alert('Form submission failed.');
        }
    }
    
    return ( 
    <div>
        <h1> This is the signup page</h1>
        
        <div>           
             {/* <Form method="post"> */}
            {/* <Form method="post">
            {/* <Form method="post" action="/signup"> */}
            <form onSubmit={handleSubmit} className="signup-form">
                    <div>
                        <label htmlFor="username-signup">Username:</label>
                        {/* <input type="text" name="username" value={username} id="username-signup" /> */}
                        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} id="username-signup" />
                    </div>
                    <div>
                        <label htmlFor="email-signup">email:</label>
                        {/* <input type="text" name="email" value={email} id="email-signup" /> */}
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} id="email-signup" />
                    </div>
                    <div>
                        <label htmlFor="password-signup">password:</label>
                        {/* <input type="text" name="password" value={password} id="password-signup" /> */}
                        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} id="password-signup" />
                    </div>
                    <div>
                        <button onSubmit={handleSubmit} type="submit" onChange={handleChange}>signup</button>
                    </div>
                    <div> Already have an account? <Link to={"/login"}>Login</Link></div>
            </form>
        </div>   
    </div>              
    )
}

