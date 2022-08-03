 import Carousel from 'react-bootstrap/Carousel';
import "../../../assets/Home.css";
export const Banners = () => {
  return (
    <Carousel  className="carrouselPrin h-100">
      <Carousel.Item>        
        <img  loading="lazy" src="https://www.lacuracao.pe/cyberdays/assets/img/slider/tv/lc-200722-sliders-03-01.jpg" className="w-100 image_full imgaa" alt="First slide"/>
        <img  loading="lazy" src="https://www.lacuracao.pe/cyberdays/assets/img/slider/tv/lc-200722-sliders-03-02.jpg" className="w-100 image_med imgaa" alt="First slide"/>
        <img  loading="lazy" src="https://www.lacuracao.pe/cyberdays/assets/img/slider/tv/lc-200722-sliders-03-03.jpg" className="w-100 image_mobile imgaa" alt="First slide"/>
      </Carousel.Item>
      <Carousel.Item>        
        <img  loading="lazy" src="https://www.lacuracao.pe/cyberdays/assets/img/slider/computo/lc-200722-sliders-01-01z.jpg" className=" w-100 image_full imgaa" alt="Second slide"/>
        <img  loading="lazy" src="https://www.lacuracao.pe/cyberdays/assets/img/slider/computo/lc-200722-sliders-01-02.jpg" className=" w-100 image_med imgaa" alt="Second slide"/>
        <img  loading="lazy" src="https://www.lacuracao.pe/cyberdays/assets/img/slider/computo/lc-200722-sliders-01-03.jpg" className=" w-100 image_mobile imgaa" alt="Second slide"/>
      </Carousel.Item>
      <Carousel.Item>        
        <img  loading="lazy" src="https://www.lacuracao.pe/cyberdays/assets/img/slider/celulares/lc-200722-sliders-04-01.jpg" className=" w-100 image_full imgaa" alt="Third slide"/>
        <img  loading="lazy" src="https://www.lacuracao.pe/cyberdays/assets/img/slider/celulares/lc-200722-sliders-04-02.jpg" className=" w-100 image_med imgaa" alt="Third slide"/>
        <img  loading="lazy" src="https://www.lacuracao.pe/cyberdays/assets/img/slider/celulares/lc-200722-sliders-04-03.jpg" className=" w-100 image_mobile imgaa" alt="Third slide"/>
      </Carousel.Item>      
    </Carousel>
  );
};
