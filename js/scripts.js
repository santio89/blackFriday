class Bebida{
    constructor(tipo, marca, contNeto, precio, id, stock){
        this.tipo = tipo;
        this.marca = marca;
        this.contNeto = contNeto;
        this.precio = precio;
        this.nombre = tipo + " " + marca;
        this.id = id;
        this.stock = stock;
    }
    
    outOfStock(){
        if (this.stock == 0){
            return true;
        } else{
            this.stock--;
            return false;
        }
    }
}

class ShoppingCart{
    constructor(date, id){
        this.date = date;
        this.id = id;
        this.shopList = [];
        this.subTotal = 0;
    }

    subTotalCalc(){
        this.subTotal = 0;  
        for (const item of this.shopList){
            for (const bebida of stock1.arrayBebidas){
                if (item == bebida.id){
                    this.subTotal += bebida.precio;
                    break;
                }
            }
        }
    }

    addItemText(){
        let addItemText = "Agregue una bebida al carrito: [FIN para finalizar/modificar el carrito]\n\nFIN- Finalizar/Modificar\n";
        
        for (const bebida of stock1.arrayBebidas){
            addItemText += `${bebida.id}- ${bebida.nombre} ${bebida.contNeto}ml $${bebida.precio} [stock: ${bebida.stock}]\n`;
        }
        return addItemText;     
    }

    addItem(){
        do{
            this.shopList.push( prompt(this.addItemText()).toUpperCase() );
            
            if (wrongValue(this.shopList[this.shopList.length-1])){
                alert("Valor ingresado incorrecto. Intente nuevamente");
                this.shopList.pop();
            }
            else if (this.shopList[this.shopList.length-1] == "FIN"){
                break;
            }
            else{
                for (const bebida of stock1.arrayBebidas){
                    if (this.shopList[this.shopList.length-1] == bebida.id){
                        if(bebida.outOfStock()){
                            alert("Producto fuera de stock. Intente nuevamente");
                            this.shopList.pop();
                            this.addItem();
                            break;
                        }
                        else{                           
                            this.subTotalCalc();
                            alert (`Producto agregado al carrito. SUBTOTAL: $${this.subTotal}\nCarrito:\n${this.showShopList()}`);
                            break;
                        }
                    }
                }
            }
        } while (wrongValue(this.shopList[this.shopList.length-1]));
    }

    showShopList(){
        let shopListString = "";
        let i = 1;

        for (const items of this.shopList){
            for (const bebidas of stock1.arrayBebidas){
                if (items == bebidas.id){
                    shopListString += i + "- " + bebidas.nombre + " $" + bebidas.precio + "\n";
                    i++;
                    break;
                }
            }
        }
        return shopListString;
    }

    removeItem(){
        let flag = 0;
        let itemToDelete = "";
        do{
            itemToDelete = prompt (`Eliminar un producto del carrito (ingrese el número correspondiente a eliminar. 0 para cancelar). SUBTOTAL: $${this.subTotal}\nCarrito: \n0- Cancelar y volver a la selección de productos\n${this.showShopList()}`);

            if (itemToDelete == 0){
                break;
            }

            for (const items in this.shopList){
                if (itemToDelete == 0){
                    break;
                } else if (itemToDelete-1 == items){
                    for(const productos of stock1.arrayBebidas){
                        if(this.shopList[items] == productos.id){
                            productos.stock++;
                            break;
                        }
                    }
                    this.shopList.splice(items, 1);
                    flag = 1;
                    break;
                }
            }

            if (flag == 0){
                alert ("Producto no encontrado. Elija otro producto a eliminar");
            }

        } while (flag == 0 && itemToDelete != 0)

        this.subTotalCalc();
        
        if (itemToDelete == 0){
            alert (`Operación cancelada. SUBTOTAL: $${this.subTotal}\nCarrito: \n${this.showShopList()}`)
        } else{
            alert (`Producto eliminado del carrito y devuelto al stock. SUBTOTAL: $${this.subTotal}\nCarrito: \n${this.showShopList()}`)
            this.removeItem();
        }
        
    }
}

class Stock{
    constructor (date, id){
        this.date = date;
        this.id = id;
        this.arrayBebidas = [];
    }
}


function wrongValue(value){
    if (value == "FIN"){
        return false;
    } else{
        for (const bebida of stock1.arrayBebidas){
            if(value == bebida.id){
                return false
            }
        }
    }
    return true;
}

/* agregar bebidas al stock. esta operacion, idealmente, deberia ser realizada por un usuario administrador mediante input. por el momento, al no manejar usuarios ni tener una forma de guardar los datos, inicializo el stock manualmente */
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










