/* agregar bebidas al stock. esta operacion, idealmente, deberia ser realizada por un usuario administrador mediante input. por el momento, al no manejar usuarios ni tener una forma de guardar la info en una base de datos, inicializo el stock manualmente */
/* paso un stock de Infinity para cada bebida (las bebidas tienen la funcionalidad de pasar un stock y al agregar o quitar al carrito los suma o resta del stock. pero esta funcionalidad tiene mas sentido de ser implementa en un backend en realidad, asi que deje el stock como infinito directamente en vez de eliminarlo) */
const shopCart1 = new ShoppingCart(new Date(), 001);
const stock1 = new Stock(new Date(), 001);

const cerveza__quilmes = new Bebida("cervezas", "cerveza".toUpperCase(), "Quilmes".toUpperCase(), 1000, 300, 01, Infinity, `url("../img/stockPhotos/cervezaQuilmes1000.jpg")`);
const cerveza__brahma = new Bebida("cervezas", "cerveza".toUpperCase(), "Brahma".toUpperCase(), 1000, 200, 02, Infinity, `url("../img/stockPhotos/cervezaBrahma1000.jpg")`);
const cerveza__heineken = new Bebida("cervezas", "cerveza".toUpperCase(), "Heineken".toUpperCase(), 1000, 300, 03, Infinity, `url("../img/stockPhotos/cervezaHeineken1000.jpg")`);
const vodka__smirnoff = new Bebida("aguardientes", "vodka".toUpperCase(), "Smirnoff".toUpperCase(), 750, 1000, 04, Infinity, `url("../img/stockPhotos/vodkaSmirnoff750.jpg")`);
const whisky__vat = new Bebida("aguardientes", "whisky".toUpperCase(), "Vat 69".toUpperCase(), 750, 1200, 05, Infinity, `url("../img/stockPhotos/whiskyVat750.jpg")`);
const ron__morgan = new Bebida("aguardientes", "ron".toUpperCase(), "Morgan".toUpperCase(), 750, 1200, 06, Infinity, `url("../img/stockPhotos/ronMorgan750.jpg")`);
const fernet__branca = new Bebida("licores", "fernet".toUpperCase(), "Branca".toUpperCase(), 1000, 900, 07, Infinity, `url("../img/stockPhotos/fernetBranca1000.jpg")`);
const tequila__azteca = new Bebida("aguardientes", "tequila".toUpperCase(), "Azteca".toUpperCase(), 1000, 800, 08, Infinity, `url("../img/stockPhotos/tequilaAzteca1000.jpg")`);
const vodka__skyy = new Bebida("aguardientes", "vodka".toUpperCase(), "Skyy".toUpperCase(), 980, 1200, 09, Infinity, `url("../img/stockPhotos/vodkaSkyy750.jpg")`);
const vino__norton__malbec = new Bebida("vinos", "vino malbec".toUpperCase(), "Norton".toUpperCase(), 750, 500, 10, Infinity, `url("../img/stockPhotos/vinoMalbecNorton750.jpg")`);
const licor__jager = new Bebida("licores", "licor".toUpperCase(), "Jäger".toUpperCase(), 700, 2900, 11, Infinity, `url("../img/stockPhotos/licorJager750.jpg")`);
const licor__campari = new Bebida("licores", "licor".toUpperCase(), "Campari".toUpperCase(), 750, 900, 12, Infinity, `url("../img/stockPhotos/licorCampari750.jpg")`);
const vino__rutini__malbec = new Bebida("vinos", "vino malbec".toUpperCase(), "Rutini".toUpperCase(), 750, 2000, 13, Infinity, `url("../img/stockPhotos/vinoMalbecRutini750.jpg")`);
const cerveza__corona = new Bebida("cervezas", "cerveza".toUpperCase(), "Corona".toUpperCase(), 710, 400, 14, Infinity, `url("../img/stockPhotos/cervezaCorona710.jpg")`);
const whisky__chivas = new Bebida("aguardientes", "whisky".toUpperCase(), "Chivas".toUpperCase(), 750, 3000, 15, Infinity, `url("../img/stockPhotos/whiskyChivas750.jpg")`);
const gin__larios = new Bebida("aguardientes", "gin".toUpperCase(), "Larios".toUpperCase(), 1000, 2200, 16, Infinity, `url("../img/stockPhotos/ginLarios1000.jpg")`);
const vermouth__cinzano = new Bebida("licores", "vermouth".toUpperCase(), "Cinzano".toUpperCase(), 950, 1000, 17, Infinity, `url("../img/stockPhotos/vermouthCinzano950.jpg")`);
const cerveza__quilmes__lata = new Bebida("cervezas", "cerveza".toUpperCase(), "Quilmes".toUpperCase(), 473, 120, 18, Infinity, `url("../img/stockPhotos/cervezaQuilmes473.jpg")`);
const cerveza__heineken__lata = new Bebida("cervezas", "cerveza".toUpperCase(), "Heineken".toUpperCase(), 473, 200, 19, Infinity, `url("../img/stockPhotos/cervezaHeineken473.jpg")`);
const gaseosa__coca = new Bebida("sinalcohol", "gaseosa".toUpperCase(), "Coca Cola".toUpperCase(), 1500, 150, 20, Infinity, `url("../img/stockPhotos/gaseosaCoca1500.jpg")`);
const agua__glaciar = new Bebida("sinalcohol", "agua".toUpperCase(), "Glaciar".toUpperCase(), 1500, 120, 21, Infinity, `url("../img/stockPhotos/aguaGlaciar1000.jpg")`);
const jugo__cepita__naranja = new Bebida("sinalcohol", "jugo".toUpperCase(), "Cepita Naranja".toUpperCase(), 1000, 120, 22, Infinity, `url("../img/stockPhotos/jugoCepitaNaranja1000.jpg")`);
const jugo__cepita__manzana = new Bebida("sinalcohol", "jugo".toUpperCase(), "Cepita Manzana".toUpperCase(), 1000, 120, 23, Infinity, `url("../img/stockPhotos/jugoCepitaManzana1000.jpg")`);
const cerveza__brahma__lata = new Bebida("cervezas", "cerveza".toUpperCase(), "Brahma".toUpperCase(), 473, 220, 24, Infinity, `url("../img/stockPhotos/cervezaBrahma473.jpg")`);
const espumante__chandon__extra = new Bebida("vinos", "espumante extra brut".toUpperCase(), "Chandon".toUpperCase(), 750, 1200, 25, Infinity, `url("../img/stockPhotos/espumanteChandonExtraBrut750.jpg")`);
const espumante__mumm__extra = new Bebida("vinos", "espumante extra brut".toUpperCase(), "Mumm".toUpperCase(), 750, 1200, 25, Infinity, `url("../img/stockPhotos/espumanteMummExtraBrut750.jpg")`);

