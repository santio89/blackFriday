/* agregar bebidas al stock. esta operacion, idealmente, deberia ser realizada por un usuario administrador mediante input. por el momento, al no manejar usuarios ni tener una forma de guardar la info en una base de datos, inicializo el stock manualmente */

const shopCart1 = new ShoppingCart(new Date(), 001);
const stock1 = new Stock(new Date(), 001);

const cerveza__quilmes = new Bebida("cerveza".toUpperCase(), "Quilmes".toUpperCase(), 1000, 300, 01, Infinity);
const cerveza__brahma = new Bebida("cerveza".toUpperCase(), "Brahma".toUpperCase(), 1000, 200, 02, Infinity);
const cerveza__heineken = new Bebida("cerveza".toUpperCase(), "Heineken".toUpperCase(), 1000, 400, 03, Infinity);
const vodka__smirnoff = new Bebida("vodka".toUpperCase(), "Smirnoff".toUpperCase(), 750, 1000, 04, Infinity);
const whisky__vat = new Bebida("whisky".toUpperCase(), "Vat 69".toUpperCase(), 750, 1200, 05, Infinity);
const ron__morgan = new Bebida("ron".toUpperCase(), "Morgan".toUpperCase(), 750, 1200, 06, Infinity);
const fernet__branca = new Bebida("fernet".toUpperCase(), "Branca".toUpperCase(), 750, 900, 07, Infinity);
const tequila__azteca = new Bebida("tequila".toUpperCase(), "Azteca".toUpperCase(), 750, 800, 08, Infinity);
const vodka__skyy = new Bebida("vodka".toUpperCase(), "Skyy".toUpperCase(), 750, 1200, 09, Infinity);
const vino__norton = new Bebida("vino".toUpperCase(), "Norton".toUpperCase(), 750, 500, 10, Infinity);
const licor__jager = new Bebida("licor".toUpperCase(), "Jäger".toUpperCase(), 700, 400, 11, Infinity);
const espumante__chandon = new Bebida("espumante".toUpperCase(), "Chandon".toUpperCase(), 750, 1500, 12, Infinity);
const vino__rutini = new Bebida("vino".toUpperCase(), "Rutini".toUpperCase(), 750, 2000, 13, Infinity);
const cerveza__corona = new Bebida("cerveza".toUpperCase(), "Corona".toUpperCase(), 710, 400, 14, Infinity);
const whisky__chivas = new Bebida("tequila".toUpperCase(), "Chivas".toUpperCase(), 500, 3000, 15, Infinity);
const gin__larios = new Bebida("gin".toUpperCase(), "Larios".toUpperCase(), 750, 2000, 16, Infinity);
const cerveza__patagonia__lata = new Bebida("cerveza".toUpperCase(), "Patagonia".toUpperCase(), 410, 180, 17, Infinity);
const cerveza__quilmes__lata = new Bebida("cerveza".toUpperCase(), "Quilmes".toUpperCase(), 473, 120, 18, Infinity);
const cerveza__heineken__lata = new Bebida("cerveza".toUpperCase(), "Heineken".toUpperCase(), 473, 200, 19, Infinity);
const cerveza__grolsch__lata = new Bebida("cerveza".toUpperCase(), "Grolsch".toUpperCase(), 473, 220, 24, Infinity);
const gaseosa__coca = new Bebida("gaseosa".toUpperCase(), "Coca Cola".toUpperCase(), 2250, 200, 20, Infinity);
const agua__glaciar = new Bebida("agua".toUpperCase(), "Glaciar".toUpperCase(), 1500, 120, 21, Infinity);
const jugo__cepita__naranja = new Bebida("jugo".toUpperCase(), "Cepita Naranja".toUpperCase(), 1000, 120, 22, Infinity);
const jugo__cepita__manzana = new Bebida("jugo".toUpperCase(), "Cepita Manzana".toUpperCase(), 1000, 120, 23, Infinity);

