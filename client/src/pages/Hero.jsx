import React from "react";
import { Link } from "react-scroll";
import { FaAngleUp } from "react-icons/fa";
import "./hero.css";

const ScrollToTopButton = () => {
  return (
    <Link
      to="#"
      smooth={true}
      duration={1000}
      className="btn btn-warning fixed bottom-5 right-5 rounded-full z-10">
      <FaAngleUp />
    </Link>
  );
};

const Home = () => {
  return (
    <>
      <section id="#" className="hero">
        <div className="container mx-auto flex px-5 py-24 flex-col items-start">
          <div className="flex flex-col text-left">
            <h1 className="title-font sm:text-7xl text-3xl mb-4 font-bold w-2/4 text-black">
              Satisfy Your Cravings with Our
              <br className="hidden lg:inline-block" />
              Delicious Meryenda
            </h1>
            <p className="mb-8 leading-relaxed  md:w-1/2 text-gray-900 font-semibold">
              Indulge in our delightful range of meryenda options, perfect for
              any time of the day! From savory to sweet, our offerings are made
              with high-quality ingredients that bring authentic flavors to your
              palate. Enjoy our handcrafted snacks, whether you're sharing with
              friends or treating yourself. Elevate your merienda experience and
              discover your new favorite go-to bites!
            </p>
            <div>
              <button className="btn btn-warning btn-wide btn-lg font-bold text-lg text-gray-800 rounded-full md-btn">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <ScrollToTopButton />
      </section>
    </>
  );
};

export default Home;
