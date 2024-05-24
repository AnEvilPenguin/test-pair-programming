import './styles.css';
import { newTodoItem, promptForItem } from './todo';

const body = document.querySelector('body');
body.classList.add('background');

const hello = document.createElement('h1');
hello.textContent = 'My Task List';

body.appendChild(hello);

const div = document.createElement('div');
div.classList.add('container');

const newButton = document.createElement('button');
newButton.textContent = 'New';

div.appendChild(newButton);

const table = document.createElement('table');

const tableHeader = table.createTHead();

const thName = document.createElement('th');
thName.textContent = 'Name';
tableHeader.appendChild(thName);

const thDescription = document.createElement('th');
thDescription.textContent = 'Description';
tableHeader.appendChild(thDescription);

const thCompleted = document.createElement('th');
thCompleted.textContent = 'Completed';
thCompleted.classList.add('end-element');
tableHeader.appendChild(thCompleted);

const tableBody = table.createTBody();

const task1 = newTodoItem('Task1', 'Whatever');
tableBody.appendChild(task1);

const task2 = newTodoItem('Task2', 'A new Task', true);
tableBody.appendChild(task2);

newButton.addEventListener('mousedown', () => {
    const todo = promptForItem();
    tableBody.appendChild(todo);
});

const tableFooter = table.createTFoot();

div.appendChild(table);

body.appendChild(div);