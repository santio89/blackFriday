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
}


const cerveza__quilmes = new Bebida("cerveza", "Quilmes", 1000, 300, 1, 10);
const cerveza__brahma = new Bebida("cerveza", "Brahma", 1000, 200, 2, 10);
const cerveza__heineken = new Bebida("cerveza", "Heineken", 750, 400, 3, 10);
const vodka__smirnoff = new Bebida("vodka", "Smirnoff", 750, 1000, 4, 10);
const whisky__vat = new Bebida("whisky", "Vat 69", 750, 1200, 5, 10);
const ron__morgan = new Bebida("ron", "Captain Morgan", 750, 1200, 6, 10);
const fernet__branca = new Bebida("fernet", "Branca", 750, 900, 7, 10);
const tequila__sol = new Bebida("tequila", "Sol Azteca", 750, 800, 8, 10);



/* INICIO USER FINAL */

let shopList = [];
let subTotal = 0;

function addItem(){
    return prompt(`Agregue una bebida al carrito: [FIN para finalizar]
        \n1- ${cerveza__quilmes.nombre} ${cerveza__quilmes.contNeto} ${cerveza__quilmes.precio} [stock: ${cerveza__quilmes.stock}]
        \n2- ${cerveza__brahma.nombre} ${cerveza__brahma.contNeto} ${cerveza__brahma.precio} [stock: ${cerveza__brahma.stock}]
        \n3- ${cerveza__heineken.nombre} ${cerveza__heineken.contNeto} ${cerveza__heineken.precio} [stock: ${cerveza__heineken.stock}]
        \n4- ${vodka__smirnoff.nombre} ${vodka__smirnoff.contNeto} ${vodka__smirnoff.precio} [stock: ${vodka__smirnoff.stock}]
        \n5- ${whisky__vat.nombre} ${whisky__vat.contNeto} ${whisky__vat.precio} [stock: ${whisky__vat.stock}]
        \n6- ${ron__morgan.nombre} ${ron__morgan.contNeto} ${ron__morgan.precio} [stock: ${ron__morgan.stock}]
        \n7- ${fernet__branca.nombre} ${fernet__branca.contNeto} ${fernet__branca.precio} [stock: ${fernet__branca.stock}]
        \n8- ${tequila__sol.nombre} ${tequila__sol.contNeto} ${tequila__sol.precio} [stock: ${tequila__sol.stock}]
        \n*Ingresar el número correspondiente (ej: para cerveza Quilmes, escribir 1)\n*Para finalizar escribir FIN`);
}

function subTotalCalc(){
    subTotal = 0;
    for (let i=0; i< shopList.length; i++){
        switch (shopList[i]){
            case "1": 
                subTotal += cerveza__quilmes.getPrecio();
                break;
            case "2": 
                subTotal += cerveza__brahma.getPrecio();
                break;
            case "3": 
                subTotal += cerveza__brahma.getPrecio();
                break;
            case "4": 
                subTotal += vodka__smirnoff.getPrecio();
                break;
            case "5": 
                subTotal += whisky__vat.getPrecio();
                break;
            case "6": 
                subTotal += ron__morgan.getPrecio();
                break;
            case "7": 
                subTotal += fernet__branca.getPrecio();
                break;
            case "8": 
                subTotal += tequila__sol.getPrecio();
                break;
            default:
                alert("No se pudo calcular el subtotal. Agregue nuevamente los productos al carrito.")

        }
    }
}

function wrongValue(value){
    if (value != 1 && value != 2 && value != 3 && value != 4 && value != 5 && value != 6 && value != 7 && value!= 8 && value != "FIN"){
        return true;
    } else{
        return false;
    }
}

function outOfStock(value){
    switch (value){
        case "1": 
            if (cerveza__quilmes.getStock()>0){
                    cerveza__quilmes.stock--;
                    return false} else{return true};
        case "2": 
            if (cerveza__brahma.getStock()>0){
                cerveza__brahma.stock--;
                return false} else{return true};
        case "3": 
        if (cerveza__heineken.getStock()>0){
            cerveza__heineken.stock--;
            return false} else{return true};
        case "4": 
            if (vodka__smirnoff.getStock()>0){
                vodka__smirnoff.stock--;
                return false} else{return true};
        case "5": 
            if (whisky__vat.getStock()>0){
                whisky__vat.stock--;
                return false} else{return true};
        case "6": 
            if (ron__morgan.getStock()>0){
                ron__morgan.stock--;
                return false} else{return true};
        case "7": 
            if (fernet__branca.getStock()>0){
                fernet__branca.stock--;
                return false} else{return true};
        case "8": 
            if (tequila__sol.getStock()>0){
                tequila__sol.stock--;
                return false} else{return true};
        case "FIN":
            return false;
        default:
            alert("Error de input")
    }
}

window.onload = function(){
    alert("BLACK FRIDAY - Delivery de bebidas 24hs\nElegir una bebida para agregar al carrito\n[Ingresar sólo el número correspondiente. FIN para finalizar]");
    let i = 0;
    let checkout = 0;

    do{
        for (i; shopList[i-1] != "FIN"; i++){
            do{
                shopList[i] = addItem();
                if (wrongValue(shopList[i])){
                    alert("Valor ingresado incorrecto. Intente nuevamente");
                }
                else if (outOfStock(shopList[i])){
                    alert("Producto fuera de stock. Intente nuevamente");
                }
            } while (wrongValue(shopList[i]));
        }
        i--;
        shopList.pop();
        subTotalCalc();

        do{
            checkout = prompt("Total= $" + subTotal + "\nPara finalizar, ingrese 1. Para agregar más items, ingrese 0");
        } while (checkout != 1 && checkout != 0);
        
    } while (checkout == 0);


    alert ("Total del checkout: $" + subTotal);
    console.log(shopList);
}










