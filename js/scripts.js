



/* agregar bebidas al stock. esta operacion, idealmente, deberia ser realizada por un usuario administrador mediante input. por el momento, al no manejar usuarios ni tener una forma de guardar la info en una base de datos, inicializo el stock manualmente */
const cerveza__quilmes = new Bebida("cerveza".toUpperCase(), "Quilmes".toUpperCase(), 1000, 300, 1, 10);
const cerveza__brahma = new Bebida("cerveza".toUpperCase(), "Brahma".toUpperCase(), 1000, 200, 2, 10);
const cerveza__heineken = new Bebida("cerveza".toUpperCase(), "Heineken".toUpperCase(), 1000, 400, 3, 10);
const vodka__smirnoff = new Bebida("vodka".toUpperCase(), "Smirnoff".toUpperCase(), 750, 1000, 4, 10);
const whisky__vat = new Bebida("whisky".toUpperCase(), "Vat 69".toUpperCase(), 750, 1200, 5, 10);
const ron__morgan = new Bebida("ron".toUpperCase(), "Cpt Morgan".toUpperCase(), 750, 1200, 6, 10);
const fernet__branca = new Bebida("fernet".toUpperCase(), "Branca".toUpperCase(), 750, 900, 7, 10);
const tequila__sol = new Bebida("tequila".toUpperCase(), "Sol Azteca".toUpperCase(), 750, 800, 8, 10);
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

/* localStorage.removeItem("shopList"); */

/* if (localStorage.getItem("shopList")){
    shopCart1.shopList = JSON.parse(localStorage.getItem("shopList"));

    for (const element in shopCart1.shopList){
        for (const bebida of stock1.arrayBebidas){
            if (shopCart1.shopList[element] == bebida.id){
                bebida.stock--;
            }
        }
    }
} */

let loadList;
while(loadList !=1 && loadList !=0){
    loadList = prompt("Si desea continuar con una compra anterior, ingrese 1. Para vaciar la lista de compras almacenada, ingrese 0")

    if (loadList == 1){
        if (localStorage.getItem("shopList") == null){
            alert("No se encontró una compra previa para cargar");
        } else{
            shopCart1.shopList = JSON.parse(localStorage.getItem("shopList"));
            for (const element of shopCart1.shopList){
                for (const bebida of stock1.arrayBebidas){
                    if (element == bebida.id){
                        bebida.stock--;
                    }
                }
            }
            shopCart1.subTotalCalc();
            alert("Lista cargada:\nSUBTOTAL: $" + shopCart1.subTotal + "\n" + shopCart1.showShopList());
        }

    } else if (loadList == 0){
        localStorage.removeItem("shopList");
    }
    
}

let productos = document.getElementById("productos")
for (const bebidas of stock1.arrayBebidas){
    let producto = document.createElement("div");
    producto.classList.add("productos__producto");
    producto.innerHTML = 
    `<h1>${bebidas.marca}</h1>
     <p>${bebidas.contNeto}ml</p>
     <p id="${bebidas.nombre}__stock">stock: ${bebidas.stock}</p>    
     <h2>$${bebidas.precio}</h2>
     <div class="productos__producto__buttonContainer">
        <button id="${bebidas.marca}__menos" onclick="shopCart1.removeItem(${bebidas.id})">-</button>
        <button id="${bebidas.marca}__mas" onclick="shopCart1.addItem(${bebidas.id})">+</button>
     </div>`
     productos.appendChild(producto);
}

let carrito__numero = document.querySelector(".carrito__numero");
carrito__numero.innerHTML = shopCart1.shopList.length;

let carrito__total = document.querySelector(".carrito__total");
carrito__total.innerHTML = `$${shopCart1.subTotal}`;








