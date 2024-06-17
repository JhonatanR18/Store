// En esta actividad, vas a mejorar el programa store de las secciones anteriores definiendo una lista con las instancias de objetos creados hasta el momento.
class Product {
    constructor(id, title, normalPrice, priceWithDiscount, stock, photo, colors, onsale,observation, description, /*supplier,*/ taxPolicy) {
        this.id = id;
        this.title = title;
        this.normalPrice = normalPrice;
        this.priceWithDiscount = priceWithDiscount;
        this.stock = stock;
        this.photo = photo;
        this.colors = colors;
        this.onsale = onsale;
        this.observation = observation;
        // Atributo privado
        // this._supplier = supplier;
        this.description = description;
        this.taxPolicy = taxPolicy;
    }
    // Métodos getter y setter del atributo privado
    // get getSupplier (){
    //     return this._supplier
    // }
    // set setSupplier (newName) {
    //     this._supplier = newName;
    // }
    // Define el método sellUnits para que cumpla los requerimientos
    // sellUnits (units){
    //     Mejora el método para que si no hay stock suficiente, no se descuenten unidades y se devuelva un mensaje de error.
    //     if (units > this.stock){
    //         console.log("No hay suficiente stock");
    //         return;
    //     }
    //     this.stock = this.stock - units
    // }
}

// Instancias de los objetos
const prod1 = new Product( // Primer elemento del array
    '0001',
    'Lenovo Tablet 10" HD',
    500,
    400,
    3,
    ['../assets/products/tablet.png', '../assets/products/tablet2.png', '../assets/products/tablet3.png'],
    ['Black', 'White', 'Gray'],
    '-12%',
    'Space Gray',
    "Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage, this laptop provides the performance and storage capacity needed for demanding tasks. The sleek design in silver and space gray adds a touch of sophistication. The high-resolution Retina display brings your visuals to life, whether you're editing photos, creating videos, or simply browsing the web. With the latest technology and a lightweight build, the MacBook Pro 13'4 is the perfect companion for professionals and creative individuals alike.",
    'Incluye impuesto País y percepción AFIP'
)
const prod2 = new Product( // segundo elemento del array
    '0002', 
    'Apple iPhone 15 Pro Max', 
    1500,
    1200,
    5,
    ['../assets/products/iphone.png', '../assets/products/iphone2.png', '../assets/products/iphone3.png'],
    ['Black', 'Blue'],
    '-20%',
    'Natural Titanium',
    "Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage, this laptop provides the performance and storage capacity needed for demanding tasks. The sleek design in silver and space gray adds a touch of sophistication. The high-resolution Retina display brings your visuals to life, whether you're editing photos, creating videos, or simply browsing the web. With the latest technology and a lightweight build, the MacBook Pro 13'4 is the perfect companion for professionals and creative individuals alike.",
    'Incluye impuesto País y percepción AFIP'
) 
const prod3 = new Product( // tercer elemento del array
    '0003',
    'Macbook Pro 15"4',
    6195,
    5637,
    2,
    ["../assets/products/MacbookPro.png", "../assets/products/MacbookPro2.png", "../assets/products/MacbookPro3.png"],
    ['Silver', 'Black'],
    '-12%',
    'Space Gray',
    "Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage, this laptop provides the performance and storage capacity needed for demanding tasks. The sleek design in silver and space gray adds a touch of sophistication. The high-resolution Retina display brings your visuals to life, whether you're editing photos, creating videos, or simply browsing the web. With the latest technology and a lightweight build, the MacBook Pro 13'4 is the perfect companion for professionals and creative individuals alike.",
    'Incluye impuesto País y percepción AFIP'
) 
const prod4 = new Product( // cuarto elemento del array
    '0004',
    'Monitor Gamer 27" QHD 2K Panel IPS',
    600,
    400,
    8,
    ['../assets/products/monitor.png', '../assets/products/monitor2.png', '../assets/products/monitor3.png'],
    ['Black'],
    '-10%',
    '240Hz 1ms FreeSync Premium',
    "Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage, this laptop provides the performance and storage capacity needed for demanding tasks. The sleek design in silver and space gray adds a touch of sophistication. The high-resolution Retina display brings your visuals to life, whether you're editing photos, creating videos, or simply browsing the web. With the latest technology and a lightweight build, the MacBook Pro 13'4 is the perfect companion for professionals and creative individuals alike.",
    'Incluye impuesto País y percepción AFIP'
) 
const prod5 = new Product( // quinto elemento del array
    '0005',
    'Epson | Impresora EcoTank L5590',
    150,
    100,
    12,
    ['../assets/products/impresora.png', '../assets/products/impresora2.png', '../assets/products/impresora3.png'],
    ['White'],
    '-25%',
    'Inyección de Tinta',
    "Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage, this laptop provides the performance and storage capacity needed for demanding tasks. The sleek design in silver and space gray adds a touch of sophistication. The high-resolution Retina display brings your visuals to life, whether you're editing photos, creating videos, or simply browsing the web. With the latest technology and a lightweight build, the MacBook Pro 13'4 is the perfect companion for professionals and creative individuals alike.",
    'Incluye impuesto País y percepción AFIP'
) 
const prod6 = new Product( // sexto elemento del array
    '0006',
    'Mouse | Logitech G502 Lightspeed',
    250,
    220,
    50,
    ['../assets/products/mouse.png', '../assets/products/mouse3.png', '../assets/products/mouse5.png'],
    ['Black', 'Red'],
    '-12%',
    'Mouse inalámbrico',
    "Experience the power of creativity with the MacBook Pro 13'4. Featuring 8GB of RAM and 512GB of storage, this laptop provides the performance and storage capacity needed for demanding tasks. The sleek design in silver and space gray adds a touch of sophistication. The high-resolution Retina display brings your visuals to life, whether you're editing photos, creating videos, or simply browsing the web. With the latest technology and a lightweight build, the MacBook Pro 13'4 is the perfect companion for professionals and creative individuals alike.",
    'Incluye impuesto País y percepción AFIP'
)
// Creamos el ARRAY de los productos 
let products = [prod1, prod2, prod3, prod4, prod5, prod6]



