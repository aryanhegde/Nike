import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  About,
  Services,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding bg-pale-blue">
        <PopularProducts />
      </section>
      <section className="padding ">
        <About />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      {/* <section className="padding-x">
        <Gallery />
      </section> */}
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
