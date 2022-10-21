// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#struggle-title').value.trim();
    const description = document.querySelector('#fun-story').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/stories`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/stories');
      } else {
        alert('Failed to share your story!');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/stories/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/stories');
      } else {
        alert('Failed to delete your old story!');
      }
    }
  };
  // don't forget to add update functionality!!!
  document
    .querySelector('#struggle-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('#final-struggle-form')
    .addEventListener('click', delButtonHandler);
  