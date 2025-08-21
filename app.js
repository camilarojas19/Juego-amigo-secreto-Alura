//1.Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
let amigos = []

function recolectarNombres() {
    let nombresAmigos = (document.getElementById("agregarAmigo").value.trim());
    console.log(nombresAmigos); // Ahora imprime bien el valor
    amigos.push(nombresAmigos); // Lo guarda en el array
}
//2. Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.




//3. Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
//4. Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.