const combo1 = new Combo([cerveza__quilmes, cerveza__heineken, fernet__branca, whisky__vat], 20, "1", 99);
const combo2 = new Combo([cerveza__corona, cerveza__heineken, whisky__vat, vodka__skyy], 20, "2", 98);
const combo3 = new Combo([whisky__chivas, whisky__vat, vodka__skyy, vodka__smirnoff], 20, "3", 97);
const combo4 = new Combo([vino__rutini, vino__norton, vodka__smirnoff, cerveza__heineken], 20, "4", 96);
const combo5 = new Combo([whisky__chivas, vino__rutini, licor__jager, espumante__chandon], 20, "5", 95);
const combo6 = new Combo([licor__jager, cerveza__heineken, ron__morgan, whisky__vat], 20, "6", 94);
const combo7 = new Combo([vino__norton, vino__rutini, espumante__chandon, vodka__smirnoff], 20, "7", 93);
const combo8 = new Combo([cerveza__quilmes, cerveza__quilmes, cerveza__heineken, cerveza__heineken], 20, "8", 92);
const combo9 = new Combo([fernet__branca, gaseosa__coca, vodka__smirnoff, jugo__cepita__naranja], 20, "9", 91);
const combo10 = new Combo([cerveza__heineken, cerveza__quilmes, ron__morgan, jugo__cepita__manzana], 20, "10", 90);
const combo11 = new Combo([cerveza__quilmes, cerveza__brahma, cerveza__heineken, cerveza__corona], 20, "11", 89);
const combo12 = new Combo([gaseosa__coca, jugo__cepita__naranja, jugo__cepita__manzana, agua__glaciar], 20, "12", 88);

stock1.addStockItem(cerveza__quilmes);
stock1.addStockItem(cerveza__heineken);
stock1.addStockItem(cerveza__brahma);
stock1.addStockItem(cerveza__corona);
stock1.addStockItem(vino__norton);
stock1.addStockItem(vino__rutini);
stock1.addStockItem(espumante__chandon);
stock1.addStockItem(fernet__branca);
stock1.addStockItem(vodka__smirnoff);
stock1.addStockItem(vodka__skyy);
stock1.addStockItem(whisky__vat);
stock1.addStockItem(whisky__chivas);
stock1.addStockItem(licor__jager);
stock1.addStockItem(ron__morgan);
stock1.addStockItem(tequila__azteca);
stock1.addStockItem(gin__larios);
stock1.addStockItem(cerveza__patagonia__lata);
stock1.addStockItem(cerveza__quilmes__lata);
stock1.addStockItem(cerveza__heineken__lata);
stock1.addStockItem(cerveza__grolsch__lata);
stock1.addStockItem(gaseosa__coca);
stock1.addStockItem(agua__glaciar);
stock1.addStockItem(jugo__cepita__naranja);
stock1.addStockItem(jugo__cepita__manzana);

stock1.addFeaturedItem(cerveza__quilmes);
stock1.addFeaturedItem(fernet__branca);
stock1.addFeaturedItem(licor__jager);
stock1.addFeaturedItem(whisky__vat);
stock1.addFeaturedItem(vino__norton);
stock1.addFeaturedItem(cerveza__heineken);
stock1.addFeaturedItem(ron__morgan);
stock1.addFeaturedItem(vodka__smirnoff);
stock1.addFeaturedItem(vino__rutini);
stock1.addFeaturedItem(espumante__chandon);
stock1.addFeaturedItem(cerveza__corona);
stock1.addFeaturedItem(vodka__skyy);

stock1.addComboTotal(combo1);
stock1.addComboTotal(combo2);
stock1.addComboTotal(combo3);
stock1.addComboTotal(combo4);
stock1.addComboTotal(combo5);
stock1.addComboTotal(combo6);
stock1.addComboTotal(combo7);
stock1.addComboTotal(combo8);
stock1.addComboTotal(combo9);
stock1.addComboTotal(combo10);
stock1.addComboTotal(combo11);
stock1.addComboTotal(combo12);

stock1.addComboFeatured(combo1);
stock1.addComboFeatured(combo2);
stock1.addComboFeatured(combo3);
stock1.addComboFeatured(combo4);

stock1.arrayCombosTotal.forEach(combo => combo.calcPrecioTotal());


/* cargar shopList, si existe, del storage */
if (localStorage.getItem("shopList")){
    shopCart1.shopList = JSON.parse(localStorage.getItem("shopList"));
    for (const element of shopCart1.shopList){
        for (const bebida of stock1.arrayBebidasTotal){
            if (element == bebida.id){
                bebida.stock--;
            }
        }
    }
    shopCart1.subTotalCalc();
} 


