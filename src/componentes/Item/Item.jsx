import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, precio, img }) => {
    return (
        <div className='cards'>
            <Card className="card m-4" border="info" style={{ width: '18rem' }}>
                <Card.Img variant="top" className='imgProducto' src={img} alt={nombre} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        Precio: ${precio}
                        <br />
                        ID: {id}
                    </Card.Text>
                    <Link to={`/item/${id}`}><Button variant="primary">Ver detalles</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item