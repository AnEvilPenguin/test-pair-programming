
export function newTodoItem(name, description, completed = false) {
    const row = document.createElement('tr');

    const nameElement = document.createElement('td');
    nameElement.textContent = name;

    row.appendChild(nameElement);

    const descriptionElement = document.createElement('td');
    descriptionElement.textContent = description;

    row.appendChild(descriptionElement);

    const completedElement = document.createElement('input');
    completedElement.setAttribute('type', 'checkbox');
    completedElement.checked = completed;

    row.appendChild(completedElement);

    return row;
}