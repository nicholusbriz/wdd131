const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fairview Texas Temple",
    location: "United States",
    dedicated: "2022, October, 2",
    area: 116642,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/fairview-texas-temple/fairview-texas-temple-58609.jpg"
  },
  {
    templeName: "Anchorage Alaska Temple",
    location: "United States",
    dedicated: "14, October 1997",
    area: 11937,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-63127.jpg"
  },
  {
    templeName: "Manaus Brazil Temple",
    location: "Avenida Coronel Texeira ",
    dedicated: "23 May 2007",
    area: 32032,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/manaus-brazil-temple/manaus-brazil-temple-3918.jpg"
  }
];

temples.forEach((temple) => {
    const templeElement = document.createElement("div"); 

    const templeName = document.createElement("h2");
    templeName.textContent = temple.templeName;
    templeElement.appendChild(templeName);

    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;
    templeElement.appendChild(templeLocation);

    const templeDedicated = document.createElement("p");
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeElement.appendChild(templeDedicated);

    const templeArea = document.createElement("p"); 
    templeArea.textContent = `Area: ${temple.area} sq ft`;
    templeElement.appendChild(templeArea);

    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = `${temple.templeName} image`;
    templeImage.loading = "lazy";
    templeImage.classList.add("temple-image");
    templeElement.appendChild(templeImage);

    document.getElementById("templeContainer").appendChild(templeElement);

});

document.addEventListener("DOMContentLoaded", () => {
  renderTemples(temples); // show all temples initially
});

document.getElementById("home").addEventListener("click", (e) => {
  e.preventDefault(); 
  renderTemples(temples); // show all temples
});

function getYear(dedicatedDate){
  return parseInt(dedicatedDate.match(/\d{4}/));
}

function renderTemples(templeList) {
  const container = document.getElementById("templeContainer");
  container.innerHTML = ""; // Clear previous content

  templeList.forEach((temple) => {
    const templeElement = document.createElement("div"); 

    const templeName = document.createElement("h2");
    templeName.textContent = temple.templeName;
    templeElement.appendChild(templeName);

    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;
    templeElement.appendChild(templeLocation);

    const templeDedicated = document.createElement("p");
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeElement.appendChild(templeDedicated);

    const templeArea = document.createElement("p"); 
    templeArea.textContent = `Area: ${temple.area} sq ft`;
    templeElement.appendChild(templeArea);

    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = `${temple.templeName} image`;
    templeImage.loading = "lazy";
    templeImage.classList.add("temple-image");
    templeElement.appendChild(templeImage);

    container.appendChild(templeElement);
  });
}

document.getElementById("old").addEventListener("click", (e) => {
  e.preventDefault();

  const oldTemples = temples.filter(temple => getYear(temple.dedicated) < 1990);
  renderTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (e) => {
  e.preventDefault(); 

  const newTemples = temples.filter(temple => getYear(temple.dedicated) > 2000);
  renderTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (e) => {
  e.preventDefault(); 

  const largeTemples = temples.filter(temple => temple.area > 90000);
  renderTemples(largeTemples);
});
                                                                                                                                                                                                                              
document.getElementById("small").addEventListener("click", (e) => {
  e.preventDefault(); 

  const smallTemples = temples.filter(temple => temple.area < 10000);
  renderTemples(smallTemples);
});


const button = document.getElementById("button");
const nav = document.querySelector("nav");
button.addEventListener("click", () => {
  nav.classList.toggle("open");
  button.classList.toggle("open");
});


const year = document.getElementById("year")
year.textContent = new Date().getFullYear();

const lastMod = document.getElementById("lastModified")
lastMod.textContent = `Last Updated: ${document.lastModified}`;

