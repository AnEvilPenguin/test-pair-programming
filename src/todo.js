
export function newTodoItem(name, description, completed = false) {
    const row = document.createElement('tr');

    const nameElement = document.createElement('td');
    nameElement.textContent = name;

    row.appendChild(nameElement);

    const descriptionElement = document.createElement('td');
    descriptionElement.textContent = description;

    row.appendChild(descriptionElement);

    const wrapper = document.createElement('td');

    const completedElement = document.createElement('input');
    completedElement.setAttribute('type', 'checkbox');
    completedElement.checked = completed;

    wrapper.appendChild(completedElement);

    row.appendChild(wrapper);

    return row;
}

export function promptForItem()
{
    let name;

    do {
        name = prompt('Enter a name');
    } while(name == null || name == '');

    const description = prompt('Enter a description');

    return newTodoItem(name, description);
}