const combo1 = new Combo([cerveza__quilmes, cerveza__heineken, fernet__branca, whisky__vat], 20, "1", 99);
const combo2 = new Combo([cerveza__corona, cerveza__heineken, whisky__vat, vodka__skyy], 20, "2", 98);
const combo3 = new Combo([whisky__chivas, whisky__vat, vodka__skyy, vodka__smirnoff], 20, "3", 97);
const combo4 = new Combo([vino__norton__malbec, vino__rutini__malbec, licor__campari, vodka__smirnoff], 20, "4", 93);
const combo5 = new Combo([whisky__chivas, vino__rutini__malbec, licor__jager, licor__campari], 20, "5", 95);
const combo6 = new Combo([licor__jager, cerveza__heineken, ron__morgan, whisky__vat], 20, "6", 94);
const combo7 = new Combo([vino__rutini__malbec, vino__norton__malbec, espumante__chandon__extra, espumante__mumm__extra], 20, "7", 96);
const combo8 = new Combo([cerveza__quilmes, cerveza__quilmes, cerveza__heineken, cerveza__heineken], 20, "8", 92);
const combo9 = new Combo([fernet__branca, gaseosa__coca, vodka__smirnoff, jugo__cepita__naranja], 20, "9", 91);
const combo10 = new Combo([cerveza__heineken, cerveza__quilmes, ron__morgan, jugo__cepita__manzana], 20, "10", 90);
const combo11 = new Combo([cerveza__quilmes, cerveza__brahma, cerveza__heineken, cerveza__corona], 20, "11", 89);
const combo12 = new Combo([gaseosa__coca, jugo__cepita__naranja, jugo__cepita__manzana, agua__glaciar], 20, "12", 88);


