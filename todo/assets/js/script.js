//seleçao dom

const form = document.getElementById('list-form');

const todoButton = document.getElementById('todo-button');

const todoList = document.querySelector('.todo-container');


//Form-submit

form.onsubmit = function(e){
   e.preventDefault();
   const todoInput = document.getElementById('list-input');
   addTodo(todoInput.value)
   form.reset();

}



//funções

function addTodo(input) {

   var addLi = document.createElement('div');
   var check = document.createElement('input');
   var label = document.createElement('label');

   check.setAttribute('type','checkbox');
   var texto = document.createTextNode(input);

   addLi.appendChild(texto);

   label.appendChild(check);
   label.appendChild(addLi);



   todoList.appendChild(label);




   console.log("chegou aqui")

}