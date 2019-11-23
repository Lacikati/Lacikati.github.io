
$('#kuld').on('click', (event) => {
    event.preventDefault()
    let title = $('#title').val();
    let content = $('#content').val();
    
    database.ref("blog").push({title,content});
    addPostToList({title,content})
})
database.ref("blog").once('value').then(data => {
    let posts = Object.values(data.val());

    // Minden egyes todot megjelenít
    posts.forEach((post) => {
     addPostToList(post)
      
    });


})
function addPostToList(post) {
    let html =  ` <div class="post">
    <h2>${post.title}</h2>
    <p>${post.content}
    
    </p>
</div>`
        

    $('div.posts').append(html);
}