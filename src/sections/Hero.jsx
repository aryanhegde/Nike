import Button from "../components/Button";

import { arrowRight } from "../assets/icons";
import { smileHero } from "../assets/images";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Sumukha Dental Clinic
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            Your Journey To
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">
            Radiant Smile{" "}
          </span>
          Begins Here.
        </h1>{" "}
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Crafting Healthy, Beautiful Smiles: Experience Excellence in Dentistry
          at Sumukha Dentals
        </p>
        <Button label="Book an Appointment" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-12">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* RIGHT SIDE  */}
      <div className="relative hidden  flex-1 md:flex justify-center items-center  max-xl:py-28  bg-cover bg-center">
        <img
          src={smileHero}
          alt="show collection"
          height={500}
          width={610}
          className="object-cover relative z-10 h-[540px]  ml-12 rounded-2xl"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {/* {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgUrl={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))} */}
          {/* <img src={smileHero} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
