import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Mycarousel.css";
import slider1 from "../../assets/carousel/slider1.jpg";
import slider2 from "../../assets/carousel/slider2.jpg";
import slider3 from "../../assets/carousel/slider3.jpg";

const Mycarousel = () => (
  <div className="carousel">
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src={slider1} alt="Slide 1" />
      </div>
      <div>
        <img src={slider2} alt="Slide 2" />
      </div>
      <div>
        <img src={slider3} alt="Slide 3" />
      </div>
    </Carousel>
  </div>
);
export default Mycarousel;
