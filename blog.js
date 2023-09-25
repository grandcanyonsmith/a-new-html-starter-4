document.addEventListener("DOMContentLoaded", function() {
  fetch('http://your-api-endpoint')
    .then(response => response.json())
    .then(data => generateBlogPosts(data))
    .catch(error => console.error(error));
});

function generateBlogPosts(data) {
  let blogContainer = document.getElementById('blog-container');

  data.forEach(post => {
    let postElement = document.createElement('div');
    
    let titleElement = document.createElement('h2');
    titleElement.textContent = post.title;
    
    let bodyElement = document.createElement('p');
    bodyElement.textContent = post.body;
    
    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);
    
    blogContainer.appendChild(postElement);
  });
}
