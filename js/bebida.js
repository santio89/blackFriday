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

module.exports = Bebida;