/* agregar las cards de productos featured al html, según los productos que hayan en el inventario (uso forEach en vez de map, ya que no necesito retornar nada) */
let productosFeatured = document.getElementById("productosFeatured");
stock1.arrayBebidasFeatured.forEach(bebidas => {
    let producto = document.createElement("div");
    producto.classList.add("productos__producto");
    producto.innerHTML = `
    <p>${bebidas.tipo}</p>
    <h2>${bebidas.marca}</h2>
    <p>${bebidas.contNeto}ml</p>
    <p class="${bebidas.nombre.replace(/\s/g,"")}__stock">stock: ${bebidas.stock}</p>    
    <h3>$${bebidas.precio}</h3>
    <div class="productos__producto__buttonContainer">
    <button class="${bebidas.nombre.replace(/\s/g,"")}__menos__productsFeatured">-</button>
    <button class="${bebidas.nombre.replace(/\s/g,"")}__mas__productsFeatured">+</button>
    </div>
    `;
    
    productosFeatured.appendChild(producto);

    let bebida__menos = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}__menos__productsFeatured`);
    let bebida__mas = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}__mas__productsFeatured`);
    bebida__menos.addEventListener("click", ()=>{shopCart1.removeItem(bebidas.id)});
    bebida__mas.addEventListener("click", ()=>{shopCart1.addItem(bebidas.id)});
}); 

/* carrito - icono */
let carrito__numero = document.querySelector(".carrito__numero");
carrito__numero.innerHTML = shopCart1.shopList.length;

let carrito__total = document.querySelector(".carrito__total");
carrito__total.innerHTML = `$${shopCart1.subTotal}`;



/* carrito - lista de compras */

function toggleLista(){
    let carrito__lista = document.querySelector(".carrito__lista");
    carrito__lista.classList.toggle("carrito__lista__translated");

    /* cambio la visibilidad al togglear la lista para facilitar navegacion por teclado cuando la lista esta cerrada */
    if (carrito__lista.classList.contains("visible")){
        setTimeout(()=>carrito__lista.classList.remove("visible"), 400);
    } else{
        carrito__lista.classList.add("visible");
    }
    
    let carrito__lista__ul = document.querySelector(".carrito__lista__ul");
    carrito__lista__ul.innerHTML = "";
    let shopListWithoutDuplicates = new Set (shopCart1.shopList);
    shopListWithoutDuplicates = Array.from(shopListWithoutDuplicates);
    
    for (const items of shopListWithoutDuplicates){
        for (const bebidas of stock1.arrayBebidasTotal){
            if (items == bebidas.id){
                let carrito__newLi = document.createElement("li");
                carrito__newLi.innerHTML = `
                <span>${bebidas.tipo}<br>${bebidas.marca}</span>
                <span>${bebidas.contNeto}ml</span>
                <span>$${bebidas.precio}</span>
                <span>(x${bebidas.inShopList()})</span>
                <span>$${bebidas.precio * bebidas.inShopList()}</span>
                `;
                carrito__lista__ul.appendChild(carrito__newLi);
            }
        }

        for (const combos of stock1.arrayCombosTotal){
            if (items == combos.id){
                let carrito__newLi = document.createElement("li");
                carrito__newLi.innerHTML = `
                <span>COMBO<br>${combos.nombre}</span>
                <span>-</span>
                <span>$${combos.precioTotal}</span>
                <span>(x${combos.inShopList()})</span>
                <span>$${combos.precioTotal * combos.inShopList()}</span>
                `;
                carrito__lista__ul.appendChild(carrito__newLi);
            }
        }
    }

    shopCart1.subTotalCalc();
    let carrito__total = document.querySelector(".carrito__lista__total__number");
    carrito__total.innerHTML = `$${shopCart1.subTotal}`
}

/* carrito evento - toggle list */
let carrito = document.querySelector(".carrito");
carrito.addEventListener("keydown", (e)=>{if(e.keyCode == 13){toggleLista()}});
carrito.addEventListener("click", toggleLista);

let carrito__cerrar = document.querySelector(".carrito__lista__cerrar");
carrito__cerrar.onclick = toggleLista;

/* carrito - vaciar */
function vaciarCompra(){
    localStorage.removeItem("shopList");
    window.location.reload();
}

let carrito__vaciar = document.querySelector(".carrito__lista__vaciar");
carrito__vaciar.onclick = vaciarCompra;

/* carrito - checkout */
function checkout(){
    alert(`***CHECKOUT***\nTOTAL: $${shopCart1.subTotal}\nConfirmación, envío y medios de pago`);
}

let carrito__checkout = document.querySelector(".carrito__lista__checkout");
carrito__checkout.onclick = checkout;



