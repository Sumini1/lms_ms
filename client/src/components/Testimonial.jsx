import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tes1 from "../assets/orang1.jpeg";
import Tes2 from "../assets/orang2.jpeg";
import Tes3 from "../assets/orang3.jpeg";
import Tes4 from "../assets/orang4.jpeg";
import Tes5 from "../assets/orang5.jpeg";
import Tes6 from "../assets/orang6.jpeg";
const TestimonialData = [
  {
    id: 1,
    nama: "Aisyah",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: Tes1,
  },
  {
    id: 2,
    nama: "Khodijah",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: Tes2,
  },
  {
    id: 3,
    nama: "Sarah",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: Tes3,
  },
  {
    id: 4,
    nama: "Hajar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: Tes4,
  },
  {
    id: 5,
    nama: "Fatimah",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: Tes5,
  },
  {
    id: 6,
    nama: "Nurul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    img: Tes6,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-0 mb-10 mt-[-130px] ">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600] mx-auto">
          {/* <p className="text-[#246124] text-sm ">Program Unggulan</p> */}
          <h1 className="text-3xl font-bold text-[#246124] ">
            Kata Mereka Tentang Madinah Salam
          </h1>
          <p className="text-[#246124] text-sm">
            Berikut beberapa kata mereka tentang Madinah Salam
          </p>
        </div>
        {/* testimonial cards */}
        <div>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-7 shadow-lg py-8 mx-4 rounded-2xl relative bg-slate-100"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20 pl-3"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 pl-3">{data.text}</p>
                      <h3 className="text-xl font-bold text-black/80 pl-3 text-slate-600">
                        {data.nama}
                      </h3>
                    </div>
                  </div>
                  <p className="text-black/20 text-6xl font-serif absolute top-0 right-0 my-20 "> ,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
