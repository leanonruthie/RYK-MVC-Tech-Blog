// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
 // don't forget to add comment functionality!!!

 const commentFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#comment-title').value.trim();
  const description = document.querySelector('#comment').value.trim();
  const id = event.target.getAttribute('data-id');

  if (name && description) {
    const response = await fetch(`/api/comments/${id}`, {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to share your comment!');
    }
  }
};


  document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);