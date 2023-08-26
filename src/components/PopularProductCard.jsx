const ServiceCard = ({ icon, label, subText }) => {
  return (
    // <div className="flex flex-1 flex-col w-full max-sm:w-full">
    //   <div>
    //     <img src={imgURL} alt={name} className="w-[56px] h-[56px]" />
    //     <div className="mt-8 flex justify-start gap-2.5">
    //       <img src={star} alt="rating icon" width={24} height={24} />
    //       <p className="font-montserrat text-xl leading-normal text-slate-gray">
    //         (4.5)
    //       </p>
    //     </div>
    //     <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
    //       {name}
    //     </h3>
    //     <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
    //       {price}
    //     </p>
    //   </div>
    // </div>
    <div className="flex flex-col mx-auto w-full max-sm:w-[300px]">
      <div className="bg-blue-50 p-4 rounded-lg hover:bg-blue-200 h-full hover:shadow-lg  border border-blue-200 ">
        <div className="p-2 flex items-center justify-start">
          <img src={icon} alt={label} className="w-[38px] h-[38px]" />
          <h2 className="ml-2 font-palanquin font-medium text-[16px] text-center">
            {label}
          </h2>
        </div>
        <div className="">
          <p className="p-2 m-2 font-montserrat font-medium leading-6 text-sm text-slate-600">
            {subText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
