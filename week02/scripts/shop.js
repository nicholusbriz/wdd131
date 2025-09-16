// Grab elements from the DOM
const input = document.getElementById("userInput");
const button = document.getElementById("submitBtn");
const message = document.getElementById("message");
const fruitList = document.getElementById("fruitList");

// Array to store fruit names
let fruits = [];

// Event listener for button click
button.addEventListener("click", handleInput);

// Function to handle input and update array
function handleInput() {
  const value = input.value.trim();
  input.value = "";
  input.focus();

  // Clear previous message
  message.textContent = "";

  // Validate input
  if (value === "") {
    message.textContent = "Invalid fruit name!";
    return;
  }

  // Check if fruit already exists
  if (fruits.includes(value)) {
    message.textContent = `"${value}" is already in the list.`;
    return;
  }

  // Add fruit to array
  fruits.push(value);
  message.textContent = `"${value}" added successfully!`;

  // Update the displayed list
  renderList();
}

// Function to render the fruit list on the page
function renderList() {
  fruitList.innerHTML = ""; // Clear current list

  fruits.forEach((fruit, index) => {
    const li = document.createElement("li");
    li.textContent = fruit;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      fruits.splice(index, 1); // Remove from array
      renderList(); // Re-render list
    };

    li.appendChild(deleteBtn);
    fruitList.appendChild(li);
  });
}
