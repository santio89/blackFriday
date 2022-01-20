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
            for (const bebida of stock1.arrayBebidasTotal){
                if (item == bebida.id){
                    this.subTotal += bebida.precio;
                    break;
                }
            }
        }

        for (const item of this.shopList){
            for (const combo of stock1.arrayCombosTotal){
                if (item == combo.id){
                    this.subTotal += combo.precioTotal;
                    break;
                }
            }
        }
    }


    addItem(id){
        this.shopList.push(id);

        for (const bebida of stock1.arrayBebidasTotal){
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

        for (const combo of stock1.arrayCombosTotal){
            /* let stock = document.querySelectorAll(`.${bebida.nombre.replace(/\s/g,"")}__stock`); */
            if (this.shopList[this.shopList.length-1] == combo.id){
                /* if(bebida.outOfStock()){
                    alert("Producto fuera de stock.");
                    this.shopList.pop();
                    break;
                } */
                
                    /* stock.forEach((element)=>{element.innerHTML = `stock: ${bebida.stock}`}); */
                     
                    carrito__numero.innerHTML = shopCart1.shopList.length;
                    this.subTotalCalc();
                    carrito__total.innerHTML = `$${shopCart1.subTotal}`;
                    
                    localStorage.setItem("shopList", JSON.stringify(this.shopList));
                    break;
                
            }
        }
    }

    removeItem(id){
        for (const items in this.shopList){
            if (this.shopList[items] == id){
    
                for (const bebida of stock1.arrayBebidasTotal){
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