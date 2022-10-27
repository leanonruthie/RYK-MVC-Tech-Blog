// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project and Previous Assignments
// Lesson Learned in Office Hours: (1) Never forget event.preventDefault(); (2) console.logging is the quickest/most useful way to catch errors; (3) multiple Comment titles and inputs are allowed so using classes for them is appropriate (4) I'm not looking for comment.id but story.id and that story.id  established as story_id below is directly linked to data-id in handlebars for convenience
// Lesson Learned in Tutoring: (1) Multiple buttons for comments demand .forEach 

const newCommentHandler = async (event) => {
  event.preventDefault();

  if (event.target.hasAttribute('data-id')) {
    // console.log("event:", event);
    // console.log("event.target:", event.target);
    const name = event.target.querySelector(".comment-title").value.trim();
    const description = event.target.querySelector(".comment").value.trim();

    const story_id = event.target.getAttribute('data-id');
    // console.log("name", name, "description", description, "story_id", story_id);

    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
        story_id
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to share your comment!');
    }
  }
};

document.querySelectorAll('.comment-form').forEach(commentForm => {
    commentForm.addEventListener('submit', newCommentHandler)
  })

