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

    setTipo(){
        this.tipo = prompt("Tipo de bebida: \nEj: cerveza, vino, whisky, fernet");
    }

    setMarca(){
        this.marca = prompt("Marca de bebida: \nEj: quilmes, heineken, chivas, branca");
    }

    setContNeto(){
        this.contNeto = Number(prompt("Contenido neto en ml: \nEj: 500, 750, 1000"));
    }

    setPrecio(){
        this.precio = Number(prompt("Precio en pesos: \nEj: 400, 800, 1200"))
    }
    
    setStock(){
        this.stock = Number(prompt("Ingrese stock del producto: "))
    }

    getTipo(){
        return (this.tipo);
    }

    getMarca(){
        return (this.marca);
    }

    getContenido(){
        return (this.contNeto);
    }

    getPrecio(){
        return (this.precio);
    }     

    getNombre(){
        return (this.nombre);
    }

    getStock(){
        return (this.stock);
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

    setDate(){
        this.date = prompt("Ingrese fecha de compra: ")
    }
    
    setId(){
        this.id = prompt("Escriba nuevo ID: ")
    }

    subTotalCalc(){
        this.subTotal = 0;  
        for (const item of this.shopList){
            for (const bebida of arrayBebidas){
                if (item == bebida.id){
                    this.subTotal += bebida.getPrecio();
                    break;
                }
            }
        }
    }

    addItem(){
        do{
            this.shopList.push(
                prompt(`Agregue una bebida al carrito: [FIN para finalizar]
                \n1- ${cerveza__quilmes.nombre} ${cerveza__quilmes.contNeto}ml $${cerveza__quilmes.precio} [stock: ${cerveza__quilmes.stock}]
                \n2- ${cerveza__brahma.nombre} ${cerveza__brahma.contNeto}ml $${cerveza__brahma.precio} [stock: ${cerveza__brahma.stock}]
                \n3- ${cerveza__heineken.nombre} ${cerveza__heineken.contNeto}ml $${cerveza__heineken.precio} [stock: ${cerveza__heineken.stock}]
                \n4- ${vodka__smirnoff.nombre} ${vodka__smirnoff.contNeto}ml $${vodka__smirnoff.precio} [stock: ${vodka__smirnoff.stock}]
                \n5- ${whisky__vat.nombre} ${whisky__vat.contNeto}ml $${whisky__vat.precio} [stock: ${whisky__vat.stock}]
                \n6- ${ron__morgan.nombre} ${ron__morgan.contNeto}ml $${ron__morgan.precio} [stock: ${ron__morgan.stock}]
                \n7- ${fernet__branca.nombre} ${fernet__branca.contNeto}ml $${fernet__branca.precio} [stock: ${fernet__branca.stock}]
                \n8- ${tequila__sol.nombre} ${tequila__sol.contNeto}ml $${tequila__sol.precio} [stock: ${tequila__sol.stock}]
                \n*Ingresar el número correspondiente (ej: para cerveza Quilmes, escribir 1)\n*Para finalizar escribir FIN`)
                );
            if (wrongValue(this.shopList[this.shopList.length-1])){
                alert("Valor ingresado incorrecto. Intente nuevamente");
                this.shopList.pop();
            }
            else if (this.shopList[this.shopList.length-1] == "FIN"){
                break;
            }
            else{
                for (const bebida of arrayBebidas){
                    if (this.shopList[this.shopList.length-1] == bebida.id){
                        if(bebida.outOfStock()){
                            alert("Producto fuera de stock. Intente nuevamente");
                            this.shopList.pop();
                            this.addItem();
                            break;
                        }
                        else{
                            this.subTotalCalc();
                            alert (`Producto agregado al carrito. Subtotal: $${this.subTotal}`);
                            break;
                        }
                    }
                }
            }
        } while (wrongValue(this.shopList[this.shopList.length-1]));
    }
}

function wrongValue(value){
    if (value != 1 && value != 2 && value != 3 && value != 4 && value != 5 && value != 6 && value != 7 && value!= 8 && value != "FIN"){
        return true;
    } else{
        return false;
    }
}


const cerveza__quilmes = new Bebida("cerveza", "Quilmes", 1000, 300, 1, 10);
const cerveza__brahma = new Bebida("cerveza", "Brahma", 1000, 200, 2, 10);
const cerveza__heineken = new Bebida("cerveza", "Heineken", 1000, 400, 3, 10);
const vodka__smirnoff = new Bebida("vodka", "Smirnoff", 750, 1000, 4, 10);
const whisky__vat = new Bebida("whisky", "Vat 69", 750, 1200, 5, 10);
const ron__morgan = new Bebida("ron", "Captain Morgan", 750, 1200, 6, 10);
const fernet__branca = new Bebida("fernet", "Branca", 750, 900, 7, 10);
const tequila__sol = new Bebida("tequila", "Sol Azteca", 750, 800, 8, 10);
const shopCart1 = new ShoppingCart(new Date(), 001);

const arrayBebidas = [];
arrayBebidas.push(cerveza__quilmes);
arrayBebidas.push(cerveza__brahma);
arrayBebidas.push(cerveza__heineken);
arrayBebidas.push(vodka__smirnoff);
arrayBebidas.push(whisky__vat);
arrayBebidas.push(ron__morgan);
arrayBebidas.push(fernet__branca);
arrayBebidas.push(tequila__sol);


/* INICIO USER FINAL */

window.onload = function(){
    alert("BLACK FRIDAY - Delivery de bebidas 24hs\nElegir una bebida para agregar al carrito\n[Ingresar sólo el número correspondiente. FIN para finalizar]");
    let checkout = 0;

    do{
        while (shopCart1.shopList[(shopCart1.shopList.length)-1] != "FIN"){
            shopCart1.addItem();
        }

        shopCart1.shopList.pop();
        shopCart1.subTotalCalc();

        do{
            checkout = prompt("Total= $" + shopCart1.subTotal + "\nPara finalizar, ingrese 1. Para agregar más items, ingrese 0");
        } while (checkout != 1 && checkout != 0);
        
    } while (checkout == 0);

    alert ("Total del checkout: $" + shopCart1.subTotal);
    console.log(shopCart1.shopList);
}










