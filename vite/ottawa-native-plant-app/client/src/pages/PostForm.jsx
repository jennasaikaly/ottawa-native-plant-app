import react, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function PostForm(){
    const { user } = useAuth();
    const [newPostTitle, setNewPostTitle] = useState('')
    const [newPostText, setNewPostText] = useState('')
    const [newPostUrl, setNewPostUrl] = useState('')
    const [ posts, setPosts ] = useState([]);
    const [ error, setError ] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    function handleChange(e) {
        e.preventDefault();
        setNewPostTitle(e.target.value);
        setNewPostText(e.target.value);
        setNewPostUrl(e.target.value);        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // debugger;

        if (!user || !user.accessToken) {
            setLoading(false);
            return;
        }
    
        try {
            const postFormData = {
                post_title: newPostTitle,
                post_text: newPostText,
                post_url: newPostUrl,                
            }
            
            const response = await fetch('http://localhost:3000/api/dashboard/posts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.accessToken}`,
                },
                body: JSON.stringify(postFormData)
            });
            if (!response.ok){
                //Handle HTTP errors
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const result = await response.json();
            console.log(result.message)
            if (result && result.message === 'AuthController: no user'){
            alert('AuthController: no user');
            } else if (result && result.message === 'AuthController: cannot authenticate'){
            alert('AuthController: cannot authenticate');
            }else {
                console.log('the result is:', result)
                console.log('Success', result);
                alert('Post created');
                setNewPostText('');
                setNewPostTitle('');
                setNewPostUrl('')
                navigate('/dashboard')
            }
        }
            catch(error){
            console.error('Error:', error);
            alert('Post creation failed')
        }        
        }
    return (
        <div>  <h1>Create a new Post!</h1> 

            <form onSubmit={handleSubmit} className="new-post-form">
                <div>
                    <label htmlFor="new-post-title">Title</label>
                    <input required type="text" id="new-post-title" onChange={(e) => setNewPostTitle(e.target.value)} value={newPostTitle} />
                </div>
                <div>
                    <label htmlFor="new-post-url">Link</label>
                    <input required id="new-post-url" onChange={(e) => setNewPostUrl(e.target.value)} value={newPostUrl} />
                </div>
                <div>
                    <label htmlFor="new-post-body">Post:</label>
                    <textarea required id="new-post-body" onChange={(e) => setNewPostText(e.target.value)} value={newPostText}></textarea>
                </div>
                <button type="submit" className="btn" onChange={handleChange} onSubmit={handleSubmit}>Create</button>
            </form>
        </div>
    )
}