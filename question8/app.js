// Define mock data
const mockupData = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
    { id: 10, title: 'Item 10' }
];

// Define variables for the list and load more button
const list = document.getElementById('list');
const loadMoreBtn = document.getElementById('load-more-btn');

// Define a function to render the list items
function renderListItems(data) {
    data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title;
        list.appendChild(li);
    });
}

// Render the initial list items
renderListItems(mockupData);

// Define a function to handle the load more button click event
function handleLoadMore() {
    // Get the last item ID in the list
    const lastItemId = mockupData[mockupData.length - 1].id;
    // Generate new mockup data for the next 5 items
    const newData = Array.from({ length: 5 }, (_, i) => ({
        id: lastItemId + i + 1,
        title: `Item ${lastItemId + i + 1}`
    }));
    // Render the new list items
    renderListItems(newData);
}

// Add a click event listener to the load more button
loadMoreBtn.addEventListener('click', handleLoadMore);

// Define variables for the pull-to-refresh feature
const app = document.getElementById('app');
let startY = 0;
let currentY = 0;
let isDragging = false;

// Add touch event listeners to the app container
app.addEventListener('touchstart', handleTouchStart);
app.addEventListener('touchmove', handleTouchMove);
app.addEventListener('touchend', handleTouchEnd);

// Define functions to handle touch events
function handleTouchStart(event) {
    // Get the starting Y position of the touch
    startY = event.touches[0].clientY;
    // Set isDragging to true
    isDragging = true;
}

function handleTouchMove(event) {
    if (!isDragging) return;
    // Get the current Y position of the touch
    currentY = event.touches[0].clientY;
    // Calculate the distance dragged
    const distance = currentY - startY;
    // If the distance is greater than 100, trigger the refresh
    if (distance > 100) {
        location.reload();
    }
}

function handleTouchEnd() {
    // Reset the touch variables
    startY = 0;
    currentY = 0;
    isDragging = false;
}
