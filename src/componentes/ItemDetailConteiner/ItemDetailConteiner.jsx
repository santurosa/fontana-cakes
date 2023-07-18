import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";
// import { getUnProducto } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailConteiner = () => {
    const [producto, setProducto] = useState(null);
    const {idItem} = useParams();

    useEffect( () => {
      const nuevoDoc = doc(db, "productos", idItem);

      getDoc(nuevoDoc)
        .then(res => {
          const data = res.data()
          const nuevoProducto = {id: res.id, ...data}
          setProducto(nuevoProducto);
        })
    }, [idItem])

/*     useEffect(() => {
        getUnProducto(idItem)
            .then(respuesta => setProducto(respuesta))
    },[idItem]) */

  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailConteiner