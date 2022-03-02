const router = () => {
    const path = location.hash.slice(1).toLocaleLowerCase();
    
    switch (path) {
        case '':
            break;
        case '/':
            break;
        case 'body':
            location.hash = "/";
            break;
        case 'combos':
            if($('.ofertasPage').hasClass("visible")){
                break;
            }
            toggleOfertas();
            break;
        case 'bebidas':
            if($('.productosPage').hasClass("visible")){
                break;
            }
            toggleProductos();
            break;
        default:
            errorComponent();
            break;
    }
}

$(window).on('load', function () {
    router()
})

$(window).on('hashchange', function () {
    router()
})

/* validation */
/* llamada ajax para carga de productos se realiza si la validación se comprueba */
if (localStorage.getItem("validation")){
    if (localStorage.getItem("validation") == 1){
        let validation = document.querySelector(".validation");
        validation.classList.add("validation__translated");
        validation.style.display = "none";
        document.documentElement.style.overflowY = "scroll";

        setTimeout(rubberBandOnce, 100);

        ajaxInit();
    }
}

function validationYes(){
    localStorage.setItem("validation", 1);
    let validation = document.querySelector(".validation");

    validation.classList.add("validation__translated");
    document.documentElement.style.overflowY = "scroll";

    /* al aparecer el scroll que estaba escondido, ajusto la posicion de los elementos de esta placa acordes al tamaño de la scrolbar para que no parezca que se mueven */
    let validation__header__info = document.getElementById("validation__header__info");
    let validation__age = document.querySelector(".validation__age");
    let scrollbar__width = getScrollbarWidth();
    validation__header__info.style.marginLeft = `${scrollbar__width}px`;
    validation__age.style.marginLeft = `${scrollbar__width}px`;
    validation.style.overflow = "hidden"
    
    setTimeout(()=>validation.style.display = "none", 800);
    setTimeout(rubberBandOnce, 900);

    ajaxInit();
}

function validationNo(){
    localStorage.setItem("validation", 0);
    $(".validation__denied").finish().css("visibility", "visible").delay(2400).fadeOut("slow", function(){
        $(this).css({"display": "block", "visibility": "hidden"});
    });
}

let validation__yes = document.querySelector(".validation__age__yes");
let validation__no = document.querySelector(".validation__age__no");
validation__yes.addEventListener("click", validationYes);
validation__no.addEventListener("click", validationNo);


/* agregar bebidas al stock. saco los datos, mediante ajax, desde productos.json/combos.json (que simularia la respuesta de una base de datos de los productos y ofertas que hay en stock) */
const shopCart1 = new ShoppingCart(new Date(), 001);
const stock1 = new Stock(new Date(), 001);
let productsObject;
let combosObject;

function ajaxInit(){
    $.ajax({
        type: "GET",
        url: "./js/productos.json",
        success: function (response) {
            productsObject = response;
    
            productsObject.forEach(producto=>{
                producto.info = producto.info.replaceAll("!br", "\n")
                if (producto.stock == "isInfinity"){
                    window[producto.variable] = new Bebida(producto.categoria, producto.tipo, producto.marca, producto.contNeto, producto.precio, producto.id, Infinity, producto.imgUrl, producto.info, producto.relevance, producto.keywords);
                } else{
                    window[producto.variable] = new Bebida(producto.categoria, producto.tipo, producto.marca, producto.contNeto, producto.precio, producto.id, producto.stock, producto.imgUrl, producto.info, producto.relevance, producto.keywords);
                }
                stock1.addStockItem(window[producto.variable]);
            })

            addFeaturedItems();
            cards__productosFeatured();
            cards__productos();
            cards__info();
            productFilter();
            productSearch();
            productSort();
            initialSort()
    
            /* pongo la llamada ajax a combos dentro de la llamada ajax a productos, ya que los combos dependen del stock de productos. */
            $.ajax({
                type: "GET",
                url: "./js/combos.json",
                success: function (response) {
                    combosObject = response;
            
                    combosObject.forEach(combo=>{
                        for(i=0; i<combo.items.length;i++){
                            let comboItem = combo.items[i];
                            combo.items[i] = window[comboItem]
                        }
                            
                        window[combo.variable] = new Combo(combo.nombre, combo.items, combo.descuento, combo.relevance, combo.id);
                        
                        stock1.addComboTotal(window[combo.variable]);
                    })
                    
                    stock1.arrayCombosTotal.forEach(combo => combo.calcPrecioTotal());
                    addFeaturedCombos();
            
                    cards__ofertasFeatured();
                    cards__ofertas();
                },
                
                error: function () {
                    console.log("Error retrieving productos (combos)");
                }
            });
        },
    
        error: function () {
            console.log("Error retrieving products (products)");
        }
    });
}


/* cargar shopList, si existe, del storage */
if (localStorage.getItem("shopList")){
    shopCart1.shopList = JSON.parse(localStorage.getItem("shopList"));
    for (const element of shopCart1.shopList){
        for (const bebida of stock1.arrayBebidasTotal){
            if (element == bebida.id){
                bebida.stock--;
            }
        }
    }
    shopCart1.subTotalCalc();
} 

/* ordenar los productos/combos según relevancia y definir los productos/combos destacados según los más relevantes (hasta 12 productos/4 combos según el diseño actual) */
function addFeaturedItems(){
    stock1.arrayBebidasTotal.sort((a,b)=>{
        return b.relevance - a.relevance;
    })
    for (i=0; i<12; i++){
        stock1.addFeaturedItem(stock1.arrayBebidasTotal[i]);
    }
}

function addFeaturedCombos(){
    stock1.arrayCombosTotal.sort((a,b)=>{
        return b.relevance - a.relevance;
    })
    
    for (i=0; i<4; i++){
        stock1.addFeaturedCombo(stock1.arrayCombosTotal[i]);
    }
}


