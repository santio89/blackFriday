class Stock{
    constructor (date, id){
        this.date = date;
        this.id = id;
        this.arrayBebidasFeatured = [];
        this.arrayBebidasTotal = [];
        this.arrayCombosFeatured = [];
        this.arrayCombosTotal = [];
    }

    addStockItem(item){
        this.arrayBebidasTotal.push(item);
    }

    addFeaturedItem(item){
        this.arrayBebidasFeatured.push(item);
    }

    addComboFeatured(combo){
        this.arrayCombosFeatured.push(combo);
    }

    addComboTotal(combo){
        this.arrayCombosTotal.push(combo);
    }
}



/* Stock tiene una lista de las diferentes bebidas que hay y hay 1 solo objeto stock ya que es 1 el inventario. El stock de cada bebida lo guarda el objeto de clase Bebida correspondiente y hay varios objetos Bebida según cada bebida que haya */


/* module.exports = Stock; */