stock1.addStockItem(cerveza__heineken);
stock1.addStockItem(vodka__smirnoff);
stock1.addStockItem(licor__campari);
stock1.addStockItem(fernet__branca);
stock1.addStockItem(cerveza__corona);
stock1.addStockItem(ron__morgan);
stock1.addStockItem(vodka__skyy);
stock1.addStockItem(vino__norton__malbec);
stock1.addStockItem(vino__rutini__malbec);
stock1.addStockItem(espumante__chandon__extra);
stock1.addStockItem(espumante__mumm__extra);
stock1.addStockItem(whisky__vat);
stock1.addStockItem(whisky__chivas);
stock1.addStockItem(licor__jager);
stock1.addStockItem(cerveza__quilmes);
stock1.addStockItem(cerveza__brahma);
stock1.addStockItem(tequila__azteca);
stock1.addStockItem(gin__larios);
stock1.addStockItem(vermouth__cinzano);
stock1.addStockItem(cerveza__quilmes__lata);
stock1.addStockItem(cerveza__heineken__lata);
stock1.addStockItem(cerveza__brahma__lata);
stock1.addStockItem(gaseosa__coca);
stock1.addStockItem(agua__glaciar);
stock1.addStockItem(jugo__cepita__naranja);
stock1.addStockItem(jugo__cepita__manzana);

