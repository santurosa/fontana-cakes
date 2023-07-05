import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({id, nombre, precio, img, stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);


  const manejadorCantidad = (cantidad)  => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora acá creo un objeto con el item y la cantidad:
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: ${precio}</h3>
        <h3>ID: {id}</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, molestias ullam repellendus quidem voluptates magni, perspiciatis, modi minima quod nam rem doloremque possimus voluptatum fuga quae odio vero accusamus illum.</p>
        <img src={img} alt={nombre} />
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail