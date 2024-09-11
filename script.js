// Select all the image cards
const cards = document.querySelectorAll('.amenities-img-card');

// Function to remove 'active' class from all cards
function removeActiveClasses() {
  cards.forEach(card => {
    card.classList.remove('active');
  });
}

// Loop over each card to add event listeners
cards.forEach(card => {
  // Add hover event listener
  card.addEventListener('mouseenter', () => {
    removeActiveClasses(); // Remove 'active' from all cards
    card.classList.add('active'); // Add 'active' to the hovered card
  });
});

// Optionally, set the first card as active initially
cards[0].classList.add('active');