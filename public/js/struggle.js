// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project and Previous Assignments
// Lesson Learned from Office Hours and Tutoring: the use of data-id properly saves a lot of time as seen in the delButtonHandlebar found in student project but it must be tweaked properly with other methods such as PUT and POST as seen in other Handlers in homepage.js and story.js

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
      alert('Failed to delete your old story!');
    }
  }
};

document
  .querySelector('#final-struggle-form')
  .addEventListener('click', delButtonHandler);

