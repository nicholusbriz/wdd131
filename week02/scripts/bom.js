const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  const chapter = input.value.trim();

  if (chapter !== "") {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = 'X';

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
  } else {
    input.focus();
  }
});
