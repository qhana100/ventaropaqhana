const productoContent = document.getElementById("ProductoContent");
const verCarrito = document.getElementById("vercarrito");
const modalContainer = document.getElementById("modal-container");
let carrito = [];

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = ` 
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>Bs.${product.precio}</p>
    `;
    productoContent.append(content);

    let comprar = document.createElement('button');
    comprar.innerText = "Comprar";
    comprar.className = "comprar";
    content.appendChild(comprar);

    comprar.addEventListener('click', ()=>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
    });    
});

verCarrito.addEventListener('click', ()=>{
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h2 class="modal-header-title">CARRITO DE LAS COMPRAS</h2>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-botton";

    modalbutton.addEventListener("click",()=>{
        modalContainer.style.display = "none";
    });
    
    modalHeader.append(modalbutton);

    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>Bs.${product.precio}</p>
        `;
        modalContainer.append(carritoContent);
    });
    const total = carrito.reduce((acc, el)=>acc + el.precio, 0);
    const totalcompra = document.createElement("div");
    totalcompra.className = "total-content";
    totalcompra.innerHTML = `
        <h2>Total de la compra: Bs.${total}</h2>
    `;
    modalContainer.append(totalcompra);
});