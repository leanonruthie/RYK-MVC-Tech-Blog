// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project and Previous Assignments
// Lesson Learned in Office Hours and Tutoring: (1) Never forget event.preventDefault(); (2) console.logging is the quickest/most useful way to catch errors; (3) fetching from proper locations and replacing them in proper locations are silly repeated mistakes that can be prevented

const updButtonHandler = async (event) => {
    event.preventDefault();
    console.log("event:", event);
      console.log("event.target:", event.target);
    if (event.target.hasAttribute('data-id')) {
      const name = event.target.querySelector("#update-title").value.trim();
      const description = event.target.querySelector("#update-story").value.trim();
      const id = event.target.getAttribute('data-id');
      console.log("id", id, "name", name, "description", description);
      const response = await fetch(`/api/stories/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          name,
          description
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        console.log("update working now!")
        // document.location.replace(`/story/${id}`);
      } else {
        alert('Failed to update your story!');
      }
    }
  };
  
  document.querySelector('#final-update-form')
  .addEventListener('submit', updButtonHandler)