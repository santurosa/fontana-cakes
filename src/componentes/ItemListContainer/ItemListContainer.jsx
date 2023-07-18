import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../services/config";
// Collection: la voy a usar para vincular una colección de Firestore (ejemplo "productos");
// GetDocs: me trae todos los documentos de una colección
// Query: la voy a usar para hacer consultas a la BD.
// Where: para usar filtros en las consultas.

// import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (texto) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

    useEffect( () => {
        const misProductos = idCategoria ? query(collection(db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos");

        getDocs(misProductos)
            .then(res => {
                const nuevosProductos = res.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(nuevosProductos);
            })
            .catch(error => console.log(error));
    }, [idCategoria])

    /* useEffect(() => {
        const funcion = idCategoria ? getProductosPorCategoria : getProductos;

        funcion(idCategoria)
            .then(res => setProductos(res))
    },[idCategoria]) */

    return (
        <>
            <h2 className="text-center m-4">{texto.greeting}</h2>
            <ItemList productos = { productos } />
        </>
    )
}

export default ItemListContainer