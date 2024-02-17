// JavaScript for navigation menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// JavaScript for handling the save for later functionality
function saveForLater(item) {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    savedItems.push(item);
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
    updateSavedItems(); // Call the function to update saved items on the Save Later page
    
    // Display alert with the number of items in the list
    const numItems = savedItems.length;
    alert(`You have ${numItems} item${numItems !== 1 ? 's' : ''} saved for later.`);
}


function updateSavedItems() {
}


// JavaScript for handling the contact form submission
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data here and handle the submission (e.g., using Fetch API or sending data to a server).
    // You can access form elements by their names, like form['undefined'] or form['text-1697480386525'].
});
