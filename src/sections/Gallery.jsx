import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Carousel from "../components/carousel/Carousel";

function Gallery() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    // <div className="max-w-[1400px] h-[360px] md:h-[480px] lg:h-[620px] w-3/5 m-auto py-16 px-4 relative group mb-28">
    //   <div className="text-center mb-10 ">
    //     <h2 className=" text-4xl font-palanquin font-semibold">Gallery</h2>
    //     <p className="text-center ">Showcase of images of our dental clinic.</p>
    //   </div>
    //   <div
    //     style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    //     className="w-full h-full rounded-2xl  bg-center bg-cover duration-500"
    //   ></div>
    //   <div className="flex items-center">

    //     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
    //       <BsChevronCompactLeft onClick={prevSlide} size={30} />
    //     </div>

    //     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
    //       <BsChevronCompactRight onClick={nextSlide} size={30} />
    //     </div>
    //   </div>
    //   <div className="flex top-4 justify-center py-2">
    //     {slides.map((slide, slideIndex) => (
    //       <div
    //         key={slideIndex}
    //         onClick={() => goToSlide(slideIndex)}
    //         className="text-2xl cursor-pointer"
    //       >
    //         <RxDotFilled />
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="flex flex-col items-center justify-center mx-auto w-full md:w-4/5   lg:w-3/5 h-screen text-center">
      <h2 className="mt-12  text-[56px] lg:text-[72px] font-palanquin font-semibold text-slate-900 ">
        Explore our <span className="text-coral-red">Dental</span> Gallery
      </h2>
      <p className="font-light leading-6">
        Explore our clinic's moments, from skilled procedures to satisfied
        smiles. Witness our dedication to dental care excellence and patient
        satisfaction.{" "}
      </p>
      {/* <Carousel /> */}
    </div>
  );
}

export default Gallery;
