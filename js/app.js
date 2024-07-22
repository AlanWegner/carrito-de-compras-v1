const botones = document.querySelectorAll('.btn-primary'); //['🍓','🍋','🍌']
const template = document.querySelector('#template');
const contenedor = document.querySelector('#contenedor');

//carrito
const carrito = {};

const agregarProductoCarrito = (e) => {
    e.target.dataset.fruta; // 'Frutilla 🍓'

    //producto
    const producto = {
        nombre: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };
    //agregar ese producto al carrito
    carrito[producto.nombre]= producto;
};

botones.forEach((item) => {
    item.addEventListener('click', agregarProductoCarrito);
});
