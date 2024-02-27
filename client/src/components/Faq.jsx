import React from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className=" mb-10 max-w-[600] mx-auto">
      <h2 className="py-10 text-3xl font-bold text-[#246124] mt-10 text-center">
        Pertanyaan Umum yang Sering Diajukan (FAQ)
      </h2>
      <div className="p-4 text-md bg-slate-100 rounded-lg my-3 ">
        <Accordion
          title="Apa itu Madinah Salam?"
          answer="Madinah Salam adalah platform belajar ilmu syar'i secara online"
        />
        <Accordion
          title="Program apa saja yang disediakan oleh Madinah Salam?"
          answer="Madinah Salam adalah platform belajar ilmu syar'i secara online"
        />
        <Accordion
          title="Kenapa harus belajar di Madinah Salam?"
          answer="Madinah Salam adalah platform belajar ilmu syar'i secara online"
        />
        <Accordion
          title="Manfaat apa saja yang bisa ddidapatkan ketika belajar di Madinah Salam?"
          answer="Madinah Salam adalah platform belajar ilmu syar'i secara online"
        />
        <Accordion
          title="Bagaimana cara belajar di Madinah Salam?"
          answer="Madinah Salam adalah platform belajar ilmu syar'i secara online"
        />
      </div>
    </div>
  );
};

export default Faq;
