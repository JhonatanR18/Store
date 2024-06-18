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
    'Lenovo Tablet 10.1" HD WUXGA (1920x1200) IPS, 10-Point Multi-touch',
    849,
    699,
    3,
    ['../assets/products/tablet.png', '../assets/products/tablet2.png', '../assets/products/tablet3.png'],
    ['Black', 'White', 'Gray'],
    '-18%',
    'Space Gray',
    'Tablet Lenovo Tab M10 HD (3rd Gen) 10.1" WUXGA (1920x1200) IPS, 10-Point Multi-touch Wireless 802.11ac 1x1 + Bluetooth 5.0 + 4G LTE + Voice Call, Procesador Unisoc T610 (8C, 2x A75 @1.8GHz + 6x A55 @1.8GHz), Memoria RAM 4GB Soldered LPDDR4X, Almacenamiento interno de 64GB eMMC 5.1 (eMCP), Ranura de expansion microSD de (Hasta 128GB/FAT32 & 2TB/exFAT), Card Reader Nano-SIM & microSD Card Slot, Puertos: 1 x headphone & microphone combo jack (3.5mm) / 1 x USB-C 2.0 (Soporta transferencia de datos y Carga) / 1 x Card Slot, Camara posterior 8.0 MP / Camara frontal 5.0 MP, Reproduce audio y video.',
    'Incluye impuesto País y percepción AFIP'
)
const prod2 = new Product( // segundo elemento del array
    '0002', 
    'iPhone 15 Pro Max 6.7" 256GB iOS 17', 
    7599,
    7099,
    5,
    ['../assets/products/iphone.png', '../assets/products/iphone2.png', '../assets/products/iphone3.png', '../assets/products/iphone4.png'],
    ['Black', 'Blue'],
    '-7%',
    'Natural Titanium',
    "Descubre el iPhone 15 Pro Max, el smartphone más avanzado de Apple. Con una pantalla Super Retina XDR de 6.7 pulgadas, almacenamiento de 256GB y el potente chip A17 Bionic, este dispositivo ofrece un rendimiento excepcional. Equipado con iOS 17, disfruta de las últimas funciones y mejoras de seguridad. Su sistema de cámaras profesionales captura fotos y videos de alta calidad, mientras que su diseño premium combina vidrio y acero inoxidable. La batería de larga duración y la conectividad 5G aseguran que siempre estés conectado. La seguridad está garantizada con Face ID.",
    'Incluye impuesto País y percepción AFIP'
) 
const prod3 = new Product( // tercer elemento del array
    '0003',
    'MacBook Pro 16" Chip M3 Pro, 512GB ssd, 18GB ram, macOs, teclado en inglés, negro.',
    12599,
    10799,
    2,
    ["../assets/products/MacbookPro.png", "../assets/products/MacbookPro2.png", "../assets/products/MacbookPro3.png"],
    ['Silver', 'Black'],
    '-14%',
    'Space Gray',
    'La MacBook Pro de 16" combina el potente Chip M3 Pro con 512GB de almacenamiento SSD y 18GB de RAM para un rendimiento superior. Con una pantalla Retina de alta resolución y teclado en inglés, ofrece una experiencia de usuario inigualable. Ejecuta macOS, el sistema operativo avanzado de Apple, en un elegante diseño negro.',
    'Incluye impuesto País y percepción AFIP'
) 
const prod4 = new Product( // cuarto elemento del array
    '0004',
    'Monitor Gamer 27" QHD 2K Panel IPS 240Hz 1ms FreeSync Premium',
    1149,
    999,
    8,
    ['../assets/products/monitor.png', '../assets/products/monitor2.png', '../assets/products/monitor3.png', '../assets/products/monitor4.png'],
    ['Black'],
    '-13%',
    'FreeSync Premium',
    'Disfruta de la máxima experiencia de juego con este monitor gamer de 27". Su resolución QHD 2K y el panel IPS ofrecen imágenes nítidas y colores vibrantes. Con una frecuencia de actualización de 240Hz y un tiempo de respuesta de 1ms, tus juegos se verán fluidos y sin desenfoques. Además, cuenta con FreeSync Premium para una experiencia de juego sin cortes ni interrupciones.',
    'Incluye impuesto País y percepción AFIP'
) 
const prod5 = new Product( // quinto elemento del array
    '0005',
    'Epson | Impresora EcoTank L5590',
    1229,
    1099,
    12,
    ['../assets/products/impresora.png', '../assets/products/impresora2.png', '../assets/products/impresora3.png'],
    ['White'],
    '-11%',
    'Inyección de Tinta',
    "La Epson EcoTank L5590 es una impresora multifuncional eficiente y económica, diseñada para altos volúmenes de impresión. Con su sistema de tanque de tinta recargable, ofrece costos de impresión ultra bajos y una gran capacidad. Ideal para el hogar y la oficina, permite imprimir, copiar, escanear y enviar fax con facilidad. Disfruta de una conectividad versátil con Wi-Fi y Ethernet integrados.",
    'Incluye impuesto País y percepción AFIP'
) 
const prod6 = new Product( // sexto elemento del array
    '0006',
    'Mouse | Logitech G502 Lightspeed',
    359,
    309,
    50,
    ['../assets/products/mouse.png', '../assets/products/mouse2.png', '../assets/products/mouse3.png', '../assets/products/mouse4.png'],
    ['Black', 'Red'],
    '-14%',
    'Mouse inalámbrico',
    "El Logitech G502 Lightspeed es un mouse gaming inalámbrico de alta precisión, diseñado para ofrecer rendimiento y comodidad sin compromisos. Con el sensor HERO 16K, garantiza un seguimiento ultra preciso para movimientos rápidos y precisos en juegos. Sus 11 botones programables permiten personalizar cada aspecto de tu experiencia de juego. El diseño ergonómico y la conectividad Lightspeed aseguran una respuesta instantánea y fluida, ideal para jugadores exigentes que buscan máximo control y eficiencia.",
    'Incluye impuesto País y percepción AFIP'
)
// Creamos el ARRAY de los productos 
let products = [prod1, prod2, prod3, prod4, prod5, prod6]



