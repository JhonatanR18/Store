// Actividad: función que “encapsule” todo lo desarrollado en la actividad anterior.
// const productSelector = document.getElementById("products");
// Función createCard, recibe parámetro un objeto y devuelve un template string con sólo una tarjeta de producto. El objeto a recibir por la función será un producto con todas las propiedades definidas en la clase.
function createCard(product) {
    // modifica cada dato estático de la tarjeta
    // Debe tener una consulta o query dinámica con el id del producto. No olvidar los signos ? (pregunta) ni el = (igual)
    return `
        <article class="product-card">
        <a href="../html/details.html?id=${product.id}">
            <div class="conProductImg"><img class="product-img" src="${product.photo[0]}" alt="${product.id}"> </div>
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.observation}</span>
                <div class="product-price-block">
                    <span class="normal-price">S/ ${product.normalPrice}</span>
                    <span class="price-with-discount">S/ ${product.priceWithDiscount}</span>
                </div>
                <div class="product-tax-policy">${product.taxPolicy}</div>
            </div>
            <div class="product-discount">${product.onsale}</div>
        </a>
        </article>
    `;
}

// define una función printCards 
// que reciba como parámetro un array de productos "El array esta en products.js"
// y el id del selector HTML idSelector
function printCards(arrayProductos, idSelector) {
    // define una variable para concatenar todas las tarjetas de los productos
    let productsTemplates = ""
    // itera con for of para que cada vuelta “cargue” una tarjeta de producto 
    for (const elements of arrayProductos) {
        productsTemplates = productsTemplates + createCard(elements)
    }
    // selecciona con getElementById la etiqueta idSelector
    const productSelector = document.getElementById(idSelector)
    // imprime con innerHTML
    productSelector.innerHTML = productsTemplates
}
// Necesario invocar a la función pasando el array y el id del selector
printCards(products, "products")