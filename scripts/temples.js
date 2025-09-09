// Set current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Set last modified date dynamically
document.getElementById("lastModified").textContent = "Last updated: " + document.lastModified;

const nav = document.querySelector("nav")
const button = document.querySelector("#menu")

button.addEventListener('click', () => {
    nav.classList.toggle('show')
    button.classList.toggle('show')
})