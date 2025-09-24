import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getData } from "../context/DataContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";
import MidBanner from "./MidBanner";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  useEffect(() => {
    fetchAllProducts();
  }, []);

  console.log("Data -->", data);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <AiOutlineArrowLeft
          size={32}
          className="arrow"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
          // onMouseOver="this.style.backgroundColor=`#555`"
          // onMouseOver="this.style.backgroundColor=`#555`"
        />
      </div>
    );
  };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        style={{
          position: "absolute",
          top: "50%",
          right: "30px",
          transform: "translateY(-50%)",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        <AiOutlineArrowRight
          size={32}
          className="text-white"
          style={{
            background: "#f53347",
            borderRadius: "50%",
            padding: "6px",
          }}
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-10 justify-center h-[600px] my-10 md:my-0 items-center px-4">
                <div className="md:space-y-6 space-y-4">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    {" "}
                    Powering your world with best in electronics
                  </h3>
                  <h1 className="text-xl md:text-4xl font-bold uppercase line-clamp-2 md:line-clamp-3 max-w-[90%] md:max-w-[500px] text-white">
                    {item.title}
                  </h1>
                  <p className="max-w-[90%] md:max-w-[500px] line-clamp-3 text-gray-400 pr-2 md:pr-7">
                    {item.description}
                  </p>
                  <button className=" bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">
                    Shop Now
                  </button>
                </div>
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-[250px] md:w-[500px] hover:scale-90 transition-all shadow-2xl shadow-red-400 mx-auto"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
