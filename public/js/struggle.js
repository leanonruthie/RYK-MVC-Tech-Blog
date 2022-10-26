// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
// Don't forget update functionality for each storyById

// Lesson learned from Tutoring / Office Hours - it's always best to use classes for repetitive forms/inputs/buttons without glitches; the only the form handlers in this particular instance work smoothly because the respective data-id is assigned to the delete button 

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

