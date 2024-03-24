import './style.css'
const input = document.getElementById("input") as HTMLInputElement;
const todoList = document.getElementById("todo-list") as HTMLElement;
const send = document.getElementById("send") as HTMLButtonElement;
const deleteBtn = document.getElementById("deleteEl") as HTMLButtonElement;
const edit = document.getElementById("edit") as HTMLButtonElement;



send.addEventListener('click', () => {
    todoList.innerHTML += `
    <div class="zadanie">
    <h2>${input.value}</h2>
    <button class="deleteEl">Delete</button>
    <button id="edit">Edit</button>
  </div>
    `
})

deleteBtn.addEventListener('click', () =>{
    
})
