import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-200"
          src="https://www.fontanacakes.com/Tienda/img/carousel/WhatsApp%20Image%202023-04-28%20at%2010.55.34.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200"
          src="https://www.fontanacakes.com/Tienda/img/carousel/WhatsApp%20Image%202023-04-28%20at%2010.55.34.jpeg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-200"
          src="https://www.fontanacakes.com/Tienda/img/carousel/WhatsApp%20Image%202023-04-28%20at%2010.55.34.jpeg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels