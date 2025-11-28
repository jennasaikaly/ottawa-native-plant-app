
async function deletePostClickHandler(event){
event.preventDefault(); 

const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      id,    
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
  alert("Your post has been deleted!")
  document.location.replace('/dashboard')
  // document.location.reload();
  // document.location.replace(`/post/${id}`);
} else {
  alert(response.statusText);
}

}document.querySelector('.delete-post-btn').addEventListener('click',deletePostClickHandler);