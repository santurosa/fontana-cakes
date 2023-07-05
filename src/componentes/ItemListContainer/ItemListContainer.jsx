import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (texto) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect(() => {
        const funcion = idCategoria ? getProductosPorCategoria : getProductos;

        funcion(idCategoria)
            .then(res => setProductos(res))
    },[idCategoria])

    return (
        <>
            <h2 className="text-center m-4">{texto.greeting}</h2>
            <ItemList productos = { productos } />
        </>
    )
}

export default ItemListContainer