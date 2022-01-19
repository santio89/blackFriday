/* agregar bebidas al stock. esta operacion, idealmente, deberia ser realizada por un usuario administrador mediante input. por el momento, al no manejar usuarios ni tener una forma de guardar la info en una base de datos, inicializo el stock manualmente */

const shopCart1 = new ShoppingCart(new Date(), 001);
const stock1 = new Stock(new Date(), 001);

const cerveza__quilmes = new Bebida("cerveza".toUpperCase(), "Quilmes".toUpperCase(), 1000, 300, 01, 10);
const cerveza__brahma = new Bebida("cerveza".toUpperCase(), "Brahma".toUpperCase(), 1000, 200, 02, 10);
const cerveza__heineken = new Bebida("cerveza".toUpperCase(), "Heineken".toUpperCase(), 1000, 400, 03, 10);
const vodka__smirnoff = new Bebida("vodka".toUpperCase(), "Smirnoff".toUpperCase(), 750, 1000, 04, 10);
const whisky__vat = new Bebida("whisky".toUpperCase(), "Vat 69".toUpperCase(), 750, 1200, 05, 10);
const ron__morgan = new Bebida("ron".toUpperCase(), "Morgan".toUpperCase(), 750, 1200, 06, 10);
const fernet__branca = new Bebida("fernet".toUpperCase(), "Branca".toUpperCase(), 750, 900, 07, 10);
const tequila__azteca = new Bebida("tequila".toUpperCase(), "Azteca".toUpperCase(), 750, 800, 08, 10);
const vodka__skyy = new Bebida("tequila".toUpperCase(), "Skyy".toUpperCase(), 750, 1200, 09, 10);
const vino__norton = new Bebida("vino".toUpperCase(), "Norton".toUpperCase(), 750, 500, 10, 10);
const licor__jager = new Bebida("licor".toUpperCase(), "Jäger".toUpperCase(), 700, 400, 11, 10);
const espumante__chandon = new Bebida("espumante".toUpperCase(), "Chandon".toUpperCase(), 750, 1500, 12, 10);
const vino__rutini = new Bebida("vino".toUpperCase(), "Rutini".toUpperCase(), 750, 2000, 13, 10);
const cerveza__corona = new Bebida("cerveza".toUpperCase(), "Corona".toUpperCase(), 710, 400, 14, 10);
const whisky__chivas = new Bebida("tequila".toUpperCase(), "Chivas".toUpperCase(), 500, 3000, 15, 10);
const gin__larios = new Bebida("gin".toUpperCase(), "Larios".toUpperCase(), 750, 2000, 16, 10);

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

stock1.addFeaturedItem(cerveza__quilmes);
stock1.addFeaturedItem(fernet__branca);
stock1.addFeaturedItem(licor__jager);
stock1.addFeaturedItem(whisky__vat);
stock1.addFeaturedItem(vino__norton);
stock1.addFeaturedItem(cerveza__heineken);
stock1.addFeaturedItem(ron__morgan);
stock1.addFeaturedItem(vodka__smirnoff);


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


/* agregar las cards de productos al html, según los productos que hayan en el inventario (uso forEach en vez de map, ya que no necesito retornar nada) */
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
    <button class="${bebidas.marca}__menos" onclick="shopCart1.removeItem(${bebidas.id})">-</button>
    <button class="${bebidas.marca}__mas" onclick="shopCart1.addItem(${bebidas.id})">+</button>
    </div>
    `;
     productosFeatured.appendChild(producto);
}); 

/* carrito - icono */
let carrito__numero = document.querySelector(".carrito__numero");
carrito__numero.innerHTML = shopCart1.shopList.length;

let carrito__total = document.querySelector(".carrito__total");
carrito__total.innerHTML = `$${shopCart1.subTotal}`;

/* carrito - lista de compras */
let carrito = document.querySelector(".carrito");
carrito.addEventListener("keydown", (e)=>{if(e.keyCode == 13){toggleLista()}});
carrito.addEventListener("click", toggleLista);

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
                <span>${bebidas.nombre}</span>
                <span>${bebidas.contNeto}ml</span>
                <span>$${bebidas.precio}</span>
                <span>(x${bebidas.inShopList()})</span>
                <span>$${bebidas.precio * bebidas.inShopList()}</span>
                `;
                carrito__lista__ul.appendChild(carrito__newLi);
            }
        }
    }

    shopCart1.subTotalCalc();
    let carrito__total = document.querySelector(".carrito__lista__total__number");
    carrito__total.innerHTML = `$${shopCart1.subTotal}`
}

