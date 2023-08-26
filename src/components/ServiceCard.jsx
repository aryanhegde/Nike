const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hover:bg-blue-50">
      <div className="w-14 flex h-14 justify-center items-center bg-blue-200 rounded-2xl p-2">
        <img src={imgURL} alt={label} width={34} height={34} />
      </div>
      <h3 className="font-palanquin mt-5 text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
