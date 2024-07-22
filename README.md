# Este es mi Carrito de Compras v1

## Sobre el Proyecto

Este carrito de compras lo hide con mucho ♥ para aterrizar todo lo aprendido en JS

## Template

```html
<template id="template">
    <li class="p-2 w-100 list-group-item d-flex justify-content-between align-item-center">
        <span class="lead">Fruta</span>
        <span class="badge bg-primary rounded-pill">1</span>
    </li>
</template>
```

## Código JS

```js
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
```