function vaciarCompra(){
    localStorage.removeItem("shopList");
    window.location.reload();
}

function checkout(){
    alert(`***CHECKOUT***\nTOTAL: $${shopCart1.subTotal}\nDirección -> Medios de Pago -> Confirmar`);
}


function toggleOfertas(){
    let ofertas = document.querySelector(".ofertasPage");
    ofertas.classList.toggle("carrito__lista__translated");
    let nav__ofertas = document.querySelector("#nav__ofertas");
    nav__ofertas.classList.toggle("active");

    let nav__productos = document.querySelector("#nav__productos");
    if (nav__productos.classList.contains("active")){
        nav__productos.classList.toggle("active");
    }

    if (ofertas.classList.contains("visible")){
        setTimeout(()=>ofertas.classList.remove("visible"), 400);
    } else{
        ofertas.classList.add("visible");
    }

    let productos = document.querySelector(".productosPage");
    if (productos.classList.contains("carrito__lista__translated")){
        productos.classList.toggle("carrito__lista__translated");
        setTimeout(()=>productos.classList.remove("visible"), 400);
    }

    let nav__ul = document.querySelector(".nav__ul");
    if(document.documentElement.style.overflowY == "hidden"){
        let productosPage = document.querySelector(".productosPage");
        if (productosPage.classList.contains("visible")){
            document.documentElement.style.overflowY = "hidden";
            nav__ul.style.marginRight = "8px";
        } else{
            document.documentElement.style.overflowY = "scroll";
            nav__ul.style.marginRight = "0";
        }
    } else{
        document.documentElement.style.overflowY = "hidden";
        nav__ul.style.marginRight = "8px";
    }
}

function toggleProductos(){
    let productos = document.querySelector(".productosPage");
    productos.classList.toggle("carrito__lista__translated");
    
    let nav__productos = document.querySelector("#nav__productos");
    nav__productos.classList.toggle("active");

    let nav__ofertas = document.querySelector("#nav__ofertas");
    if (nav__ofertas.classList.contains("active")){
        nav__ofertas.classList.toggle("active");
    }

    if (productos.classList.contains("visible")){
        setTimeout(()=>productos.classList.remove("visible"), 400);
    } else{
        productos.classList.add("visible");
    }

    let ofertas = document.querySelector(".ofertasPage");
    if (ofertas.classList.contains("carrito__lista__translated")){
        ofertas.classList.toggle("carrito__lista__translated");
        setTimeout(()=>ofertas.classList.remove("visible"), 400);
    }

    let nav__ul = document.querySelector(".nav__ul");
    if(document.documentElement.style.overflowY == "hidden"){
        let ofertasPage = document.querySelector(".ofertasPage");
        if (ofertasPage.classList.contains("visible")){
            document.documentElement.style.overflowY = "hidden";
            nav__ul.style.marginRight = "8px";
        } else{
            document.documentElement.style.overflowY = "scroll";
            nav__ul.style.marginRight = "0";
        }
    } else{
        document.documentElement.style.overflowY = "hidden";
        nav__ul.style.marginRight = "8px";
    }
}


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
    <button class="${bebidas.marca}__menos" onclick="shopCart1.removeItem(${bebidas.id})">-</button>
    <button class="${bebidas.marca}__mas" onclick="shopCart1.addItem(${bebidas.id})">+</button>
    </div>
    `;
     productos.appendChild(producto);
}); 


