class Bebida{
    constructor(tipo, marca, contNeto, precio){
        this.tipo = tipo;
        this.marca = marca;
        this.contNeto = contNeto;
        this.precio = precio;
        this.nombre = tipo + "" + marca;
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
   

    getTipo(){
        console.log(tipo);
    }

    getMarca(){
        console.log(marca);
    }

    getContenido(){
        console.log(contNeto);
    }

    getPrecio(){
        console.log(precio);
    }     

    getNombre(){
        console.log(nombre);
    }
}

module.exports = Bebida;