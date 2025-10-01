// Populate product dropdown
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const productSelect = document.getElementById('product-name');
  
  // Clear existing options except the first one
  while (productSelect.options.length > 1) {
    productSelect.remove(1);
  }
  
  // Add product options
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});

const currentYear = document.getElementById('year');
const lastModified = document.getElementById('lastModified');

const year = new Date().getFullYear();
currentYear.textContent = year;

const lastMod = new Date(document.lastModified);
lastModified.textContent = `Last Updated: ${lastMod.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`;