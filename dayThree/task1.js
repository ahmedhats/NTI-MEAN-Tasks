   // get post
   function createPost(num){
        fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
        .then(response => response.json())
        .then(data => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<h2>${data.id}</h2>
                            <h3>${data.title}</h3>
                            <p>${data.body}</p>`;
          document.getElementById('cards').appendChild(card);
        })
        .catch(err => console.error(err));
    }
    function createPosts(num){
        for(let i = 1; i <= num; i++){
            createPost(i);
        }
    }
    createPosts(10);

    