// // Renderizar el pie de página con métodos del DOM
// Analiza el código del archivo index.html e identifica la etiqueta que es “padre” de las opciones de navegación.
// Asigna a esa etiqueta un id=”navbar” para usar como selector de JavaScript. 
// Define una variable navSelector, selecciona con el método getElementById la etiqueta correspondiente donde se Renderizar_a la barra de navegación.  
const navSelector = document.getElementById("navbar");
// navSelector.style.display = "flex"
// navSelector.style.justifyContent = "space-around"
// navSelector.style.padding = "20px 0"
// Crea una variable options, para guardar un array de objetos. Cada objeto representará los datos de un botón con las propiedades:
const optionsNav = [
    {title: "Ofertas de la semana!", linkTo: "../html/details.html"}, // title: para el texto del botón
    {title: "Productos", linkTo: "../html/details.html"}, // linkTo: para el link de direccionamiento
    {title: "Contacto", linkTo: "../html/details.html"},
    {title: "Marcas", linkTo: "../html/details.html"}
]
// Itera con for of
for ( let optionNav of optionsNav){
    // Crea las etiquetas correspondientes con el método createElement y las propiedades/estilos correspondientes.
    let anchor = document.createElement("a");
    anchor.className = "nav-button";
    // Asigna el texto de la propiedad title de cada objeto con la propiedad textContent
    anchor.textContent = optionNav.title;
    // Define la propiedad href hacia la propiedad linkTo de cada objeto.
    anchor.href = optionNav.linkTo
    // anchor.style.textDecoration = "none"
    // anchor.style.color = "white"
    // anchor.style.fontWeight = "700"
    // Luego “agregar un hijo”  al navSelector
    navSelector.appendChild(anchor)
}
// Abre con live server el archivo index.html y observa la barra de navegación.


// Renderizar el pie de página con métodos del DOM
//seleccionar con el método getElementById la etiqueta correspondiente donde se Renderizar_a el footer.
const footerSelector = document.getElementById("footer");
// Array de objetos
const optionsFooter = [
    {title: "Ofertas", linkTo: "https://flexboxfroggy.com/#es", cols: [
        {title: "Laptops", linkTo: "https://tailwindcss.com/"},
        {title: "Audio", linkTo: "https://tailwindcss.com/"},
        {title: "Auriculares", linkTo: "https://tailwindcss.com/"}
    ]},
    {title: "Cómo comprar", linkTo: "https://flexboxfroggy.com/#es", cols: [
        {title: "Formas de pago", linkTo: "https://tailwindcss.com/"},
        {title: "Envíos", linkTo: "https://tailwindcss.com/"},
        {title: "Devoluciones", linkTo: "https://tailwindcss.com/"}
    ]},
    {title: "Costos y tarifas", linkTo: "https://flexboxfroggy.com/#es", cols: [
        {title: "Impuestos", linkTo: "https://tailwindcss.com/"},
        {title: "Facturación", linkTo: "https://tailwindcss.com/"}
    ]},
    {title: "Mis pedidos", linkTo: "https://flexboxfroggy.com/#es", cols: [
        {title: "Pedir Nuevamente", linkTo: "https://tailwindcss.com/"},
        {title: "Lista de deseos", linkTo: "https://tailwindcss.com/"},
    ]},
    {title: "Garantía de Entrega", linkTo: "https://flexboxfroggy.com/#es", cols: [""]},
]
// itera con for of
for ( let optionFooter of optionsFooter){
    // crear un elemento
    const ul = document.createElement("ul")
    // asignarle un nombre de clase
    ul.className = "footer-ul"
    // agregar un li
    let li = document.createElement("li")
    // asignarle una clase
    li.className = "footer-main-item"
    // crear una etiqueta a
    let a = document.createElement("a")
    // asignarle una clase
    a.className = "footer-a"
    // asignarle un texto 
    a.textContent = optionFooter.title
    // asignarle un href
    a.href = optionFooter.linkTo
    // agrega a al li
    li.appendChild(a)
    // agrega li al ul
    ul.appendChild(li)

    // itera con for of
    for (let col of optionFooter.cols){
        // crear un elemento li para los cols
        let li = document.createElement("li")
        // agrega una clase
        li.className = "footer-li"
        // crea una etiqueta a
        let a = document.createElement("a")
        // asignale una clase
        a.className = "footer-a"
        // asignale el texto
        a.textContent = col.title
        // asignale el href
        a.href = col.linkTo
        // agrega a al li
        li.appendChild(a)
        // agrega li al ul
        ul.appendChild(li)
    }
    // agrega un hijo al footerSelector
    footerSelector.appendChild(ul)
}