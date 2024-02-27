import React, { useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import youtube from "../assets/videeo.jpeg";
import Store from "../assets/ustadz1.jpeg";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Video = () => {
  const [isPlay, setIsPlay] = React.useState(false);
  const handlePlay = () => {
    setIsPlay(!isPlay);
  };

  const toggleFullScreen = () => {
    const iframe = document.getElementById("youtubeIframe");
    if (iframe) {
      if (!document.fullscreenElement) {
        iframe.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  };

  useEffect(() => {
    if (isPlay) {
      toggleFullScreen();
    }
  }, [isPlay]);

  return (
    <>
      <div className="min-h-[700px] center flex-col relative ">
        <div className="container mt-12 sm:mt-0 pb-20 sm:pb-0 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
            {/* text content section */}
            <div className="space-y-3 md:space-y-7 flex  flex-col justify-center text-center sm:text-left px-10 sm:px-0">
              <div>
                <h1 className="text-3xl font-bold text-[#246124] mb-3">
                  Mengapa Memilih Belajar di Madinah Salam?
                </h1>
                <p className="">Belajar lebih nyaman dan flexibel</p>
                <p>Metode pembelajaran interaktif</p>
                <p>Guru yang berkompeten dibidangnya</p>
              </div>
              <p className="text-md ">
                Mari mengenal lebih jauh tentang Madinah Salam
              </p>
              <div className="mx-auto sm:mx-0">
                <button
                  onClick={handlePlay}
                  className="btn flex items-center justify-center gap-2"
                >
                  Play on
                  <span>
                    <FaYoutube className="text-2xl" />
                  </span>
                </button>
              </div>
            </div>
            {/* image content section */}
            {/* <div className="relative"> */}
            {/* <img
                src={youtube}
                alt=""
                className="w-[180px] sm:w-[240px] lg:w-[340px] mx-auto relative z-30 rounded-xl"
              /> */}
            {/* <div className="absolute z-0  bottom-0 left-0 bg-black w-[240px] h-[20px] mx-auto blur-2xl"></div> */}
            {/* </div> */}
            {/* Review content section */}
            <div className="sm:pl-16 md:pl-24 flex justify-center sm:justify-end">
              <div className="flex items-center justify-end  ">
                <div className="space-y-4 ">
                  <img
                    src={Store}
                    alt=""
                    className="w-full h-[100px] object-cover rounded-xl shadow-md hover:scale-110 duration-200 cursor-pointer"
                  />
                  <p className="text-sm flex items-center gap-2">
                    4.8
                    <span>
                      <FaStar className="text-[#246124]" />
                    </span>
                  </p>
                  <p>
                    Sejarah singkat awal mula berdirinya Ma'had Madinah Salam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* hero bottom section */}
      </div>

      {/* video section */}
      {isPlay && (
        <div className="absolute  z-[9999] top-[100%]  left-0 w-full h-full bg-transparent backdrop-blur-sm">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="bg-transparent m-3 p-5 rounded-lg shadown-md w-full sm:w-[500px]">
              <div className="flex items-center">
                <h1 className="sm:text-xl font-bold text-[#246124]">
                  Subcribe chanel Toutube MS
                </h1>
                <IoClose
                  className="text-2xl cursor-pointer hover:scale-110 duration-200 text-[#246124] font-bold"
                  onClick={handlePlay}
                />
              </div>
              <iframe
                id="youtubeIframe"
                width="100%"
                height="270"
                src="https://www.youtube.com/embed/GQ-QoYTQUO0?si=-qSjkXqeYIJbVyAK"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Video;
