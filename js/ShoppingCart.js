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

    addItem(id){
        this.shopList.push(id);

        for (const bebida of stock1.arrayBebidas){
            let stock = document.querySelectorAll(`.${bebida.nombre.replace(/\s/g,"")}__stock`);
            if (this.shopList[this.shopList.length-1] == bebida.id){
                if(bebida.outOfStock()){
                    alert("Producto fuera de stock.");
                    this.shopList.pop();
                    break;
                }
                else{      
                    stock.forEach((element)=>{element.innerHTML = `stock: ${bebida.stock}`});
                     
                    carrito__numero.innerHTML = shopCart1.shopList.length;
                    this.subTotalCalc();
                    carrito__total.innerHTML = `$${shopCart1.subTotal}`;
                    
                    localStorage.setItem("shopList", JSON.stringify(this.shopList));
                    break;
                }
            }
        }
    }

    removeItem(id){
        for (const items in this.shopList){
            if (this.shopList[items] == id){
    
                for (const bebida of stock1.arrayBebidas){
                    let stock = document.querySelectorAll(`.${bebida.nombre.replace(/\s/g,"")}__stock`);
                    if (this.shopList[items] == bebida.id){
                        bebida.stock++;
                        stock.forEach((element)=>{element.innerHTML = `stock: ${bebida.stock}`});                  
                    }
                }  

                this.shopList.splice(items, 1);  
                carrito__numero.innerHTML = shopCart1.shopList.length;
                this.subTotalCalc();
                carrito__total.innerHTML = `$${shopCart1.subTotal}`;
                localStorage.setItem("shopList", JSON.stringify(this.shopList));               
                break;
            }
        }  
    }
}

/* module.exports = ShoppingCart; */