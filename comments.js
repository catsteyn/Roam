document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list'); // Element to display comments

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting via HTTP

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const commentText = document.getElementById('comment').value;

        // Create a new comment element
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';

        // Create HTML for the comment
        commentElement.innerHTML = `
            <p><strong>${name}</strong> (${email}) says:</p>
            <p>${commentText}</p>
        `;

        // Append the comment element to the comments list
        commentsList.appendChild(commentElement);

        // Clear the form
        commentForm.reset();
    });
});
