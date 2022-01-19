/* agregar bebidas al stock. esta operacion, idealmente, deberia ser realizada por un usuario administrador mediante input. por el momento, al no manejar usuarios ni tener una forma de guardar la info en una base de datos, inicializo el stock manualmente */
const cerveza__quilmes = new Bebida("cerveza".toUpperCase(), "Quilmes".toUpperCase(), 1000, 300, 1, 10);
const cerveza__brahma = new Bebida("cerveza".toUpperCase(), "Brahma".toUpperCase(), 1000, 200, 2, 10);
const cerveza__heineken = new Bebida("cerveza".toUpperCase(), "Heineken".toUpperCase(), 1000, 400, 3, 10);
const vodka__smirnoff = new Bebida("vodka".toUpperCase(), "Smirnoff".toUpperCase(), 750, 1000, 4, 10);
const whisky__vat = new Bebida("whisky".toUpperCase(), "Vat 69".toUpperCase(), 750, 1200, 5, 10);
const ron__morgan = new Bebida("ron".toUpperCase(), "Captain Morgan".toUpperCase(), 750, 1200, 6, 10);
const fernet__branca = new Bebida("fernet".toUpperCase(), "Branca".toUpperCase(), 750, 900, 7, 10);
const tequila__sol = new Bebida("tequila".toUpperCase(), "Azteca".toUpperCase(), 750, 800, 8, 10);
const shopCart1 = new ShoppingCart(new Date(), 001);
const stock1 = new Stock(new Date(), 001);

stock1.addStockItem(cerveza__quilmes);
stock1.addStockItem(cerveza__brahma);
stock1.addStockItem(cerveza__heineken);
stock1.addStockItem(vodka__smirnoff);
stock1.addStockItem(whisky__vat);
stock1.addStockItem(ron__morgan);
stock1.addStockItem(fernet__branca);
stock1.addStockItem(tequila__sol);


/* cargar shopList, si existe, del storage */
if (localStorage.getItem("shopList")){
    shopCart1.shopList = JSON.parse(localStorage.getItem("shopList"));
    for (const element of shopCart1.shopList){
        for (const bebida of stock1.arrayBebidas){
            if (element == bebida.id){
                bebida.stock--;
            }
        }
    }
    shopCart1.subTotalCalc();
} 


/* agregar las cards de productos al html, según los productos que hayan en el inventario (uso forEach en vez de map, ya que no necesito retornar nada) */
let productosFeatured = document.getElementById("productosFeatured");
stock1.arrayBebidas.forEach(bebidas => {
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
        for (const bebidas of stock1.arrayBebidas){
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

    if(document.documentElement.style.overflowY == "hidden"){
        document.documentElement.style.overflowY = "scroll";
    } else{
        document.documentElement.style.overflowY = "hidden";
    }

}

function toggleProductos(){
    let productos = document.querySelector(".productosPage");
    productos.classList.toggle("carrito__lista__translated");

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

    if(document.documentElement.style.overflowY == "hidden"){
        document.documentElement.style.overflowY = "scroll";
    } else{
        document.documentElement.style.overflowY = "hidden";
    }

}


let productos = document.getElementById("productos");
stock1.arrayBebidas.forEach(bebidas => {
    let producto = document.createElement("div");
    producto.classList.add("productos__producto");
    producto.innerHTML = `
    <p>${bebidas.tipo}</p>
    <h1>${bebidas.marca}</h1>
    <p>${bebidas.contNeto}ml</p>
    <p class="${bebidas.nombre.replace(/\s/g,"")}__stock">stock: ${bebidas.stock}</p>    
    <h2>$${bebidas.precio}</h2>
    <div class="productos__producto__buttonContainer">
    <button class="${bebidas.marca}__menos" onclick="shopCart1.removeItem(${bebidas.id})">-</button>
    <button class="${bebidas.marca}__mas" onclick="shopCart1.addItem(${bebidas.id})">+</button>
    </div>
    `;
     productos.appendChild(producto);
}); 


