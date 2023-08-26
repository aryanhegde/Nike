import { dentalClinic } from "../assets/images";
import Button from "../components/Button";

const About = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold  lg:max-w-lg">
          <span className="text-coral-red">Sumukha </span>
          <span className="text-coral-red">Dentals: </span>
          Your Pathway to Exceptional Dental Care
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          At Sumukha Dentals, we are committed to nurturing healthy smiles
          through state-of-the-art technology, personalized care, and lasting
          relationships. Visit us for a confident, vibrant smile
        </p>
        {/* <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p> */}
        <div className="mt-11">
          <Button label="Book an Appointment" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center ">
        <img
          src={dentalClinic}
          alt="Shoe"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default About;