/* sección productos */

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

function toggleProductos(){
    let productos = document.querySelector(".productosPage");
    productos.classList.toggle("carrito__lista__translated");
    productos.style.overflowY = "scroll";
    
    let nav__productos = document.querySelector("#nav__productos");
    nav__productos.classList.toggle("active");

    let nav__ofertas = document.querySelector("#nav__ofertas");
    if (nav__ofertas.classList.contains("active")){
        nav__ofertas.classList.toggle("active");
    }

    
    if (productos.classList.contains("visible")){
        setTimeout(()=>productos.classList.remove("visible"), 200);
    } else{
        productos.classList.add("visible");
    }

    let ofertas = document.querySelector(".ofertasPage");
    if (ofertas.classList.contains("carrito__lista__translated")){
        ofertas.classList.toggle("carrito__lista__translated");
        setTimeout(()=>ofertas.classList.remove("visible"), 200);
    }

    /* al abrir la seccion, esconder el overflow del body y compensar con margen por el ancho de la scrollbar (que desaparece) */
    
    let nav__ul = document.querySelector(".nav__ul");
    let carrito = document.querySelector(".carrito");
    let scrollbar__width = getScrollbarWidth();

    if(document.documentElement.style.overflowY == "hidden"){
        let ofertasPage = document.querySelector(".ofertasPage");
        if (!ofertasPage.classList.contains("visible")){
            document.documentElement.style.overflowY = "scroll";
            productos.style.overflowY = "hidden";
            document.documentElement.style.marginRight = "0";
            nav__ul.style.marginRight = "0";
            carrito.style.right = "10px";
        } 
    } else{
        document.documentElement.style.overflowY = "hidden";
        document.documentElement.style.marginRight = `${scrollbar__width}px`;
        nav__ul.style.marginRight = `${scrollbar__width}px`;
        carrito.style.right = `${scrollbar__width + 10}px`;
    }
}

/* cards de la seccion productos */
let productos = document.getElementById("productos");
stock1.arrayBebidasTotal.forEach(bebidas => {
    let producto = document.createElement("div");
    producto.classList.add("productos__producto");
    producto.innerHTML = `
    <p>${bebidas.tipo}</p>
    <h2>${bebidas.marca}</h2>
    <p>${bebidas.contNeto}ml</p>
    <p class="${bebidas.nombre.replace(/\s/g,"")}__stock">stock: ${bebidas.stock}</p>    
    <h3>$${bebidas.precio}</h3>
    <div class="productos__producto__buttonContainer">
    <button class="${bebidas.nombre.replace(/\s/g,"")}__menos__productsTotal">-</button>
    <button class="${bebidas.nombre.replace(/\s/g,"")}__mas__productsTotal">+</button>
    </div>
    `;

    productos.appendChild(producto);

    let bebida__menos = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}__menos__productsTotal`);
    let bebida__mas = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}__mas__productsTotal`);
    bebida__menos.addEventListener("click", ()=>{shopCart1.removeItem(bebidas.id)});
    bebida__mas.addEventListener("click", ()=>{shopCart1.addItem(bebidas.id)});
}); 

/* event link productos */
let link__productos = document.getElementById("nav__productos");
link__productos.onclick = toggleProductos;

let footer__link__productos = document.getElementById("footer__nav__productos");
footer__link__productos.onclick = toggleProductos;

let cerrar__productos = document.querySelector(".carrito__lista__cerrar--productos");
cerrar__productos.onclick = toggleProductos;

let cerrar__productos__title = document.querySelector("#header__title__productos");
cerrar__productos__title.onclick = toggleProductos;


