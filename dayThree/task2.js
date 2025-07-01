// post
function postPost(data){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Error in:', error));
}

postPost({
    title: 'title',
    body: 'This is a body.',
    userId: 1
});