/* agregar las cards de productos featured al html, según los productos que hayan en el inventario (uso forEach en vez de map, ya que no necesito retornar nada) */
function cards__productosFeatured(){
    let productosFeatured = document.getElementById("productosFeatured");
    stock1.arrayBebidasFeatured.forEach(bebidas => {
        let producto = document.createElement("div");
        producto.classList.add("productos__producto");
        producto.classList.add(`productoFeat--${bebidas.id}`);
        producto.classList.add(`producto__info--${bebidas.id}`);
        producto.setAttribute(`data-info`, `${bebidas.info}`);

        let stockText;
        if (bebidas.outOfStock()){
            stockText = "Fuera de stock";
        } else{
            stockText = "En stock";
        }

        producto.innerHTML = `
        <p>${bebidas.tipo}</p>
        <button class="productos__producto__info__button producto__info__button--${bebidas.id}" tabindex="0" aria-label="Toggle Product Info">
            <i class="bi bi-three-dots productos__producto__info__button--open producto__info__button--${bebidas.id}--open"></i>
            <i class="bi bi-x productos__producto__info__button--close producto__info__button--${bebidas.id}--close hideDisplay"></i>
        </button>
        <h2>${bebidas.marca}</h2>
        <p>${bebidas.contNeto}ml</p>
        <p class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__stock">${stockText}</p>    
        <h3>$${bebidas.precio}</h3>
        <div class="productos__producto__buttonContainer">
        <button class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__menos__productsFeatured">-</button>
        <button class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__mas__productsFeatured">+</button>
        </div>
        `;
        
        producto.style.setProperty("--stock-image", bebidas.img);
        productosFeatured.appendChild(producto);
        
        let bebida__menos = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__menos__productsFeatured`);
        let bebida__mas = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__mas__productsFeatured`);
        bebida__menos.addEventListener("click", ()=>{shopCart1.removeItem(bebidas.id)});
        bebida__mas.addEventListener("click", ()=>{shopCart1.addItem(bebidas.id)});
    }); 
}


/* carrito - icono */
let carrito__numero = document.querySelector(".carrito__numero");
carrito__numero.innerHTML = shopCart1.shopList.length;
let carrito__total = document.querySelector(".carrito__total");
carrito__total.innerHTML = `$${shopCart1.subTotal}`;


/* carrito - lista de compras */

function toggleLista(){
    let carrito = document.querySelector(".carrito");
    let carrito__lista = document.querySelector(".carrito__lista");
    let ofertasMain = document.querySelector(".ofertasFeatured");
    let productosMain = document.querySelector(".productos");
    let ofertasPage = document.querySelector(".ofertas--page");
    let productosPage = document.querySelector(".productos--page");
    let cerrar = document.querySelectorAll(".carrito__lista__cerrar");
    let productosPage__filter = document.querySelector(".productosPage__filter");
    let header__title = document.querySelectorAll(".header__title");
    carrito.classList.toggle("carritoActive");
    carrito__lista.classList.toggle("carrito__lista__translated");
    ofertasMain.classList.toggle("noPointer");
    productosMain.classList.toggle("noPointer");
    ofertasPage.classList.toggle("noPointer");
    productosPage.classList.toggle("noPointer");
    productosPage__filter.classList.toggle("noPointer");
    cerrar.forEach(cerrarButton =>{cerrarButton.style.pointerEvents = "auto";});
    header__title.forEach(headerTitle =>{headerTitle.classList.toggle("noPointer")});

    function toggleLista__escEvent(e){
        if (e.key == "Escape" && carrito__lista.classList.contains("carrito__lista__translated")){
            toggleLista();
        }
    }

    document.addEventListener("keydown", toggleLista__escEvent);

    /* cambio la visibilidad al togglear la lista para facilitar navegacion por teclado cuando la lista esta cerrada */
    /* este timeout se repite tambien para las secciones de ofertas/combos y productos. sirve para esconder la visibilidad del container luego del translate. hay una doble verificacion if (una inicial y otra luego del timeout) para que no se buggee al spammear el boton */
    if (carrito__lista.classList.contains("visible")){
        document.removeEventListener("keydown", toggleLista__escEvent);
        setTimeout(()=>{
            if (!carrito__lista.classList.contains("carrito__lista__translated")){
                carrito__lista.classList.remove("visible");
            }
        }, 400);
    } else{
        carrito__lista.classList.add("visible");
    }
    
    let carrito__lista__ul = document.querySelector(".carrito__lista__ul");
    carrito__lista__ul.innerHTML = "";
    let shopListWithoutDuplicates = new Set (shopCart1.shopList);
    shopListWithoutDuplicates = Array.from(shopListWithoutDuplicates);
    
    for (const items of shopListWithoutDuplicates){
        for (const bebidas of stock1.arrayBebidasTotal){
            if (items == bebidas.id){
                let carrito__newLi = document.createElement("li");
                carrito__newLi.innerHTML = `
                <span>${bebidas.tipo}<br>${bebidas.marca}</span>
                <span>${bebidas.contNeto}ml</span>
                <span>$${bebidas.precio}</span>
                <span><div class="shopList__cantidad__${bebidas.id}">(x${bebidas.inShopList()})</div><div class="buttonContainer__shopList"><button class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__menos__shopList">-</button>
                <button class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__mas__shopList">+</button></div></span>
                <span class="shopList__precio__${bebidas.id}">$${bebidas.precio * bebidas.inShopList()}</span>
                `;
                
                carrito__lista__ul.appendChild(carrito__newLi);

                let bebida__menos = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__menos__shopList`);
                let bebida__mas = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__mas__shopList`);
                bebida__menos.addEventListener("click", ()=>{shopCart1.removeItem(bebidas.id)});
                bebida__mas.addEventListener("click", ()=>{shopCart1.addItem(bebidas.id)});
            }
        }

        for (const combos of stock1.arrayCombosTotal){
            if (items == combos.id){
                let carrito__newLi = document.createElement("li");
                carrito__newLi.innerHTML = `
                <span>COMBO<br>${combos.nombre}</span>
                <span>-</span>
                <span>$${combos.precioTotal}</span>
                <span><div class="shopList__cantidad__${combos.id}">(x${combos.inShopList()})</div><div class="buttonContainer__shopList"><button class="combo${combos.nombre.replace(/\s/g,"")}__menos__shopList">-</button>
                <button class="combo${combos.nombre.replace(/\s/g,"")}__mas__shopList">+</button></div></span>
                <span class="shopList__precio__${combos.id}">$${combos.precioTotal * combos.inShopList()}</span>
                `;

                carrito__lista__ul.appendChild(carrito__newLi);

                let combo__menos = document.querySelector(`.combo${combos.nombre.replace(/\s/g,"")}__menos__shopList`);
                let combo__mas = document.querySelector(`.combo${combos.nombre.replace(/\s/g,"")}__mas__shopList`);
                combo__menos.addEventListener("click", ()=>{shopCart1.removeItem(combos.id)});
                combo__mas.addEventListener("click", ()=>{shopCart1.addItem(combos.id)});
            }
        }
    }

    shopCart1.subTotalCalc();
    let carrito__total = document.querySelector(".carrito__lista__total__number");
    carrito__total.innerHTML = `$${shopCart1.subTotal}`
}

