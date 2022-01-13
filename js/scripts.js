/* agregar bebidas al stock. esta operacion, idealmente, deberia ser realizada por un usuario administrador mediante input. por el momento, al no manejar usuarios ni tener una forma de guardar la info en una base de datos, inicializo el stock manualmente */
const cerveza__quilmes = new Bebida("cerveza".toUpperCase(), "Quilmes".toUpperCase(), 1000, 300, 1, 10);
const cerveza__brahma = new Bebida("cerveza".toUpperCase(), "Brahma".toUpperCase(), 1000, 200, 2, 10);
const cerveza__heineken = new Bebida("cerveza".toUpperCase(), "Heineken".toUpperCase(), 1000, 400, 3, 10);
const vodka__smirnoff = new Bebida("vodka".toUpperCase(), "Smirnoff".toUpperCase(), 750, 1000, 4, 10);
const whisky__vat = new Bebida("whisky".toUpperCase(), "Vat 69".toUpperCase(), 750, 1200, 5, 10);
const ron__morgan = new Bebida("ron".toUpperCase(), "Captain Morgan".toUpperCase(), 750, 1200, 6, 10);
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




/* INICIO USER FINAL */

window.onload = function(){
    alert("BLACK FRIDAY - Delivery de bebidas 24hs\nElegir una bebida para agregar al carrito\n[Ingresar sólo el número correspondiente. FIN para finalizar/modificar carrito]");
    let checkout = 0;
    
    /* actualizar el carrito con los datos previamente cargados en local storage */
    let loadList;
    while(loadList !=1 && loadList !=0){
        loadList = prompt("Si desea continuar con una compra anterior, ingrese 1. Para vaciar la lista de compras almacenada, ingrese 0")

        if (loadList == 1){
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

        } else if (loadList == 0){
            localStorage.removeItem("shopList");
        }
        
    }
    

    /* seleccion de productos */

    do{
        while (shopCart1.shopList[(shopCart1.shopList.length)-1] != "FIN"){
            shopCart1.addItem();
        }

        shopCart1.shopList.pop();
        shopCart1.subTotalCalc();

        do{
            checkout = prompt("*CONFIRMAR CHECKOUT*\nTOTAL= $" + shopCart1.subTotal + "\nCarrito:\n" + shopCart1.showShopList() + "\nPara confirmar checkout y finalizar, ingrese 0.\nPara agregar más productos al carrito, ingrese 1.\nPara eliminar productos del carrito, ingrese 2");
        } while (checkout != 0 && checkout != 1 && checkout!= 2);

        if (checkout == 2){
            shopCart1.removeItem();
        }
        
    } while (checkout == 1 || checkout == 2);

    alert ("TOTAL del checkout: $" + shopCart1.subTotal);
    console.log(shopCart1.shopList);
}