/* sección ofertas/combos */
function toggleOfertas(){
    let ofertas = document.querySelector(".ofertasPage");
    ofertas.classList.toggle("carrito__lista__translated");
    ofertas.style.overflowY = "scroll";
    
    let nav__ofertas = document.querySelector("#nav__ofertas");
    nav__ofertas.classList.toggle("active");

    let nav__productos = document.querySelector("#nav__productos");
    if (nav__productos.classList.contains("active")){
        nav__productos.classList.toggle("active");
    }

    if (ofertas.classList.contains("visible")){
        setTimeout(()=>ofertas.classList.remove("visible"), 200);
    } else{
        ofertas.classList.add("visible");
    }

    let productos = document.querySelector(".productosPage");
    if (productos.classList.contains("carrito__lista__translated")){
        productos.classList.toggle("carrito__lista__translated");
        setTimeout(()=>productos.classList.remove("visible"), 200);
    }
    

     /* al abrir la seccion, esconder el overflow del body y compensar con margen por el ancho de la scrollbar (que desaparece) */
    
        let nav__ul = document.querySelector(".nav__ul");
        let carrito = document.querySelector(".carrito");
        let scrollbar__width = getScrollbarWidth();

        if(document.documentElement.style.overflowY == "hidden"){
            let productosPage = document.querySelector(".productosPage");
            if (!productosPage.classList.contains("visible")){
                document.documentElement.style.overflowY = "scroll";
                ofertas.style.overflowY = "hidden";
                document.documentElement.style.marginRight = "0";
                nav__ul.style.marginRight = "0";
                carrito.style.right = "10px";
            } 
        } else{
            document.documentElement.style.overflowY = "hidden";
            document.documentElement.style.marginRight = `${scrollbar__width}px`;
            nav__ul.style.marginRight = `${scrollbar__width}px`;
            carrito.style.right = `${scrollbar__width + 10}px`;
        }
}

/* cards de la seccion ofertas/combos */
let ofertas = document.getElementById("ofertas");
stock1.arrayCombosTotal.forEach(combos => {

    let wrapper__item = document.createElement("div");
    wrapper__item.classList.add("ofertasFeatured__wrapper__item");

    wrapper__item.innerHTML = `
    <h3><span>COMBO ${combos.nombre} &#8674; </span>$${combos.precioTotal}</h3>`;

    for (let j=0; j<combos.productos.length;j++){
        let combos__item = combos.productos[j];
        wrapper__item.innerHTML += `
        <p>${combos__item.tipo} ${combos__item.marca} ${combos__item.contNeto}ml</p>
        `
    }

    wrapper__item.innerHTML += `
    <div class="ofertasFeatured__wrapper__item__buttonContainer">
    <button class="COMBO${combos.nombre.replace(/\s/g,"")}__menos__combosTotal">-</button>
    <button class="COMBO${combos.nombre.replace(/\s/g,"")}__mas__combosTotal">+</button>
    </div>
    `
  
    ofertas.appendChild(wrapper__item);

    let combo__menos = document.querySelector(`.COMBO${combos.nombre.replace(/\s/g,"")}__menos__combosTotal`);
    let combo__mas = document.querySelector(`.COMBO${combos.nombre.replace(/\s/g,"")}__mas__combosTotal`);
    combo__menos.addEventListener("click", ()=>{shopCart1.removeItem(combos.id)});
    combo__mas.addEventListener("click", ()=>{shopCart1.addItem(combos.id)});

}); 

/* event link ofertas/combos */
let link__ofertas = document.getElementById("nav__ofertas");
link__ofertas.onclick = toggleOfertas;

let footer__link__ofertas = document.getElementById("footer__nav__ofertas");
footer__link__ofertas.onclick = toggleOfertas;

let cerrar__ofertas = document.querySelector(".carrito__lista__cerrar--ofertas");
cerrar__ofertas.onclick = toggleOfertas;

let cerrar__ofertas__title = document.querySelector("#header__title__ofertas");
cerrar__ofertas__title.onclick = toggleOfertas;


/* ofertasFeatured */
let ofertasFeatured = document.querySelector(".ofertasFeatured__wrapper");

for (let i=0; i<stock1.arrayCombosFeatured.length; i++){
    let combo = stock1.arrayCombosFeatured[i];

    let wrapper__item = document.createElement("div");
    wrapper__item.classList.add("ofertasFeatured__wrapper__item");

    wrapper__item.innerHTML = `
    <h3><span>COMBO ${combo.nombre} &#8674; </span>$${combo.precioTotal}</h3>`;

    for (let j=0; j<combo.productos.length;j++){
        let combo__item = combo.productos[j];
        wrapper__item.innerHTML += `
        <p>${combo__item.tipo} ${combo__item.marca} ${combo__item.contNeto}ml</p>
        `
    }

    wrapper__item.innerHTML += `
    <div class="ofertasFeatured__wrapper__item__buttonContainer">
    <button class="COMBO${combo.nombre.replace(/\s/g,"")}__menos__combosFeatured" onclick="shopCart1.removeItem(${combo.id})">-</button>
    <button class="COMBO${combo.nombre.replace(/\s/g,"")}__mas__combosFeatured" onclick="shopCart1.addItem(${combo.id})">+</button>
    </div>
    `
    
    ofertasFeatured.appendChild(wrapper__item);

    let combo__menos = document.querySelector(`.COMBO${combo.nombre.replace(/\s/g,"")}__menos__combosFeatured`);
    let combo__mas = document.querySelector(`.COMBO${combo.nombre.replace(/\s/g,"")}__mas__combosFeatured`);
    combo__menos.addEventListener("click", ()=>{shopCart1.removeItem(combo.id)});
    combo__mas.addEventListener("click", ()=>{shopCart1.addItem(combo.id)});
}


