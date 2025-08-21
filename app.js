let amigos = []; // Declaración correcta de la variable amigos

function recolectarNombres() {
    let nombresAmigos = document.getElementById("agregarAmigo").value.trim(); // Obtiene el valor del input y elimina espacios

    if (nombresAmigos === "") {
        alert("Por favor, introduce un nombre");
        return; // Sale de la función si el nombre está vacío
    }

    console.log(nombresAmigos); // Muestra lo que escribas en consola
    amigos.push(nombresAmigos); // Lo guarda en el array
    document.getElementById("agregarAmigo").value = ""; // Limpia el input después de agregar el nombre

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}