/* carrito evento - toggle list */
let carrito = document.querySelector(".carrito");
carrito.addEventListener("keydown", (e)=>{if(e.keyCode == 13){toggleLista()}});
carrito.addEventListener("click", toggleLista);
let carrito__cerrar = document.querySelector(".carrito__lista__cerrar");
carrito__cerrar.onclick = toggleLista;


/* carrito - vaciar */
function vaciarCompra(){
    localStorage.removeItem("shopList");
    window.location.reload();
}

let carrito__vaciar = document.querySelector(".carrito__lista__vaciar");
carrito__vaciar.onclick = vaciarCompra;


/* carrito - checkout */
function checkout(){
    $(".checkoutConfirmation").html(`
        <h3>TOTAL: $${shopCart1.subTotal}</h3>
        <p><span>➞ </span>Envío</p>
        <p><span>➞ </span>Medios de pago</p>
        <p><span>➞ </span>Confirmación</p>
    `);
    $(".checkoutConfirmation").finish().slideDown().delay(2800).slideUp();
}

let carrito__checkout = document.querySelector(".carrito__lista__checkout");
carrito__checkout.onclick = checkout;



/* sección productos */

function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

function toggleProductos(){
    let productos = document.querySelector(".productosPage");
    productos.classList.toggle("carrito__lista__translated");
    productos.style.overflowY = "scroll";
    productos.classList.toggle("toggleZ");

    if (productos.classList.contains("carrito__lista__translated")){
        productos.scrollTo(0,0);
    }

    document.getElementById("productosPage__filter").value = "todas"; 

    let nav__productos = document.querySelector("#nav__productos");
    nav__productos.classList.toggle("active");

    let nav__ofertas = document.querySelector("#nav__ofertas");
    if (nav__ofertas.classList.contains("active")){
        nav__ofertas.classList.toggle("active");
    }

    if (productos.classList.contains("visible")){
        location.hash = "/";
        setTimeout(()=>{
            if (!productos.classList.contains("carrito__lista__translated")){
                productos.classList.remove("visible"); 
                productos.scrollTo(0,0);
            }           
        }, 400);
    } else{
        productos.classList.add("visible");
        location.hash = "bebidas";
    }

    let ofertas = document.querySelector(".ofertasPage");
    if (ofertas.classList.contains("carrito__lista__translated")){
        ofertas.classList.toggle("carrito__lista__translated");
        ofertas.classList.toggle("toggleZ");
        setTimeout(()=>{
            if (!ofertas.classList.contains("carrito__lista__translated")){
                ofertas.classList.remove("visible"); 
                ofertas.scrollTo(0,0);
            }
        }, 400);
    }


    /* al abrir la seccion, esconder el overflow del body y compensar con margen por el ancho de la scrollbar (que desaparece) */
    
    let nav__ul = document.querySelector(".nav__ul");
    let navMenu__button = document.querySelector(".navMenu__button");
    let navMenu = document.querySelector(".navMenu");
    let carrito = document.querySelector(".carrito");
    let carrito__lista = document.querySelector(".carrito__lista");
    let scrollbar__width = getScrollbarWidth();

    if(document.documentElement.style.overflowY == "hidden"){
        let ofertasPage = document.querySelector(".ofertasPage");
        if (!ofertasPage.classList.contains("visible")){
            document.documentElement.style.overflowY = "scroll";
            productos.style.overflowY = "hidden";
            document.documentElement.style.marginRight = "0";
            nav__ul.style.marginRight = "0";
            navMenu__button.style.marginRight = "0";
            navMenu.style.marginRight = "0";
            carrito.style.right = "10px";
            carrito__lista.style.right = "9vw";
        } 
    } else{
        document.documentElement.style.overflowY = "hidden";
        document.documentElement.style.marginRight = `${scrollbar__width}px`;
        nav__ul.style.marginRight = `${scrollbar__width}px`;
        navMenu__button.style.marginRight = `${scrollbar__width}px`;
        navMenu.style.marginRight = `${scrollbar__width}px`;
        carrito.style.right = `${scrollbar__width + 10}px`;
        carrito__lista.style.right = `calc(${scrollbar__width}px + 9vw)`;
    }

    /* reset filter button */
    let filterButton = document.querySelector(".productosPage__filterWrapper__filter ");
    let searchButton = document.querySelector(".productosPage__filterWrapper__search");
    let filterBar = document.querySelector(".productosPage__filter");
    let searchBar = document.querySelector(".productosPage__search");
    let searchInput = document.querySelector("#productosPage__search");
    let filterInput = document.querySelector("#productosPage__filter");
    filterButton.classList.add("filterActive");
    searchButton.classList.remove("filterActive");
    filterBar.style.display = "flex";
    searchBar.style.display = "none";
    filterInput.value = "todas"; 
    searchInput.value = "";


  /* cerrar info de productos si cambio de seccion */
    let productosCards = document.querySelectorAll(".productos__producto");
    let infoButtonsOpen = document.querySelectorAll(".productos__producto__info__button--open");
    let infoButtonsClose = document.querySelectorAll(".productos__producto__info__button--close");
    let infoCategory = document.querySelectorAll(".productos__producto p:nth-of-type(1)");

    productosCards.forEach((producto)=>{
        if(producto.classList.contains("productsInfoFull")){
            producto.classList.toggle("productsInfoFull", false);
        } 
    });
    infoButtonsClose.forEach((button)=>{
        button.classList.add("hideDisplay");
    });
    infoButtonsOpen.forEach((button)=>{
        button.classList.remove("hideDisplay");
    });
    infoCategory.forEach((category)=>{
    category.classList.remove("productsInfoFullCategory");
    });

    cards__info__remove();
    filterLoop()
}

