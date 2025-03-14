let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();
  
    // Validación de campo vacío o solo con espacios
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    // Validación de longitud mínima de 3 caracteres
    if (nombreAmigo.length < 3) {
        alert("El nombre debe tener al menos 3 letras.");
        return;
    }

    // Validación de nombres duplicados
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Validación de límite de amigos (máximo 5)
    if (amigos.length >= 5) {
        alert("No puedes agregar más de 5 amigos.");
        return;
    }

    // Si todas las validaciones pasan, se agrega el amigo a la lista
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = ""; // Limpia el campo de entrada
    mostrarListaAmigo();
}

function mostrarListaAmigo() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de mostrarla
  
    for (let index = 0; index < amigos.length; index++) {
        const element = amigos[index];
  
        let listaHTML = document.createElement("li");
        listaHTML.textContent = element;
        listaAmigos.appendChild(listaHTML);
    }
}

function sortearAmigo() {
    let cantidadAmigos = amigos.length;

    // Validación de que haya al menos un amigo para sortear
    if (cantidadAmigos === 0) {
        alert("Por favor, inserte un nombre antes de sortear");
    } else {
        // Validación de que haya al menos dos amigos para un sorteo válido
        if (cantidadAmigos < 2) {
            alert("Debe haber al menos dos amigos para hacer el sorteo.");
            return;
        }

        let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
        let resultadoHTML = document.querySelector("#resultado");

        // Crea un nuevo elemento 'li' para mostrar el resultado
        let listaResultado = document.createElement("li");
        listaResultado.textContent = amigos[indiceAmigo];

        // Añade el resultado al contenedor de resultados
        resultadoHTML.innerHTML = ""; // Limpiar resultados previos
        resultadoHTML.appendChild(listaResultado);
    }
}
