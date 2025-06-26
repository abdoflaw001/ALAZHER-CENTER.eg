/**
 * This code creates a simple single-page application (SPA) structure.
 * Each "page" is a section shown/hidden by clicking its corresponding button.
 */

const pages = [
    { id: 'home', label: 'Home', content: '<h2>Home Page</h2><p>Welcome to the Home page!</p>' },
    { id: 'about', label: 'About', content: '<h2>About Page</h2><p>This is the About page.</p>' },
    { id: 'contact', label: 'Contact', content: '<h2>Contact Page</h2><p>Contact us here.</p>' }
];

// Create navigation buttons
const nav = document.createElement('nav');
pages.forEach(page => {
    const btn = document.createElement('button');
    btn.textContent = page.label;
    btn.onclick = () => showPage(page.id);
    nav.appendChild(btn);
});
document.body.appendChild(nav);

// Create page containers
pages.forEach(page => {
    const div = document.createElement('div');
    div.id = page.id;
    div.innerHTML = page.content;
    div.style.display = 'none';
    document.body.appendChild(div);
});

// Show selected page and hide others
function showPage(pageId) {
    pages.forEach(page => {
        document.getElementById(page.id).style.display = (page.id === pageId) ? 'block' : 'none';
    });
}

// Show the first page by default
showPage(pages[0].id);
