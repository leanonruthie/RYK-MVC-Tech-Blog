// Work reference: RUT-VIRT-FSF-PT-06-2022-U-LOLC/14-MVC/01-Activities/28-Stu_Mini-Project
 // don't forget to add comment functionality!!!

 const newCommentHandler = async (event) => {
  if(event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/comment/${id}`, {
      method: 'POST',
    });
    if (response.ok) {
      document.location.replace(`/comment/${id}`);
    } else {
      alert('Failed to share your comment!');
    }
  }
};

document
  .querySelector('#comment-form')
  .addEventListener('click', newCommentHandler);
