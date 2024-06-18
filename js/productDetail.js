// Location 
// Captura el parámetro id utilizando las propiedades y métodos de la teoría.
const query = location.search;
// URLSearchParams define métodos útiles para trabajar con la cadena de consulta de una URL.
const params = new URLSearchParams(query);
const id = params.get('id')

// define una función que dependa del parámetro id del detalle del producto
function printDetails(id){
    // guarde en una variable el producto encontrado con el id del parámetro
    const product = products.find(each => each.id === id)
    // Formatear el precio
    const precioFormateado = `S/ ${product.priceWithDiscount.toLocaleString(
        'es-PE', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`    
    // variable para la plantilla de la vista de detalles || con ${} pon los datos correspondientes al detalle del producto
    const detailsTemplate = `
    <div class="product-images-block">
        <div class="thumbnail-container">
            ${product.photo.map(
                photo => `<img src="${photo}" alt="mini">`
            ).join("")}
        </div>
        <img class="main-img" src="${product.photo[0]}" alt="${product.id}">
    </div>
    <div class="product-description-block">
        <h1 class="titulo">${product.title}</h1>
        <span class="product-observation">${product.observation}</span>
        <form class="selector">
            <fieldset>
                <label class="label" for="color">Color</label>
                <select id="color" type="text" placeholder="Selecciona un color">
                <!-- .map en ese caso transforma cada color en una cadena HTML de una opción (<option>). -->
                    ${product.colors.map(
                        color => `<option value=${color}>${color}</option>`
                    ).join("")} <!-- Combina las cadenas en una sola cadena de texto -->
                </select>
            </fieldset>
        </form>
        <div class="description">
            <h1>Descripción</h1>
            <p>${product.description}</p>
        </div>
    </div>
    <div class="product-checkout-block">
        <div class="checkout-container">
            <span class="checkout-total-label">Total:</span>
            <h2 class="checkout-total-price">${precioFormateado}</h2>
            <p class="checkout-description">Incluye impuesto PAÍS y percepción AFIP. Podes recuperar AR$ 50711 haciendo la solicitud en AFIP.</p>
            <ul class="checkout-policy-list">
                <li>
                <span class="policy-icon"><img src="../assets/truck.png" alt="truck"></span>
                <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío.</span>
                </li>
                <li>
                <span class="policy-icon"><img src="../assets/plane.png" alt="plane"></span>
                <span class="policy-desc">Recibe aproximadamente en 10 y 15 días hábiles, seleccionando envío normal.</span>
                </li>
            </ul>
            <div class="checkout-process">
                <div class="top">
                    <input type="number" value="1">
                    <button class="btn-primary">Comprar</button>
                </div>
                <div class="bottom">
                    <button class="btn-outline">Añadir al Carrito</button>
                </div>
            </div>
        </div>  
    </div>
    `;
    // seleccione un id del html donde se imprimirá la plantilla
    const detailsSelector = document.querySelector("#productDetail")
    detailsSelector.innerHTML = detailsTemplate
}
printDetails(id)