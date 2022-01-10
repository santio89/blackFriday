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

module.exports = ShoppingCart;