import React, { useState } from "react";
import book1 from "../assets/hadis.jpeg";
import book4 from "../assets/tafsir.jpeg";
import garis from "../assets/garis4.jpeg";
import muntako from "../assets/fikih.jpeg";
import lisan from "../assets/lisan.jpeg";

const ImageList = [
  {
    id: 1,
    image: book4,
    title: "Solusi Lengkap Belajar Ilmu Syar'i",
    description:
      "Cara belajar ilmu syar'i dengan kelas interaktif sesuai Al-qur'an dan As sunnah",
  },
  {
    id: 2,
    image: muntako,
    title: "Solusi Lengkap Belajar Ilmu Syar'i",
    description:
      "Cara belajar ilmu syar'i dengan kelas interaktif sesuai Al-qur'an dan As sunnah",
  },
  {
    id: 3,
    image: lisan,
    title: "Solusi Lengkap Belajar Ilmu Syar'i",
    description:
      "Cara belajar ilmu syar'i dengan kelas interaktif sesuai Al-qur'an dan As sunnah",
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(book1);
  const [title, setTitle] = useState("Solusi Lengkap Belajar Ilmu Syar'i");
  const [description, setDescription] = useState(
    "Cara belajar ilmu syar'i yang  efektif dengan kelas interaktif sesuai Al-qur'an dan As sunnah"
  );

  const bgImage = {
    backgroundImage: `url(${garis})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
  };

  return (
    <>
      <div
        clasname="min-h-[550px] sm:min-h-[650px] bg-slate-200 flex justify-center items-center duration-200 "
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text-content-section */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1 className="text-3xl sm:text-2xl lg:text-3xl font-bold pb-8 pt-24 text-[#246124]">
                {title}
              </h1>
              <p className="text-sm text-[#246124]">{description}</p>
              <div>
                <button className="bg-[#246124] text-white px-4 py-2 rounded-md mt-4 text-sm hover:scale-105 duration-200 mb-9">
                  Mari belajar bersama kami
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="min-h-[450] flex justify-center relative order-1 sm:order-2">
              {/* main image */}
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center rounded-md">
                <img
                  src={imageId}
                  alt=""
                  className="w-[250px] h-[250px] sm:[h-450] sm:w-[450px] sm:scale-125 object-contain mx-auto rounded-md"
                />
              </div>
              {/* other image */}
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {
                ImageList.map((data) => (
                    <img src={data.image} alt="" 
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200 rounded-md"
                    onClick={() => {
                        setImageId(data.image);
                        setTitle(data.title);
                        setDescription(data.description);
                    }}
                    />
                ))
                }
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
