//Paso 1. Obtener elementos del dom
const form = document.getElementById("form");
const input = document.getElementById("tarea");
const taskList = document.getElementById("list");

// paso 2. escuchar el evento de envio del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault(); // evita que se recargue la pagina
  addTask();
});

// paso 3. crear la funcion para agregar tarea

function addTask() {
  const taskText = input.value.trim(); // esto obtiene el valor del campo de text y elimina espacios en blanco
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task");
    taskItem.textContent = taskText;

    const deleteBtn = addDelete();
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
    input.value = ""; // limpiar el campo de texto despues de agregar la tarea
  }
}

// marcar tareas como completadas

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    toggleTaskCompletion(e.target);
  }
});

function toggleTaskCompletion(taskItem) {
  taskItem.classList.toggle("completed");
}

//crear y devolver el boton de eliminar
function addDelete() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    taskList.removeChild(item);
  });

  return deleteBtn;
}
