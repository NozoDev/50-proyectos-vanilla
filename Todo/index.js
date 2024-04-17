//Paso 1. Obtener elementos del dom
const addBtn = document.getElementById("agregar-tarea");
const input = document.getElementById("tarea");
const taskList = document.getElementById("list");

// paso 2. escuchar el evento de envio del formulario
addBtn.addEventListener("click", function (e) {
  e.preventDefault(); // evita que se recargue la pagina
  addTask();
});

// paso 3. crear la funcion para agregar tarea

function addTask() {
  const taskText = input.value.trim(); // esto obtiene el valor del campo de text y elimina espacios en blanco
  if (taskText !== "") {
    const taskItem = document.createElement("li");

    taskItem.textContent = taskText;
    taskItem.classList.add("list");
    taskList.appendChild(taskItem);

    input.value = ""; // limpiar el campo de texto despues de agregar la tarea
  }
}

// marcar tareas como completadas
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    completedTodo(e.target);
  }
});

function completedTodo(taskItem) {
  taskItem.classList.toggle("completed");
}
