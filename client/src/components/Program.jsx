import React from "react";
import Book1 from "../assets/DiplomaArab.jpeg";
import Book2 from "../assets/diplomaILmi.jpeg";
import Book3 from "../assets/diplomaQur'an.jpeg";
import Book4 from "../assets/kursus.jpeg";
import Book5 from "../assets/s1.jpeg";
import { FaStar } from "react-icons/fa";

const ProgramData = [
  {
    id: 1,
    img: Book1,
    title: "Solusi Lengkap Belajar Ilmu Syar'i",
    rating: 5.0,
    color: "white",
  },
  {
    id: 2,
    img: Book2,
    title: "Solusi Lengkap Belajar Ilmu Syar'i",
    rating: 4.5,
    color: "blue",
  },
  {
    id: 3,
    img: Book3,
    title: "Solusi Lengkap Belajar Ilmu Syar'i",
    rating: 4.0,
    color: "green",
  },
  {
    id: 4,
    img: Book4,
    title: "Solusi Lengkap Belajar Ilmu Syar'i",
    rating: 4.0,
    color: "yellow",
  },
  {
    id: 5,
    img: Book5,
    title: "Solusi Lengkap Belajar Ilmu Syar'i",
    rating: 5.0,
    color: "red",
  },
];

const Program = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600] mx-auto">
          {/* <p className="text-[#246124] text-sm ">Program Unggulan</p> */}
          <h1 className="text-3xl font-bold text-[#246124]">Program</h1>
          <p className="text-[#246124] text-sm">Berikut beberapa program yang kami sediakan</p>
        </div>
        {/* body section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid cols-4 lg:grid-cols-5 place-items-center gap-3 " >
        {/* card section */}
        {ProgramData.map((data) => (
          <div
          key={data.id}
          className="space-y-3"
          >
            <img src={data.img} alt="" 
            className="max-w-[200px] h-[220px] object-cover inline-block hover:scale-110 duration-200 rounded-md"
            />
            <div>
              <h3 className="font-normal w-[200px]">{data.title}</h3>
              <div className="flex items-center gap-1">
                <FaStar  className="text-yellow-400"/>
                <span>{data.rating}</span>
              </div>
            </div>
          </div>
        ))
          
        }
        </div> 
      </div>
    </div>
  );
};

export default Program;
