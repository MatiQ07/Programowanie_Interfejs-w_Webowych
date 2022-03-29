'use strict';

//Selectory
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoDate = document.querySelector('.todo-date');
const listOption = document.querySelector('.list-selector');

//Event Listenery
todoButton.addEventListener('click', addItem);
todoList.addEventListener('click', deleteI);
todoList.addEventListener('click', checkI);
todoList.addEventListener('click',removeD);
listOption.addEventListener('click',filterTodo);

//Funckcje
function addItem(event){
    
    event.preventDefault();

    if(todoInput.value === "")
    {
        return;
    }    
    const todoElement = document.createElement('div');
    todoElement.classList.add('todo')

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoElement.appendChild(newTodo);

    todoInput.value = "";

    const completed = document.createElement('button')
    completed.innerHTML = '<i class="fas fa-check"></i>';
    completed.classList.add("completed-btn")

    todoElement.appendChild(completed);

    const trash = document.createElement('button')
    trash.innerHTML = '<i class="fas fa-trash"></i>';
    trash.classList.add("trash-btn")

    todoElement.appendChild(trash);

    var urgency = document.getElementById("selector1");
    var selValue = urgency.options[urgency.selectedIndex].value;

    switch(selValue){
    
        case "MaloPilne":
            todoElement.classList.toggle('malopilne');
            break;
        case "Standardowe":
            todoElement.classList.toggle('standardowe')
            break;
        case "BardzoPilne":
            todoElement.classList.toggle('bardzopilne')
            break;        
    }

    const dateC = document.createElement('div');
    dateC.classList.add("date-completed");

    todoElement.appendChild(dateC);
    todoList.appendChild(todoElement);    
}

function deleteI(e){

    const item = e.target;  
    
        if(item.classList[0] === 'trash-btn')
        {
            if (confirm("Czy na pewno chcesz usunąć ten element ?")){
            const todoI = item.parentElement;
            todoI.classList.add("fall")
            todoI.addEventListener('transitionend', function(){
                todoI.remove();
            })
        }
       }   
        
}

function checkI(e){
    
    const item = e.target;

    if(item.classList[0] === 'completed-btn')
    {
        const todoI = item.parentElement;      
        todoI.classList.toggle("completed"); 
        
        const d = new Date()
        const str = "Date completed: " + d.getDate().toString() + "-" + (d.getMonth() + 1).toString() + "-" + d.getFullYear().toString();
        todoI.lastChild.innerHTML = str;
    }
}

function removeD(e)
{
    const item = e.target;

    if(item.classList[0] === 'date-completed')
    {        
        item.innerHTML = "";  
    }
}

function filterTodo(e)
{
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "MaloPilne":
                if(todo.classList.contains("malopilne"))
                {
                    todo.style.display = "flex";                    
                }
                else
                {
                    todo.style.display = "none";                    
                }
                break;
            case "Standardowe":
                if(todo.classList.contains("standardowe"))
                {
                    todo.style.display = "flex";                    
                }
                else
                {
                    todo.style.display = "none";                    
                }    
                break;            
            case "BardzoPilne":
                if(todo.classList.contains("bardzopilne"))
                {
                    todo.style.display = "flex";
                }
                else
                {
                    todo.style.display = "none";                    
                } 
                break;              
        }
    });
}
