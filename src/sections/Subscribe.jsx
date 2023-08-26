const Subscribe = () => {
  return (
    <section
      className="flex flex-col items-center justify-center max-container max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px]  lg:max-w-md font-palanquin font-bold">
        Visit <span className="text-coral-red">Us</span>
      </h3>

      <div className="flex w-full max-w-screen-lg ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d123541.57333337808!2d74.7507941754091!3d14.617628230147316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bbea9fb680c3e11%3A0xe57d30bfbbc77faa!2s1st%20floor%2C%20Akshay%20complex%2C%20Nataraja%20Rd%2C%20CP%20Bazar%2C%20Sirsi%2C%20Karnataka%20581401!3m2!1d14.6176427!2d74.833196!5e0!3m2!1sen!2sin!4v1692981738629!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex flex-col ml-12 ">
          <h4 className=" font-montserrat font-light text-slate-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
          <p className="font-light text-slate-600  mt-6">+91 9999999999</p>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
