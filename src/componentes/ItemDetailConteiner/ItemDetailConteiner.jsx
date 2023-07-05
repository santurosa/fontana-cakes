import { useState, useEffect } from "react";
import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
    },[idItem])

  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailConteiner