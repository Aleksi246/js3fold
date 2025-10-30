// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const ul = document.querySelector('ul');
// add your code here
for (let i of todoList) {
  let li = document.createElement('li');

  let input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'todo-' + i.id;
  input.checked = i.completed;

  let label = document.createElement('label');
  label.htmlFor = 'todo-' + i.id;
  label.innerText = i.task;

  li.appendChild(input);
  li.appendChild(label);

  ul.appendChild(li);
}
