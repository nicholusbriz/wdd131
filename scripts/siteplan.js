const currentYear = document.getElementById('year');
const lastModified = document.getElementById('lastModified');

const year = new Date().getFullYear();
currentYear.textContent = year;

const lastMod = new Date(document.lastModified);
lastModified.textContent = `Last Updated: ${lastMod.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;