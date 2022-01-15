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

/* module.exports = Bebida; */
