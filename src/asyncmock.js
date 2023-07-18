/* const Productos = [
    { id: "1", nombre: "Choco Ice Gas Frío Para Chocolateria 250 ml.", precio: 2400, stock: 6, img: "../img/choco-ice.jpg", idCat: "1" },
    { id: "2", nombre: "Molde de chocolate Huevo liso", precio: 12500, stock: 4, img: "../img/2006CW.jpg", idCat: "2" },
    { id: "3", nombre: "Cintura Regulable Cuadrada Acero Inoxidable", precio: 3800, stock: 9, img: "../img/cintura-cuadrada.jpg", idCat: "3" },
    { id: "4", nombre: "Lamina antiadherente Fontana", precio: 2499, stock: 7, img: "../img/lamina-fontana.jpg", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Productos);
        }, 100)
    })
}

// Función que nos retorna solo un item en vez de todo el array como la función getProducto():

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = Productos.find(producto => producto.id === id);
            resolve(producto);
        }, 100);
    })
}

// Función que retorna un array de una determinada categoria de producto:

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout(() => {
            const productosCategoria = Productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },100)
    })
} */