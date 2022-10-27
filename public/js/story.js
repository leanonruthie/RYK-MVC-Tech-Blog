// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
// Don't forget update functionality for each storyById

// Lesson learned from Tutoring / Office Hours - it's always best to use classes for repetitive forms/inputs/buttons without glitches; the only reason the form handlers in this particular instance work smoothly because the respective data-id is assigned to the delete and update buttons



const updateButtonHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        // console.log("event:", event);
        console.log("event.target:", event.target);
        const name = document.querySelector("#update-title").value.trim();
        const description = document.querySelector("#update-story").value.trim();
        const id = event.target.getAttribute('data-id');
        console.log("id", id, "name", name, "description", description);
        const response = await fetch(`/api/stories/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(`/story/${id}`);
        } else {
            alert('Failed to update your old story!');
        }
    }
};

document
    .querySelector('#final-update-form')
    .addEventListener('click', updateButtonHandler);