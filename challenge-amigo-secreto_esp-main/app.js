// A) Crear un array para almacenar los nombres
let amigos = [];

// B) Función para agregar amigos
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  // Validar la entrada: si el campo está vacío, mostrar alerta
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Validar si el nombre ya fue agregado para evitar duplicados
  if (amigos.includes(nombre)) {
    alert("El nombre ya fue agregado.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";

  // Actualizar la lista visualmente
  actualizarLista();
}

// C) Función para actualizar la lista de amigos
function actualizarLista() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  lista.innerHTML = "";

  // Recorrer el array y crear elementos <li> para cada amigo
  amigos.forEach((nombre, index) => {
    const li = document.createElement("li");
    li.textContent = nombre;

    // Botón para eliminar el amigo
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X"; // Emoji para eliminar (se muestra en rojo en la mayoría de los sistemas)
    btnEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

// Función para eliminar un amigo del array
function eliminarAmigo(index) {
  amigos.splice(index, 1);
  actualizarLista();
}

// D) Función para sortear los amigos (Asignación de Amigo Secreto)
// Esta función asigna a cada amigo de la lista otro amigo de forma aleatoria,
// asegurándose de que nadie se asigne a sí mismo.
function sortearAmigo() {
  // Validar que haya al menos 2 amigos para poder sortear
  if (amigos.length < 2) {
    alert("Debe haber al menos 2 amigos para realizar el sorteo.");
    return;
  }

  // Crear una copia del array para ir eliminando a los asignados
  let copiaAmigos = [...amigos];
  let resultado = {};

  // Iterar sobre cada amigo y asignarle un amigo secreto
  for (let i = 0; i < amigos.length; i++) {
    // Filtrar para que no se asigne a sí mismo
    let opciones = copiaAmigos.filter(amigo => amigo !== amigos[i]);

    // Si no hay opciones disponibles, significa que el sorteo falló
    if (opciones.length === 0) {
      alert("No se pudo realizar el sorteo. Intente nuevamente.");
      return;
    }

    // Seleccionar de forma aleatoria un amigo de las opciones
    let elegido = opciones[Math.floor(Math.random() * opciones.length)];
    resultado[amigos[i]] = elegido;

    // Eliminar el amigo elegido de la copia para evitar asignarlo más de una vez
    copiaAmigos.splice(copiaAmigos.indexOf(elegido), 1);
  }

  // Mostrar el resultado del sorteo
  mostrarResultado(resultado);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(resultado) {
  const listaResultado = document.getElementById("resultado");
  listaResultado.innerHTML = "";

  // Recorrer el objeto resultado y crear un elemento <li> para cada asignación
  for (const [amigo, asignado] of Object.entries(resultado)) {
    const li = document.createElement("li");
    li.textContent = `${amigo} → ${asignado}`;
    listaResultado.appendChild(li);
  }
}
