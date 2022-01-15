/* agregar bebidas al stock. esta operacion, idealmente, deberia ser realizada por un usuario administrador mediante input. por el momento, al no manejar usuarios ni tener una forma de guardar la info en una base de datos, inicializo el stock manualmente */
const cerveza__quilmes = new Bebida("cerveza".toUpperCase(), "Quilmes".toUpperCase(), 1000, 300, 1, 10);
const cerveza__brahma = new Bebida("cerveza".toUpperCase(), "Brahma".toUpperCase(), 1000, 200, 2, 10);
const cerveza__heineken = new Bebida("cerveza".toUpperCase(), "Heineken".toUpperCase(), 1000, 400, 3, 10);
const vodka__smirnoff = new Bebida("vodka".toUpperCase(), "Smirnoff".toUpperCase(), 750, 1000, 4, 10);
const whisky__vat = new Bebida("whisky".toUpperCase(), "Vat 69".toUpperCase(), 750, 1200, 5, 10);
const ron__morgan = new Bebida("ron".toUpperCase(), "Morgan".toUpperCase(), 750, 1200, 6, 10);
const fernet__branca = new Bebida("fernet".toUpperCase(), "Branca".toUpperCase(), 750, 900, 7, 10);
const tequila__sol = new Bebida("tequila".toUpperCase(), "Azteca".toUpperCase(), 750, 800, 8, 10);
const shopCart1 = new ShoppingCart(new Date(), 001);
const stock1 = new Stock(new Date(), 001)

stock1.arrayBebidas.push(cerveza__quilmes);
stock1.arrayBebidas.push(cerveza__brahma);
stock1.arrayBebidas.push(cerveza__heineken);
stock1.arrayBebidas.push(vodka__smirnoff);
stock1.arrayBebidas.push(whisky__vat);
stock1.arrayBebidas.push(ron__morgan);
stock1.arrayBebidas.push(fernet__branca);
stock1.arrayBebidas.push(tequila__sol);


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


let productos = document.getElementById("productos")
for (const bebidas of stock1.arrayBebidas){
    let producto = document.createElement("div");
    producto.classList.add("productos__producto");
    producto.innerHTML = `
    <h1>${bebidas.marca}</h1>
    <p>${bebidas.contNeto}ml</p>
    <p id="${bebidas.nombre}__stock">stock: ${bebidas.stock}</p>    
    <h2>$${bebidas.precio}</h2>
    <div class="productos__producto__buttonContainer">
    <button id="${bebidas.marca}__menos" onclick="shopCart1.removeItem(${bebidas.id})">-</button>
    <button id="${bebidas.marca}__mas" onclick="shopCart1.addItem(${bebidas.id})">+</button>
    </div>
    `;
     productos.appendChild(producto);
}

let carrito__numero = document.querySelector(".carrito__numero");
carrito__numero.innerHTML = shopCart1.shopList.length;

let carrito__total = document.querySelector(".carrito__total");
carrito__total.innerHTML = `$${shopCart1.subTotal}`;


function toggleLista(){
    let carrito__lista = document.querySelector(".carrito__lista");
    carrito__lista.classList.toggle("carrito__lista__translated",);

    let carrito__lista__ul = document.querySelector(".carrito__lista__ul");
    carrito__lista__ul.innerHTML = "";
    let shopListWithoutDuplicates = new Set (shopCart1.shopList);
    shopListWithoutDuplicates = Array.from(shopListWithoutDuplicates);
    
    for (const items of shopListWithoutDuplicates){
        for (const bebidas of stock1.arrayBebidas){
            if (items == bebidas.id){
                let carrito__newLi = document.createElement("li");
                carrito__newLi.innerHTML = `
                <span>${bebidas.nombre} ${bebidas.contNeto}ml</span><span>x${bebidas.inShopList()}</span><span>$${bebidas.precio}</span>
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
    alert(`***CHECKOUT***\nTOTAL: $${shopCart1.subTotal}\nDirección/Medios de Pago/Confirmar`);
}







