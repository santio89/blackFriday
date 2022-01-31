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

        let shopList__cantidad = document.querySelector(".carrito__lista li span:nth-of-type(4)");
        let shopList__precio = document.querySelector(".carrito__lista li span:last-of-type");
        let shopList__total = document.querySelector(".carrito__lista__total__number");

        for (const bebida of stock1.arrayBebidasTotal){
            if (this.shopList[this.shopList.length-1] == bebida.id){
                if(bebida.outOfStock()){
                    alert("Producto fuera de stock.");
                    this.shopList.pop();
                    break;
                }
                
                else{                        
                    carrito__numero.innerHTML = this.shopList.length;
                    this.subTotalCalc();
                    carrito__total.innerHTML = `$${this.subTotal}`;
             /*        shopList__cantidad.textContent = ``;
                    shopList__precio = ``;
                    shopList__total = ``; */
                    bebida.stock--;

                    localStorage.setItem("shopList", JSON.stringify(this.shopList));
                    break;
                }
            }
        }

        for (const combo of stock1.arrayCombosTotal){
            if (this.shopList[this.shopList.length-1] == combo.id){
                    carrito__numero.innerHTML = this.shopList.length;
                    this.subTotalCalc();
                    carrito__total.innerHTML = `$${this.subTotal}`;
                    
                    localStorage.setItem("shopList", JSON.stringify(this.shopList));
                    break;
            }
        }
    }

    removeItem(id){
        for (const items in this.shopList){
            if (this.shopList[items] == id){
    
                for (const bebida of stock1.arrayBebidasTotal){
                    if (this.shopList[items] == bebida.id){
                        bebida.stock++;           
                    }
                }  

                this.shopList.splice(items, 1);  
                carrito__numero.innerHTML = this.shopList.length;
                this.subTotalCalc();
                carrito__total.innerHTML = `$${this.subTotal}`;

                localStorage.setItem("shopList", JSON.stringify(this.shopList));               
                break;
            }
        }  
    }
}

/* module.exports = ShoppingCart; */