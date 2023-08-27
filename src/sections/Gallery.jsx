function Gallery() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full md:w-4/5   lg:w-3/5 h-screen text-center">
      <h2 className="mt-12  text-[56px] lg:text-[72px] font-palanquin font-semibold text-slate-900 ">
        Explore our <span className="text-coral-red">Dental</span> Gallery
      </h2>
      <p className="font-light leading-6">
        Explore our clinic&apos;s moments, from skilled procedures to satisfied
        smiles. Witness our dedication to dental care excellence and patient
        satisfaction.{" "}
      </p>
      {/* <Carousel /> */}
    </div>
  );
}

export default Gallery;
