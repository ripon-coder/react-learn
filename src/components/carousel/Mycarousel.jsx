import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Mycarousel.css";
import { apiFetch } from "../../../api"; //
import slider1 from "../../assets/carousel/slider1.jpg";
import slider2 from "../../assets/carousel/slider2.jpg";
import slider3 from "../../assets/carousel/slider3.jpg";

const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

const Mycarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiFetch("page/slider", {
      method: "get",
    }).then((res) => {
      if (res?.data) {
        setData(res.data.slider);
      } else {
        console.error("No Slider data found");
      }
    });
  }, []);

  return (

    <div className="carousel">
      {data.length > 0 ? (
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {data.map((item) => (
            <div>
              <img src={`${IMAGE_BASE_URL}/slider/${item.image}`} alt="Slide 1" />
            </div>
          ))}

        </Carousel>
      ) : (
        <div style={{height:"448px"}} className="parentLoader">
          <div style={{height:"448px"}} className="loaderSlider">
            <div className="loader-spinner"></div>
          </div>
        </div>
      )
      }
    </div>

  )
};

export default Mycarousel;
