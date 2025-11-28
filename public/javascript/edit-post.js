async function editPostClickHandler(event) {
  // debugger;
  event.preventDefault();
  const title = document.querySelector('input[name="edit-post-title"]').value;
  // const post_url = document.querySelector('input[name="edit-post-url"]').value;
  // const post_text = document.querySelector('textarea[name="edit-post-body"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    title,
    // post_url,
    // post_text,
    id,    
  }),
  headers: {
    'Content-Type': 'application/json'
  }
});

if (response.ok) {
  alert("Your post has been updated!")
  document.location.replace('/dashboard')
  // document.location.reload();
  // document.location.replace(`/post/${id}`);
} else {
  alert(response.statusText);
}
}

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

}

document.querySelector('.edit-post-btn').addEventListener('click',editPostClickHandler);
document.querySelector('.delete-post-btn').addEventListener('click',deletePostClickHandler);