/* cards de la seccion productos */
function cards__productos(){
    let productos = document.getElementById("productosTotal");
    stock1.arrayBebidasTotal.forEach(bebidas => {
        let producto = document.createElement("div");
        producto.classList.add("productos__producto");
        producto.classList.add(`.productoTotal`);
        producto.classList.add(`productoTotal--${bebidas.id}`);
        producto.classList.add(`producto__info--${bebidas.id}`);
        producto.setAttribute(`data-info`, `${bebidas.info}`);

        let stockText;
        if (bebidas.outOfStock()){
            stockText = "Fuera de stock";
        } else{
            stockText = "En stock";
        }

        producto.innerHTML = `
        <p>${bebidas.tipo}</p>
        <button class="productos__producto__info__button producto__info__button--${bebidas.id}" tabindex="0" aria-label="Toggle Product Info">
            <i class="bi bi-three-dots productos__producto__info__button--open producto__info__button--${bebidas.id}--open"></i>
            <i class="bi bi-x productos__producto__info__button--close producto__info__button--${bebidas.id}--close hideDisplay"></i>
        </button>
        <h2>${bebidas.marca}</h2>
        <p>${bebidas.contNeto}ml</p>
        <p class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__stock">${stockText}</p>    
        <h3>$${bebidas.precio}</h3>
        <div class="productos__producto__buttonContainer">
        <button class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__menos__productsTotal">-</button>
        <button class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__mas__productsTotal">+</button>
        </div>
        `;

        producto.style.setProperty("--stock-image", bebidas.img);
        productos.appendChild(producto);

        let bebida__menos = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__menos__productsTotal`);
        let bebida__mas = document.querySelector(`.${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__mas__productsTotal`);
        bebida__menos.addEventListener("click", ()=>{shopCart1.removeItem(bebidas.id)});
        bebida__mas.addEventListener("click", ()=>{shopCart1.addItem(bebidas.id)});
    }); 
}


/* event link productos */
let link__productos = document.getElementById("nav__productos");
link__productos.onclick = toggleProductos;

let footer__link__productos = document.getElementById("footer__nav__productos");
footer__link__productos.onclick = toggleProductos;

let cerrar__productos = document.querySelector(".carrito__lista__cerrar--productos");
cerrar__productos.onclick = toggleProductos;

let cerrar__productos__title = document.querySelector("#header__title__productos");
cerrar__productos__title.onclick = toggleProductos;


/* sección ofertas/combos */
function toggleOfertas(){
    let ofertas = document.querySelector(".ofertasPage");
    ofertas.classList.toggle("carrito__lista__translated");
    ofertas.style.overflowY = "scroll";
    ofertas.classList.toggle("toggleZ");

    if (ofertas.classList.contains("carrito__lista__translated")){
        ofertas.scrollTo(0,0);
    }

    document.getElementById("productosPage__filter").value = "todas"; 
    
    let nav__ofertas = document.querySelector("#nav__ofertas");
    nav__ofertas.classList.toggle("active");

    let nav__productos = document.querySelector("#nav__productos");
    if (nav__productos.classList.contains("active")){
        nav__productos.classList.toggle("active");
    } 

    if (ofertas.classList.contains("visible")){
        location.hash = "/";
        setTimeout(()=>{
            if (!ofertas.classList.contains("carrito__lista__translated")){
                ofertas.classList.remove("visible"); 
                ofertas.scrollTo(0,0);
            }           
        }, 400);
    } else{
        ofertas.classList.add("visible");
        location.hash = "combos";
    }

    let productos = document.querySelector(".productosPage");
    if (productos.classList.contains("carrito__lista__translated")){
        productos.classList.toggle("carrito__lista__translated");
        productos.classList.toggle("toggleZ");
        setTimeout(()=>{
            if (!productos.classList.contains("carrito__lista__translated")){
                productos.classList.remove("visible"); 
                productos.scrollTo(0,0);
            }
        }, 400);
    }
    

    /* al abrir la seccion, esconder el overflow del body y compensar con margen por el ancho de la scrollbar (que desaparece) */
    
    let nav__ul = document.querySelector(".nav__ul");
    let navMenu__button = document.querySelector(".navMenu__button");
    let navMenu = document.querySelector(".navMenu");
    let carrito = document.querySelector(".carrito");
    let carrito__lista = document.querySelector(".carrito__lista");
    let scrollbar__width = getScrollbarWidth();
    
    if(document.documentElement.style.overflowY == "hidden"){
        let productosPage = document.querySelector(".productosPage");
        if (!productosPage.classList.contains("visible")){
            document.documentElement.style.overflowY = "scroll";
            ofertas.style.overflowY = "hidden";
            document.documentElement.style.marginRight = "0";
            nav__ul.style.marginRight = "0";
            navMenu__button.style.marginRight = "0";
            navMenu.style.marginRight = "0";
            carrito.style.right = "10px";
            carrito__lista.style.right = "9vw";
        } 
    } else{
        document.documentElement.style.overflowY = "hidden";
        document.documentElement.style.marginRight = `${scrollbar__width}px`;
        nav__ul.style.marginRight = `${scrollbar__width}px`;
        navMenu__button.style.marginRight = `${scrollbar__width}px`;
        navMenu.style.marginRight = `${scrollbar__width}px`;
        carrito.style.right = `${scrollbar__width + 10}px`;
        carrito__lista.style.right = `calc(${scrollbar__width}px + 9vw)`;
    }

    /* reset filter button */
    let filterButton = document.querySelector(".productosPage__filterWrapper__filter ");
    let searchButton = document.querySelector(".productosPage__filterWrapper__search");
    let filterBar = document.querySelector(".productosPage__filter");
    let searchBar = document.querySelector(".productosPage__search");
    let searchInput = document.querySelector("#productosPage__search");
    let filterInput = document.querySelector("#productosPage__filter");
    filterButton.classList.add("filterActive");
    searchButton.classList.remove("filterActive");
    filterBar.style.display = "flex";
    searchBar.style.display = "none";
    filterInput.value = "todas"; 
    searchInput.value = "";

    
    /* cerrar info de productos si cambio de seccion */
    let productosCards = document.querySelectorAll(".productos__producto");
    let infoButtonsOpen = document.querySelectorAll(".productos__producto__info__button--open");
    let infoButtonsClose = document.querySelectorAll(".productos__producto__info__button--close");
    let infoCategory = document.querySelectorAll(".productos__producto p:nth-of-type(1)");

    productosCards.forEach((producto)=>{
        if(producto.classList.contains("productsInfoFull")){
            producto.classList.toggle("productsInfoFull", false);
        } 
    });
    infoButtonsClose.forEach((button)=>{
        button.classList.add("hideDisplay");
    });
    infoButtonsOpen.forEach((button)=>{
        button.classList.remove("hideDisplay");
    });
    infoCategory.forEach((category)=>{
        category.classList.remove("productsInfoFullCategory");
    });

    cards__info__remove();
    filterLoop()
}

/* cards de la seccion ofertas/combos */
function cards__ofertas(){
    let ofertas = document.getElementById("ofertas");
    stock1.arrayCombosTotal.forEach(combos => {
        let wrapper__item = document.createElement("div");
        wrapper__item.classList.add("ofertasFeatured__wrapper__item");

        wrapper__item.innerHTML = `
        <h3><span>COMBO ${combos.nombre} &#8674; </span>$${combos.precioTotal}</h3>`;

        for (let j=0; j<combos.productos.length;j++){
            let combos__item = combos.productos[j];
            wrapper__item.innerHTML += `
            <p>${combos__item.tipo} ${combos__item.marca} ${combos__item.contNeto}ml</p>
            `
        }

        wrapper__item.innerHTML += `
        <div class="ofertasFeatured__wrapper__item__buttonContainer">
        <button class="COMBO${combos.nombre.replace(/\s/g,"")}__menos__combosTotal">-</button>
        <button class="COMBO${combos.nombre.replace(/\s/g,"")}__mas__combosTotal">+</button>
        </div>
        `
    
        ofertas.appendChild(wrapper__item);

        let combo__menos = document.querySelector(`.COMBO${combos.nombre.replace(/\s/g,"")}__menos__combosTotal`);
        let combo__mas = document.querySelector(`.COMBO${combos.nombre.replace(/\s/g,"")}__mas__combosTotal`);
        combo__menos.addEventListener("click", ()=>{shopCart1.removeItem(combos.id)});
        combo__mas.addEventListener("click", ()=>{shopCart1.addItem(combos.id)});
    }); 
}

let productosScrollUp = document.querySelector(".productosPage__scrollUp");
let ofertasScrollUp = document.querySelector(".ofertasPage__scrollUp");
productosScrollUp.addEventListener("click", ()=>{
    let productosPage = document.querySelector(".productosPage");
    productosPage.scrollTop = 0;
});
ofertasScrollUp.addEventListener("click", ()=>{
    let ofertasPage = document.querySelector(".ofertasPage");
    ofertasPage.scrollTop = 0;
})

/* event link ofertas/combos */
let link__ofertas = document.getElementById("nav__ofertas");
link__ofertas.onclick = toggleOfertas;

let footer__link__ofertas = document.getElementById("footer__nav__ofertas");
footer__link__ofertas.onclick = toggleOfertas;

let cerrar__ofertas = document.querySelector(".carrito__lista__cerrar--ofertas");
cerrar__ofertas.onclick = toggleOfertas;

let cerrar__ofertas__title = document.querySelector("#header__title__ofertas");
cerrar__ofertas__title.onclick = toggleOfertas;


/* cards de la seccion ofertasFeatured */
function cards__ofertasFeatured(){
    let ofertasFeatured = document.querySelector(".ofertasFeatured__wrapper");

    for (let i=0; i<stock1.arrayCombosFeatured.length; i++){
        let combo = stock1.arrayCombosFeatured[i];

        let wrapper__item = document.createElement("div");
        wrapper__item.classList.add("ofertasFeatured__wrapper__item");

        wrapper__item.innerHTML = `
        <h3><span>COMBO ${combo.nombre} &#8674; </span>$${combo.precioTotal}</h3>`;

        for (let j=0; j<combo.productos.length;j++){
            let combo__item = combo.productos[j];
            wrapper__item.innerHTML += `
            <p>${combo__item.tipo} ${combo__item.marca} ${combo__item.contNeto}ml</p>
            `
        }

        wrapper__item.innerHTML += `
        <div class="ofertasFeatured__wrapper__item__buttonContainer">
        <button class="COMBO${combo.nombre.replace(/\s/g,"")}__menos__combosFeatured">-</button>
        <button class="COMBO${combo.nombre.replace(/\s/g,"")}__mas__combosFeatured">+</button>
        </div>
        `
        
        ofertasFeatured.appendChild(wrapper__item);

        let combo__menos = document.querySelector(`.COMBO${combo.nombre.replace(/\s/g,"")}__menos__combosFeatured`);
        let combo__mas = document.querySelector(`.COMBO${combo.nombre.replace(/\s/g,"")}__mas__combosFeatured`);
        combo__menos.addEventListener("click", ()=>{shopCart1.removeItem(combo.id)});
        combo__mas.addEventListener("click", ()=>{shopCart1.addItem(combo.id)});
    }
}

/* cards info */
function cards__info(){
    let infoButton = document.querySelectorAll(".productos__producto__info__button");
    
    infoButton.forEach((button)=>{
        button.addEventListener("click", (e)=>{
            e.currentTarget.parentNode.classList.toggle("productsInfoFull");
            e.currentTarget.parentNode.children[0].classList.toggle("productsInfoFullCategory");
            Array.from(e.currentTarget.children).forEach(button=>{
                button.classList.toggle("hideDisplay");
            })
        })
    })
}

function cards__info__remove(){
    let infoButton = document.querySelectorAll(".productos__producto__info__button");
    
    infoButton.forEach((button)=>{
        button.parentNode.classList.toggle("productsInfoFull", false);
        button.parentNode.children[0].classList.toggle("productsInfoFullCategory", false);
        button.children[0].classList.toggle("hideDisplay", false);
        button.children[1].classList.toggle("hideDisplay", true);
    })
}


/* toggle dark light mode */
let lightMode = document.querySelector(".nav__toggleLightDark__light");
let darkMode = document.querySelector(".nav__toggleLightDark__dark");
let body = document.querySelector("body");

let colorMode = localStorage.getItem("colorMode");
if (colorMode){
    switch (colorMode) {
        case "light":
            body.classList.add("lightMode");

            lightMode.style.display = "none";
            darkMode.style.display = "inline-block";
            break;
    
        default:
            break;
    }
}

lightMode.addEventListener("click", ()=>{
    body.classList.add("lightMode");
    lightMode.style.display = "none";
    darkMode.style.display = "inline-block";
    localStorage.setItem("colorMode", "light");
})

darkMode.addEventListener("click", ()=>{
    body.classList.remove("lightMode");
    darkMode.style.display = "none";
    lightMode.style.display = "inline-block";
    localStorage.setItem("colorMode", "dark");
})

/* main color toggle */
let altColorActive = localStorage.getItem("altMainColor");
if (altColorActive){
    switch (altColorActive){
        case "yes": 
            body.classList.add("altMainColor");
        default:
            break;
    }
}

let mainColorButton = document.querySelector(".nav__toggleMainColor")
mainColorButton.addEventListener("click", ()=>{
    body.classList.toggle("altMainColor");

    if (body.classList.contains("altMainColor")){
        localStorage.setItem("altMainColor", "yes");
    } else{
        localStorage.setItem("altMainColor", "no");
    }
})

/* nav menu */
let navMenuButton = document.querySelector(".navMenu__button");
let navMenuButtonIcon = document.querySelector(".navMenu__button__icon")
let navMenu = document.querySelector(".navMenu");

navMenuButton.addEventListener("click", ()=>{
    navMenuButtonIcon.classList.toggle("navMenu__button__icon__open")
    $(".navMenu").slideToggle(280);
})


/* filter productos*/
function filterLoop(){
    let filterInput = document.querySelector("#productosPage__filter");
    let value = filterInput.value;
    let productosSearch = productosTotal.children;
    productsObject.forEach((bebida)=>{
        let isVisible = bebida.tipo.toUpperCase().includes(value.toUpperCase()) || bebida.categoria.toUpperCase().includes(value.toUpperCase()) || bebida.marca.toUpperCase().includes(value.toUpperCase()) || bebida.keywords.toUpperCase().includes(value.toUpperCase());
        productosSearch = Array.from(productosSearch);
        
        productosSearch.forEach((bebidaSearch)=>{
            if (isVisible){
                if (bebidaSearch.classList.contains(`productoTotal--${bebida.id}`)){
                    bebidaSearch.classList.toggle("hideDisplay", false);
                }
            } else{
                if (bebidaSearch.classList.contains(`productoTotal--${bebida.id}`)){
                    bebidaSearch.classList.toggle("hideDisplay", true);
                }
            }
        })
    })
}

function productFilter(){
    let filterButton = document.querySelector(".productosPage__filterWrapper__filter ");
    let filterBar = document.querySelector(".productosPage__filter");
    let filterInput = document.querySelector("#productosPage__filter");
    let searchButton = document.querySelector(".productosPage__filterWrapper__search");
    let searchBar = document.querySelector(".productosPage__search");
    let searchInput = document.querySelector("#productosPage__search");
    let productosTotal = document.querySelector("#productosTotal");
    let productosSearch = productosTotal.children;
    
    filterButton.addEventListener("click", ()=>{
        filterButton.classList.add("filterActive");
        searchButton.classList.remove("filterActive");
        filterBar.style.display = "flex";
        searchBar.style.display = "none";
        filterInput.value = "todas"; 
        searchInput.value = "";

        let notFoundContainer = document.querySelector(".productos__notFound");
        if (notFoundContainer){
            notFoundContainer.remove();
        }

        cards__info__remove();
        filterLoop();
    })


    filterInput.addEventListener("change", (e)=>{
        cards__info__remove();
        let value = e.target.value;
        productsObject.forEach((bebida)=>{
            let isVisible = bebida.tipo.toUpperCase().includes(value.toUpperCase()) || bebida.categoria.toUpperCase().includes(value.toUpperCase()) || bebida.marca.toUpperCase().includes(value.toUpperCase()) || bebida.keywords.toUpperCase().includes(value.toUpperCase());
            productosSearch = Array.from(productosSearch);
            
            productosSearch.forEach((bebidaSearch)=>{
                if (isVisible){
                    if (bebidaSearch.classList.contains(`productoTotal--${bebida.id}`)){
                        bebidaSearch.classList.toggle("hideDisplay", false);
                    }
                } else{
                    if (bebidaSearch.classList.contains(`productoTotal--${bebida.id}`)){
                        bebidaSearch.classList.toggle("hideDisplay", true);
                    }
                }
            })
        })
    })
}

/* search productos */
function productSearch(){
    let searchButton = document.querySelector(".productosPage__filterWrapper__search");
    let searchBar = document.querySelector(".productosPage__search");
    let searchInput = document.querySelector("#productosPage__search");
    let filterButton = document.querySelector(".productosPage__filterWrapper__filter ");
    let filterBar = document.querySelector(".productosPage__filter");
    let filterInput = document.querySelector("#productosPage__filter");
    let productosTotal = document.querySelector("#productosTotal");
    let productosSearch = productosTotal.children;
    productosSearch = Array.from(productosSearch);

    searchButton.addEventListener("click", ()=>{
        searchButton.classList.add("filterActive");
        filterButton.classList.remove("filterActive");
        searchBar.style.display = "flex";
        filterBar.style.display = "none";
        filterInput.value = "todas"; 
        searchInput.value = "";

        let notFoundContainer = document.querySelector(".productos__notFound");
        if (notFoundContainer){
            notFoundContainer.remove();
        }

        cards__info__remove();
        filterLoop();
    })

    searchInput.addEventListener("input", (e)=>{
        cards__info__remove();
        let value = e.target.value;
        value = value.trim();
        
        let notFoundContainer = document.querySelector(".productos__notFound");
        if (notFoundContainer){
            notFoundContainer.remove();
        }

        /* divido el input del search en palabras para hacer una busqueda mas amplia de los valores que se ingresen */
        let valueWords = value.split(" ");

        valueWords.forEach(value=>{
            productsObject.forEach((bebida)=>{
                let isVisible = bebida.tipo.toUpperCase().includes(value.toUpperCase()) || bebida.categoria.toUpperCase().includes(value.toUpperCase()) || bebida.marca.toUpperCase().includes(value.toUpperCase()) || bebida.keywords.toUpperCase().includes(value.toUpperCase());
    
                productosSearch.forEach((bebidaSearch)=>{
                    if (isVisible){
                        if (bebidaSearch.classList.contains(`productoTotal--${bebida.id}`)){
                            bebidaSearch.classList.toggle("hideDisplay", false);
                            bebidaSearch.setAttribute("data-filter", "1");
                        }
                    } else{
                        if (bebidaSearch.classList.contains(`productoTotal--${bebida.id}`)){
                            if (bebidaSearch.getAttribute("data-filter") != 1){
                                bebidaSearch.classList.toggle("hideDisplay", true);
                            } 
                        }
                    }
                })
            })
        })

        /* data-filter es un atributo temporal que uso (y luego elimino) para indicar si un producto ya fue encontrado en la busqueda (es util al buscar varias palabras) */
        productosSearch.forEach((bebidaSearch)=>{
            bebidaSearch.removeAttribute("data-filter");
        });

        let notFound = document.createElement("div");
        let found = 0;
        notFound.classList.add("productos__notFound");
        notFound.textContent = "No se encontraron resultados.";

        productosSearch.forEach(producto=>{
            if (!producto.classList.contains("hideDisplay")){
                found = 1;
            }
        });

        if (found == 0){
            productosTotal.append(notFound);
        }
    })

    searchInput.addEventListener("keydown", (e)=>{
        let searchInput = document.querySelector("#productosPage__search");
        if (e.keyCode == 13){
            searchInput.blur();
        }
    });
}



/* ESTA OTRA OPCION PERMITE FILTRAR (O BUSCAR) PRODUCTOS, PERO EN VEZ DE CAMBIAR EL DISPLAY SEGUN EL CRITERIO DE BUSQUEDA (COMO LA OPCION QUE DEJE ACTIVA), LO QUE HACE ES BUSCAR EN EL ARRAY DE BEBIDAS Y LUEGO CREA OTRO ARRAY  CON LAS BEBIDAS QUE CUMPLAN EL CRITERIO, Y REESCRIBE EL DOM CON LOS PRODUCTOS DE ESTE NUEVO ARRAY. 
EN UN PRINCIPIO USABA ESTA FORMA PERO DECIDI CAMBIAR YA QUE, AL NO HABER TANTOS PRODUCTOS, LOS MUESTRO TODOS DE UNA Y LUEGO CON EL OTRO FILTRO/BUSQUEDA CAMBIO EL DISPLAY, Y NO HAY QUE REESCRIBIR EL DOM POR TANTO ES MENOS INTENSIVO. PERO SI LOS PRODUCTOS FUERAN MAS Y TUVIERA QUE CONSULTAR UNA BASE DE DATOS CADA VEZ AL REALIZAR LA BUSQUEDA, ENTONCES ESTA OPCION IRIA MEJOR */
/* 
let filter = $("#productosPage__filter");
$(document).ready(function () {
    filter.on("change", productFilter); 
});
function productFilter(){
    let arrayBebidasFilter = stock1.arrayBebidasTotal.filter(bebida=> bebida.categoria.toLowerCase() == filter.val());

    if (filter.val() == "todas"){
        arrayBebidasFilter = stock1.arrayBebidasTotal;
    }

    $("#productosTotal").html("");

    arrayBebidasFilter.forEach(bebidas => {
        let producto = document.createElement("div");
        producto.classList.add("productos__producto");
        producto.classList.add(`.productoTotal`);
        producto.classList.add(`productoTotal--${bebidas.id}`);
        producto.classList.add(`producto__info--${bebidas.id}`);
        producto.setAttribute(`data-info`, `${bebidas.info}`);

        let stockText;
        if (bebidas.outOfStock()){
            stockText = "Fuera de stock";
        } else{
            stockText = "En stock";
        }

        $("#productosTotal").append(producto);

        $(`.productoTotal--${bebidas.id}`).html(`
        <p>${bebidas.tipo}</p>
        <button class="productos__producto__info__button producto__info__button--${bebidas.id}" tabindex="0" aria-label="Toggle Product Info">
            <i class="bi bi-three-dots productos__producto__info__button--open producto__info__button--${bebidas.id}--open"></i>
            <i class="bi bi-x productos__producto__info__button--close producto__info__button--${bebidas.id}--close hideDisplay"></i>
        </button>
        <h2>${bebidas.marca}</h2>
        <p>${bebidas.contNeto}ml</p>
        <p class="${bebidas.nombre.replace(/\s/g,"")}__stock">${stockText}</p>    
        <h3>$${bebidas.precio}</h3>
        <div class="productos__producto__buttonContainer">
        <button class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__menos__productsTotal">-</button>
        <button class="${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__mas__productsTotal">+</button>
        </div>
        `);

        $(`.productoTotal--${bebidas.id}`).css(`--stock-image`, `${bebidas.img}`);
        

        let bebida__menos = $(`.${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__menos__productsTotal`);
        let bebida__mas = $(`.${bebidas.nombre.replace(/\s/g,"")}${bebidas.contNeto}__mas__productsTotal`);
        bebida__menos.on("click", ()=>{shopCart1.removeItem(bebidas.id)});
        bebida__mas.on("click", ()=>{shopCart1.addItem(bebidas.id)});
    });

    cards__info();
} 
*/

function productSort(){
    let button = document.querySelector("#sortProducts");
    let buttonIcon = document.querySelector(".productosPage__sort__wrapper__button__icon");
    let buttonRelevance = document.querySelector("#sortProductsRelevance");
    let buttonMenor = document.querySelector("#sortProductsDown");
    let buttonMayor = document.querySelector("#sortProductsUp");
    let buttonRelevanceContainer = document.querySelector(".productosPage__sort__wrapper__options__relevancia");
    let buttonMenorContainer = document.querySelector(".productosPage__sort__wrapper__options__menor");
    let buttonMayorContainer = document.querySelector(".productosPage__sort__wrapper__options__mayor");
    let container = document.querySelector(".productosPage__sort__wrapper__options");
    
    const closeOptions = (e)=>{       
        if (e.target != button && e.target != buttonIcon){
            container.classList.toggle("visible");
            button.classList.toggle("borderRadiusNone");
            document.removeEventListener("click", closeOptions);
        }
    }

    button.addEventListener("click", ()=>{
        container.classList.toggle("visible");
        button.classList.toggle("borderRadiusNone");

        if (container.classList.contains("visible")){
            document.addEventListener("click", closeOptions) 
        } 
    })

    buttonMenor.addEventListener("click", ()=>{
        let productsTotal = document.querySelector("#productosTotal");
        let products = productsTotal.children;
        let arrayNodes = [];
        let id;
        let flag;
        
        buttonMenorContainer.classList.add("filterActiveOptions");
        buttonMenor.classList.add("sortOptionActive");
        buttonMayorContainer.classList.remove("filterActiveOptions");
        buttonMayor.classList.remove("sortOptionActive");
        buttonRelevanceContainer.classList.remove("filterActiveOptions");
        buttonRelevance.classList.remove("sortOptionActive");
        container.classList.toggle("visible");
        button.classList.toggle("borderRadiusNone");
        document.removeEventListener("click", closeOptions);
        
        products = Array.from(products);
        
        products.forEach(product => {
            arrayNodes.push(product);
            product.remove();
        })
        
        arrayNodes.forEach(node=>{
            flag = 0;
            if (node.classList.contains("hideDisplay")){
                node.classList.remove("hideDisplay");
                flag = 1;
            }
            
            id = node.className;
            id = id.split(" ");
            id.shift();
            id.shift();
            id.pop();
            
            id = id.toString();
            id = id.replace("productoTotal--", "");
            stock1.arrayBebidasTotal.forEach(producto=>{
                if(id == producto.id){
                    node.precio = producto.precio;
                }
            })

            if (flag ==1){
                node.classList.add("hideDisplay");
            }
        })
        
        arrayNodes.sort((a,b)=>{
            return a.precio - b.precio;
        })
    
        arrayNodes.forEach(node=>{
            productsTotal.appendChild(node);
        })
    })

    buttonMayor.addEventListener("click", ()=>{
        let productsTotal = document.querySelector("#productosTotal");
        let products = productsTotal.children;
        let arrayNodes = [];
        let id;
        let flag;
        buttonMayorContainer.classList.add("filterActiveOptions");
        buttonMayor.classList.add("sortOptionActive");
        buttonMenorContainer.classList.remove("filterActiveOptions");
        buttonMenor.classList.remove("sortOptionActive");
        buttonRelevanceContainer.classList.remove("filterActiveOptions");
        buttonRelevance.classList.remove("sortOptionActive");
        container.classList.toggle("visible");
        button.classList.toggle("borderRadiusNone");
        document.removeEventListener("click", closeOptions);
        
        products = Array.from(products);
        
        products.forEach(product => {
            arrayNodes.push(product);
            product.remove();
        })
        
        arrayNodes.forEach(node=>{
            flag = 0;
            if (node.classList.contains("hideDisplay")){
                node.classList.remove("hideDisplay");
                flag = 1;
            }
            
            id = node.className;
            id = id.split(" ");
            id.shift();
            id.shift();
            id.pop();
            
            id = id.toString();
            id = id.replace("productoTotal--", "");
            stock1.arrayBebidasTotal.forEach(producto=>{
                if(id == producto.id){
                    node.precio = producto.precio;
                }
            })

            if (flag ==1){
                node.classList.add("hideDisplay");
            }
        })
        
        arrayNodes.sort((a,b)=>{
            return b.precio - a.precio;
        })
    
        arrayNodes.forEach(node=>{
            productsTotal.appendChild(node);
        })
    })

    buttonRelevance.addEventListener("click", ()=>{
        let productsTotal = document.querySelector("#productosTotal");
        let products = productsTotal.children;
        let arrayNodes = [];
        let id;
        let flag;
        buttonRelevanceContainer.classList.add("filterActiveOptions");
        buttonRelevance.classList.add("sortOptionActive");
        buttonMayorContainer.classList.remove("filterActiveOptions");
        buttonMayor.classList.remove("sortOptionActive");
        buttonMenorContainer.classList.remove("filterActiveOptions");
        buttonMenor.classList.remove("sortOptionActive");
        container.classList.toggle("visible");
        button.classList.toggle("borderRadiusNone");
        document.removeEventListener("click", closeOptions);
        
        products = Array.from(products);
        
        products.forEach(product => {
            arrayNodes.push(product);
            product.remove();
        })
        
        arrayNodes.forEach(node=>{
            flag = 0;
            if (node.classList.contains("hideDisplay")){
                node.classList.remove("hideDisplay");
                flag = 1;
            }
            
            id = node.className;
            id = id.split(" ");
            id.shift();
            id.shift();
            id.pop();
            
            id = id.toString();
            id = id.replace("productoTotal--", "");
            stock1.arrayBebidasTotal.forEach(producto=>{
                if(id == producto.id){
                    node.relevance = producto.relevance;
                }
            })

            if (flag ==1){
                node.classList.add("hideDisplay");
            }
        })
        
        arrayNodes.sort((a,b)=>{
            return b.relevance - a.relevance;
        })
    
        arrayNodes.forEach(node=>{
            productsTotal.appendChild(node);
        })
    })
}

function initialSort(){
    let button = document.querySelector("#sortProducts");
    let buttonMenor = document.querySelector("#sortProductsRelevance");
    let container = document.querySelector(".productosPage__sort__wrapper__options");
    let event = new Event("click");

    buttonMenor.dispatchEvent(event);
    container.classList.toggle("visible");
    button.classList.toggle("borderRadiusNone");
}

/* header title animation - usando jquery y css*/
$(document).ready(function () {
    let header__logo = $(".header__title h1 span");
    header__logo.on("mouseenter", (e)=>e.target.classList.add("rubberBand"));
    header__logo.on("animationend webkitAnimationEnd oAnimationEnd", (e)=>e.target.classList.remove("rubberBand"));
});

function rubberBandOnce(){
    let header__title = $(".header__title h1 span");
    header__title.addClass("rubberBand");
    header__title.on("animationend webkitAnimationEnd oAnimationEnd", (e)=>e.target.classList.remove("rubberBand"));
}

function errorComponent(){
    /* si se ingresa un hash incorrecto, se redirige al home. en cambio, si se ingresa una pagina incorrecta, se mostraria la pagina 404 */
    window.location.href = "https://santio89.github.io/blackFriday/";
}


