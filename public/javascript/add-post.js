async function newFormHandler(event) {
  event.preventDefault();
debugger;
  const title = document.querySelector('input[name="new-post-title"]').value;
  const post_url = document.querySelector('input[name="new-post-url"]').value;
  const post_text = document.querySelector('textarea[name="new-post-body"]').value.trim();
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