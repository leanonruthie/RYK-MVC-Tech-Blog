// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
// Don't forget update functionality for each storyById

const newFormHandler = async (event) => {
  event.preventDefault();
  const name = document.querySelector('#struggle-title').value.trim();
  const description = document.querySelector('#fun-story').value.trim();
  if (name && description) {
    const response = await fetch('/api/stories', {
      method: 'POST',
      body: JSON.stringify({ name, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/struggle');
    } else {
      alert('Failed to share your story!');
    }
  }
};

document
  .querySelector('#struggle-form')
  .addEventListener('submit', newFormHandler);


  const updateFormHandler = async (event) => {
    event.preventDefault();
    if(event.target.hasAttribute('data-id')) {
      console.log("event:", event);
      console.log("event.target:", event.target);
      const name = event.target.querySelector("#update-title").value.trim();
      const description = event.target.querySelector("#update-story").value.trim();
      
      const id = event.target.getAttribute('data-id');
      console.log("id", id, "name", name, "description", description);
      
      const response = await fetch(`/api/story/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id,
          name,
          description
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace(`/stories/${id}`);
      } else {
        alert('Failed to update your old story!');
      }
    }
  };

  document
  .querySelectorAll('.final-update-form').forEach(updateBtn=>{
    updateBtn.addEventListener('submit', updateFormHandler)
  });
  
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/stories/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      document.location.replace('/struggle');
    } else {
      alert('Failed to update your old story!');
    }
  }
};

document
  .querySelector('#final-struggle-form')
  .addEventListener('click', delButtonHandler);

