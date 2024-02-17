// JavaScript for displaying saved items on the Save Later page
document.addEventListener('DOMContentLoaded', function () {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const savedItemsContainer = document.getElementById('saved-items'); // Get the container by id
    savedItemsContainer.innerHTML = ''; // Clear existing content

    savedItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('saved-item');

        const itemTitle = document.createElement('h2');
        itemTitle.textContent = item.title;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        itemDiv.appendChild(itemTitle);
        itemDiv.appendChild(itemDescription);

        savedItemsContainer.appendChild(itemDiv);
    });

// Clear All button event listener
const clearAllButton = document.getElementById('clear-all-button');
clearAllButton.addEventListener('click', function () {
    localStorage.removeItem('savedItems');
    savedItemsContainer.innerHTML = ''; // Clear the saved items container
    alert('All items have been cleared from your Save for Later list.');
});
});