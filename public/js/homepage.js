// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
// don't forget to add comment functionality!!!
console.log("connected")
const newCommentHandler = async (event) => {
  event.preventDefault();

console.log("CLICK EM")

  if (event.target.hasAttribute('data-id')) {
    console.log("event:", event);
    console.log("event.target:", event.target);
    const name = event.target.querySelector(".comment-title").value.trim();
    const description = event.target.querySelector(".comment").value.trim();

    const story_id = event.target.getAttribute('data-id');
    console.log("name", name, "description", description, "story_id", story_id);

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

