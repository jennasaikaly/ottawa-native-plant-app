// async function newFormHandler(event) {
//     // debugger;
//     event.preventDefault();
//     const title = document.querySelector('input[name="post-title"]')
//     // const post_text = document.querySelector('textarea[name="new-post-body"]').value.trim();
//     const post_url = document.querySelector('input[name="post-url"]')
//     // const user_id  = req.params.id
//     // const post_id = window.location.toString().split('/')[
//     //     window.location.toString().split('/').length - 1
//     //     ];
    
    
//         const response = await fetch('/api/posts', {
        
//             method: 'POST',
//             body: JSON.stringify({
//                 // post_id,
//                 // post_text,
//                 title,
//                 post_url,
//                 // user_id
//             }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (response.ok) {
//             document.location.reload();
//         } else {
//             alert(response.statusText);
//         }
//     }


// document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

async function newFormHandler(event) {
  event.preventDefault();
debugger;
  const title = document.querySelector('input[name="new-post-title"]').value;
  const post_url = document.querySelector('input[name="new-post-url"]').value;
  const post_text = document.querySelector('textarea[name="new-post-body"]').value.trim();
//   const post_text = document.querySelector('input[name="text"]')
  const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url,
        post_text
      }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);