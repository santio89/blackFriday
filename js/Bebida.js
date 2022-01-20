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
        if (this.stock < 1){
            return true;
        } else{
            this.stock--;
            return false;
        }
    }

    inShopList(){
        let i = 0;
        for (const items of shopCart1.shopList){
            if (items == this.id){
                i++;
            }
        }
        
        return i;
    }
}

class Combo{
    constructor(productos, descuento, nombre, id){
        this.productos = productos;
        this.precioTotal = 0;
        this.descuento = descuento;
        this.nombre = nombre;
        this.id = id; 
    }

    calcPrecioTotal(){
        for (let i=0; i<this.productos.length;i++){
            this.precioTotal += this.productos[i].precio;
        }
        this.precioTotal -= Math.round((this.descuento / 100) * this.precioTotal);
    }

    inShopList(){
        let i = 0;
        for (const items of shopCart1.shopList){
            if (items == this.id){
                i++;
            }
        }
        
        return i;
    }
}

/* module.exports = Bebida; */
