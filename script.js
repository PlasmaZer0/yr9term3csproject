document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const loadElement = document.querySelector('.load');

    // Add a click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            
            loadElement.classList.add("loading");
        });
    });
});