stock1.addFeaturedItem(cerveza__heineken);
stock1.addFeaturedItem(fernet__branca);
stock1.addFeaturedItem(licor__jager);
stock1.addFeaturedItem(ron__morgan);
stock1.addFeaturedItem(whisky__vat);
stock1.addFeaturedItem(vodka__skyy);
stock1.addFeaturedItem(vino__rutini__malbec);
stock1.addFeaturedItem(cerveza__quilmes);
stock1.addFeaturedItem(espumante__mumm__extra);
stock1.addFeaturedItem(vodka__smirnoff);
stock1.addFeaturedItem(cerveza__corona);
stock1.addFeaturedItem(licor__campari);

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
    producto.classList.add(`producto--${bebidas.id}`);

    let stockText;
    if (bebidas.outOfStock()){
        stockText = "Fuera de stock";
    } else{
        stockText = "En stock";
    }

    producto.innerHTML = `
    <p>${bebidas.tipo}</p>
    <h2>${bebidas.marca}</h2>
    <p>${bebidas.contNeto}ml</p>
    <p class="${bebidas.nombre.replace(/\s/g,"")}__stock">${stockText}</p>    
    <h3>$${bebidas.precio}</h3>
    <div class="productos__producto__buttonContainer">
    <button class="${bebidas.nombre.replace(/\s/g,"")}__menos__productsFeatured">-</button>
    <button class="${bebidas.nombre.replace(/\s/g,"")}__mas__productsFeatured">+</button>
    </div>
    `;
    
    producto.style.setProperty("--stock-image", bebidas.img);
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
    alert(`***CHECKOUT***\nTOTAL: $${shopCart1.subTotal}\nEnvío -> Medios de pago -> Confirmación`);
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
    
    document.getElementById("productosPage__filter").value = "todas"; 
    productFilter();

    let nav__productos = document.querySelector("#nav__productos");
    nav__productos.classList.toggle("active");

    let nav__ofertas = document.querySelector("#nav__ofertas");
    if (nav__ofertas.classList.contains("active")){
        nav__ofertas.classList.toggle("active");
    }

    if (productos.classList.contains("visible")){
        setTimeout(()=>{productos.classList.remove("visible"); productos.scrollTo(0,0)}, 200);
    } else{
        productos.classList.add("visible");
    }

    let ofertas = document.querySelector(".ofertasPage");
    if (ofertas.classList.contains("carrito__lista__translated")){
        ofertas.classList.toggle("carrito__lista__translated");
        setTimeout(()=>{ofertas.classList.remove("visible"); ofertas.scrollTo(0,0)}, 200);
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
    producto.classList.add(`producto--${bebidas.id}`);

    let stockText;
    if (bebidas.outOfStock()){
        stockText = "Fuera de stock";
    } else{
        stockText = "En stock";
    }

    producto.innerHTML = `
    <p>${bebidas.tipo}</p>
    <h2>${bebidas.marca}</h2>
    <p>${bebidas.contNeto}ml</p>
    <p class="${bebidas.nombre.replace(/\s/g,"")}__stock">${stockText}</p>    
    <h3>$${bebidas.precio}</h3>
    <div class="productos__producto__buttonContainer">
    <button class="${bebidas.nombre.replace(/\s/g,"")}__menos__productsTotal">-</button>
    <button class="${bebidas.nombre.replace(/\s/g,"")}__mas__productsTotal">+</button>
    </div>
    `;

    producto.style.setProperty("--stock-image", bebidas.img);
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
    
    if (ofertas.classList.contains("carrito__lista__translated")){
        ofertas.scrollTo(0,0);
    }
    
    let nav__ofertas = document.querySelector("#nav__ofertas");
    nav__ofertas.classList.toggle("active");

    let nav__productos = document.querySelector("#nav__productos");
    if (nav__productos.classList.contains("active")){
        nav__productos.classList.toggle("active");
    }

    if (ofertas.classList.contains("visible")){
        setTimeout(()=>{ofertas.classList.remove("visible"); ofertas.scrollTo(0,0)}, 200);
    } else{
        ofertas.classList.add("visible");
    }

    let productos = document.querySelector(".productosPage");
    if (productos.classList.contains("carrito__lista__translated")){
        productos.classList.toggle("carrito__lista__translated");
        setTimeout(()=>{productos.classList.remove("visible"); productos.scrollTo(0,0)}, 200);
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
    <button class="COMBO${combo.nombre.replace(/\s/g,"")}__menos__combosFeatured">-</button>
    <button class="COMBO${combo.nombre.replace(/\s/g,"")}__mas__combosFeatured">+</button>
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
if (colorMode){
    switch (colorMode) {
        case "light":
            let tempPrimero = getComputedStyle(document.documentElement).getPropertyValue("--color-primero");
            let tempTercero = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero");
            let tempPrimeroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-primero-dark");
            let tempTerceroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero-dark");
            let tempPrimeroRgb = getComputedStyle(document.documentElement).getPropertyValue("--color-primero-rgb");
            let tempTerceroRgb = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero-rgb");
            let tempBackgroundPrimero = getComputedStyle(document.documentElement).getPropertyValue("--color-background-primero");
            let tempBackgroundSegundo = getComputedStyle(document.documentElement).getPropertyValue("--color-background-segundo");
           
            
            document.documentElement.style.setProperty("--color-primero", tempTercero);
            document.documentElement.style.setProperty("--color-tercero", tempPrimero);
            document.documentElement.style.setProperty("--color-primero-dark", tempTerceroDark);
            document.documentElement.style.setProperty("--color-tercero-dark", tempPrimeroDark);
            document.documentElement.style.setProperty("--color-primero-rgb", tempTerceroRgb);
            document.documentElement.style.setProperty("--color-tercero-rgb", tempPrimeroRgb);
            document.documentElement.style.setProperty("--color-background-primero", tempBackgroundSegundo);
            document.documentElement.style.setProperty("--color-background-segundo", tempBackgroundPrimero);

            lightMode.style.display = "none";
            darkMode.style.display = "inline-block";
            break;
    
        default:
            break;
    }
}

lightMode.addEventListener("click", ()=>{
    let tempPrimero = getComputedStyle(document.documentElement).getPropertyValue("--color-primero");
    let tempTercero = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero");
    let tempPrimeroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-primero-dark");
    let tempTerceroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero-dark");
    let tempPrimeroRgb = getComputedStyle(document.documentElement).getPropertyValue("--color-primero-rgb");
    let tempTerceroRgb = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero-rgb");
    let tempBackgroundPrimero = getComputedStyle(document.documentElement).getPropertyValue("--color-background-primero");
    let tempBackgroundSegundo = getComputedStyle(document.documentElement).getPropertyValue("--color-background-segundo");
   
    
    document.documentElement.style.setProperty("--color-primero", tempTercero);
    document.documentElement.style.setProperty("--color-tercero", tempPrimero);
    document.documentElement.style.setProperty("--color-primero-dark", tempTerceroDark);
    document.documentElement.style.setProperty("--color-tercero-dark", tempPrimeroDark);
    document.documentElement.style.setProperty("--color-primero-rgb", tempTerceroRgb);
    document.documentElement.style.setProperty("--color-tercero-rgb", tempPrimeroRgb);
    document.documentElement.style.setProperty("--color-background-primero", tempBackgroundSegundo);
    document.documentElement.style.setProperty("--color-background-segundo", tempBackgroundPrimero);

    lightMode.style.display = "none";
    darkMode.style.display = "inline-block";
    localStorage.setItem("colorMode", "light");
})

darkMode.addEventListener("click", ()=>{
    let tempPrimero = getComputedStyle(document.documentElement).getPropertyValue("--color-primero");
    let tempTercero = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero");
    let tempPrimeroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-primero-dark");
    let tempTerceroDark = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero-dark");
    let tempPrimeroRgb = getComputedStyle(document.documentElement).getPropertyValue("--color-primero-rgb");
    let tempTerceroRgb = getComputedStyle(document.documentElement).getPropertyValue("--color-tercero-rgb");
    let tempBackgroundPrimero = getComputedStyle(document.documentElement).getPropertyValue("--color-background-primero");
    let tempBackgroundSegundo = getComputedStyle(document.documentElement).getPropertyValue("--color-background-segundo");
   
    
    document.documentElement.style.setProperty("--color-primero", tempTercero);
    document.documentElement.style.setProperty("--color-tercero", tempPrimero);
    document.documentElement.style.setProperty("--color-primero-dark", tempTerceroDark);
    document.documentElement.style.setProperty("--color-tercero-dark", tempPrimeroDark);
    document.documentElement.style.setProperty("--color-primero-rgb", tempTerceroRgb);
    document.documentElement.style.setProperty("--color-tercero-rgb", tempPrimeroRgb);
    document.documentElement.style.setProperty("--color-background-primero", tempBackgroundSegundo);
    document.documentElement.style.setProperty("--color-background-segundo", tempBackgroundPrimero);

    darkMode.style.display = "none";
    lightMode.style.display = "inline-block";
    localStorage.setItem("colorMode", "dark");
})



/* filter productos con js -> lo hice también, mas abajo, usando jquery

let filter = document.querySelector("#productosPage__filter");

filter.addEventListener("change", productFilter);

function productFilter(){
    let arrayBebidasFilter = stock1.arrayBebidasTotal.filter(bebida=> bebida.categoria.toLowerCase() == filter.value);

    if (filter.value == "todas"){
        arrayBebidasFilter = stock1.arrayBebidasTotal;
    }

    productos.innerHTML = "";

    arrayBebidasFilter.forEach(bebidas => {
        let producto = document.createElement("div");
        producto.classList.add("productos__producto");
        producto.classList.add(`producto--${bebidas.id}`);

        let stockText;
        if (bebidas.outOfStock()){
            stockText = "Fuera de stock";
        } else{
            stockText = "En stock";
        }

        producto.innerHTML = `
        <p>${bebidas.tipo}</p>
        <h2>${bebidas.marca}</h2>
        <p>${bebidas.contNeto}ml</p>
        <p class="${bebidas.nombre.replace(/\s/g,"")}__stock">${stockText}</p>    
        <h3>$${bebidas.precio}</h3>
        <div class="productos__producto__buttonContainer">
        <button class="${bebidas.nombre.replace(/\s/g,"")}__menos__productsTotal">-</button>
        <button class="${bebidas.nombre.replace(/\s/g,"")}__mas__productsTotal">+</button>
        </div>
        `;

        producto.style.setProperty("--stock-image", bebidas.img);
        productos.appendChild(producto);

        let bebida__menos = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}__menos__productsTotal`);
        let bebida__mas = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}__mas__productsTotal`);
        bebida__menos.addEventListener("click", ()=>{shopCart1.removeItem(bebidas.id)});
        bebida__mas.addEventListener("click", ()=>{shopCart1.addItem(bebidas.id)});
    });
} */



/* filter productos con jquery*/

let filter = $("#productosPage__filter");
filter.on("change", productFilter);

function productFilter(){
    let arrayBebidasFilter = stock1.arrayBebidasTotal.filter(bebida=> bebida.categoria.toLowerCase() == filter.val());

    if (filter.val() == "todas"){
        arrayBebidasFilter = stock1.arrayBebidasTotal;
    }

    $("#productos").html("");

    arrayBebidasFilter.forEach(bebidas => {
        let producto = document.createElement("div");
        producto.classList.add("productos__producto");
        producto.classList.add(`producto--${bebidas.id}`);

        let stockText;
        if (bebidas.outOfStock()){
            stockText = "Fuera de stock";
        } else{
            stockText = "En stock";
        }

        $("#productos").append(producto);

        $(`.producto--${bebidas.id}`).html(`
        <p>${bebidas.tipo}</p>
        <h2>${bebidas.marca}</h2>
        <p>${bebidas.contNeto}ml</p>
        <p class="${bebidas.nombre.replace(/\s/g,"")}__stock">${stockText}</p>    
        <h3>$${bebidas.precio}</h3>
        <div class="productos__producto__buttonContainer">
        <button class="${bebidas.nombre.replace(/\s/g,"")}__menos__productsTotal">-</button>
        <button class="${bebidas.nombre.replace(/\s/g,"")}__mas__productsTotal">+</button>
        </div>
        `);

        $(`.producto--${bebidas.id}`).css(`--stock-image`, `${bebidas.img}`);
        

        let bebida__menos = $(`.${bebidas.nombre.replace(/\s/g,"")}__menos__productsTotal`);
        let bebida__mas = $(`.${bebidas.nombre.replace(/\s/g,"")}__mas__productsTotal`);
        bebida__menos.on("click", ()=>{shopCart1.removeItem(bebidas.id)});
        bebida__mas.on("click", ()=>{shopCart1.addItem(bebidas.id)});
    });
}