/* validation */
if (localStorage.getItem("validation")){
    if (localStorage.getItem("validation") == 1){
        let validation = document.querySelector(".validation");
        validation.classList.add("validation__translated");
        validation.style.display = "none";
        document.documentElement.style.overflowY = "scroll";
    }
}

function validationYes(){
    localStorage.setItem("validation", 1);
    let validation = document.querySelector(".validation");

    validation.classList.add("validation__translated");
    document.documentElement.style.overflowY = "scroll";

    /* al aparecer el scroll que estaba escondido, ajusto la posicion de los elementos de esta placa acordes al tamaño de la scrolbar para que no parezca que se mueven */
    let validation__header__info = document.getElementById("validation__header__info");
    let validation__age = document.querySelector(".validation__age");
    let scrollbar__width = getScrollbarWidth();
    validation__header__info.style.marginLeft = `${scrollbar__width}px`;
    validation__age.style.marginLeft = `${scrollbar__width}px`;
    
    setTimeout(()=>validation.style.display = "none", 800);
}

function validationNo(){
    localStorage.setItem("validation", 0);
    let validation = document.querySelector(".validation");
    let denied = document.querySelector(".validation__denied");
    denied.style.animation = "denied 6000ms";
    validation.appendChild(denied);
}

let validation__yes = document.querySelector(".validation__age__yes");
let validation__no = document.querySelector(".validation__age__no");
validation__yes.addEventListener("click", validationYes);
validation__no.addEventListener("click", validationNo);


/* toggle dark light mode */
let lightMode = document.querySelector(".nav__toggleLightDark__light");
let darkMode = document.querySelector(".nav__toggleLightDark__dark");

let colorMode = localStorage.getItem("colorMode");
/* if (colorMode){
    switch (colorMode) {
        case "light":
            document.documentElement.style.setProperty("--color-primero", "rgb(255, 255, 255)");
            document.documentElement.style.setProperty("--color-tercero", "rgb(0, 0, 0)");
            document.documentElement.style.setProperty("--color-tercero-dark", "rgb(30, 30, 30)");
            lightMode.style.display = "none";
            darkMode.style.display = "inline-block";
            localStorage.setItem("colorMode", "light");
            break;
    
        default:
            document.documentElement.style.setProperty("--color-primero", "rgb(0, 0, 0)");
            document.documentElement.style.setProperty("--color-tercero", "rgb(255, 255, 255)");
            document.documentElement.style.setProperty("--color-tercero-dark", "rgb(220, 220, 220)");
            darkMode.style.display = "none";
            lightMode.style.display = "inline-block";
            console.log("test")
            localStorage.setItem("colorMode", "dark");
            break;
    }
} */

lightMode.addEventListener("click", ()=>{
    let tempPrimero = getComputedStyle(document.documentElement).getPropertyValue("--color-primero");
    let tempTercero = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero");
    let tempPrimeroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-primero-dark");
    
    document.documentElement.style.setProperty("--color-primero", tempTercero);
    document.documentElement.style.setProperty("--color-tercero", tempPrimero);
    document.documentElement.style.setProperty("--color-tercero-dark", tempPrimeroDark);

    lightMode.style.display = "none";
    darkMode.style.display = "inline-block";
    localStorage.setItem("colorMode", "light");
})

darkMode.addEventListener("click", ()=>{
    let tempPrimero = getComputedStyle(document.documentElement).getPropertyValue("--color-primero");
    let tempTercero = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero");
    let tempPrimeroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-primero-dark");

    document.documentElement.style.setProperty("--color-primero", tempTercero);
    document.documentElement.style.setProperty("--color-tercero", tempPrimero);
    document.documentElement.style.setProperty("--color-tercero-dark", tempPrimeroDark);

    darkMode.style.display = "none";
    lightMode.style.display = "inline-block";
    localStorage.setItem("colorMode", "dark");
})