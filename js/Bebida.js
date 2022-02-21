class Bebida{
    constructor(categoria, tipo, marca, contNeto, precio, id, stock, img, info, relevance, keywords){
        this.categoria = categoria;
        this.tipo = tipo;
        this.marca = marca;
        this.contNeto = contNeto;
        this.precio = precio;
        this.nombre = tipo + " " + marca;
        this.id = id;
        this.stock = stock;
        this.img = `url("${img}")`;
        this.info = info;
        this.relevance = relevance;    /* relevance es un valor (recibido desde un backend por ej) que define que tan visto/comprado es un producto. por defecto ordeno segun relevancia */
        this.keywords = keywords;
    }
    
    outOfStock(){
        if (this.stock < 1){
            return true;
        } else{
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
