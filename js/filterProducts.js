// Remueve diacríticos | tildes y más
const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
// modifica la función para que reciba un evento
const captureText = (event) =>{
    // guarda en una variable el valor capturado por el evento
    let text = event.target.value;
    // filtra el array con todos los productos cuyo nombre incluya el texto capturado
    let filterProductos = products.filter(product =>
        // filtra a la vez title y description
        removeDiacritics(product.title.toLowerCase()).includes(text.toLowerCase()) || 
        removeDiacritics(product.observation.toLowerCase()).includes(text.toLowerCase()))
        // Necesario invocar a la función pasando el array y el id del selector
        printCards(filterProductos, "products")
}

// define una variable para seleccionar con el método querySelector
let searchSelector = document.querySelector("#search");
// modifica el escuchador | ahora depende de un objeto con todos los datos del evento
searchSelector.addEventListener("keyup", event=>captureText(event))