// List of classmates
const classmates = [
    { name: "Alice", image: "images/alice.jpg", portfolio: "alice.html" },
    { name: "Bob", image: "images/bob.jpg", portfolio: "bob.html" },
    { name: "Charlie", image: "images/charlie.jpg", portfolio: "charlie.html" },
    { name: "David", image: "images/david.jpg", portfolio: "david.html" },
    // Add more classmates as needed
];

// Get container
const container = document.getElementById('cardContainer');

// Create cards dynamically
classmates.forEach(student => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${student.image}" alt="${student.name}">
        <h3>${student.name}</h3>
        <p>View Portfolio</p>
    `;
    card.addEventListener('click', () => {
        window.location.href = student.portfolio;
    });
    container.appendChild(card);
});
