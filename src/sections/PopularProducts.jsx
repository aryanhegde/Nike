import ServiceCard from "../components/PopularProductCard";
import { dentalServices } from "../constants";

const PopularProducts = () => {
  return (
    <section className="max-container max-sm:mt-12" id="services">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Services </span>
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          From comprehensive checkups to smile transformations, our range of
          dental services is designed to enhance your oral health and
          confidence. Discover personalized care and advanced treatments for a
          brighter, healthier smile.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gAP-4 gap-14">
        {dentalServices.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
};
export default PopularProducts;
