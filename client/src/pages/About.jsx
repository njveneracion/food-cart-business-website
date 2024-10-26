import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="text-gray-700 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          className="flex flex-col text-center w-full mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          transition={{ duration: 0.5 }}>
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            About Us
          </h1>
          <div className="h-1 w-20 bg-yellow-500 rounded mx-auto mb-8"></div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            At [Your Store Name], we believe that food is a celebration of
            culture and community. Our mission is to bring authentic Filipino
            flavors to your table, allowing you to experience the rich culinary
            heritage of the Philippines, no matter where you are.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Our Values Section */}
          <motion.div
            className="w-full md:w-1/3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="card w-full bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <figure>
                <img
                  src="https://365financialanalyst.com/wp-content/uploads/2020/11/Defining-a-companys-Vision-Mission-Goals-and-Values-statements-thumb.jpg" // Replace with actual image URL
                  alt="Our Values"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg">Our Values</h2>
                <p>
                  Quality, Authenticity, and Community are at the heart of
                  everything we do. We source the finest ingredients to ensure
                  every dish is a true representation of Filipino cuisine.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Story Section */}
          <motion.div
            className="w-full md:w-1/3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="card w-full bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <figure>
                <img
                  src="https://media.licdn.com/dms/image/C5612AQG0aNpQz-IWyw/article-cover_image-shrink_600_2000/0/1584107114542?e=2147483647&v=beta&t=xHnuRBWsVtYCfAdu15xq-SoLrv-dmFMcMWYVl1B5gZ4" // Replace with actual image URL
                  alt="Our Story"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg">Our Story</h2>
                <p>
                  Founded by a group of passionate food lovers, our journey
                  began with the desire to share the joy of Filipino food with
                  everyone. Each recipe is crafted with love and tradition,
                  reflecting our cultural roots.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Join Us Section */}
          <motion.div
            className="w-full md:w-1/3"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <div className="card w-full bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <figure>
                <img
                  src="https://bf278ab610.clvaw-cdnwnd.com/733ec68989464b7dcbdf0f12e229bce1/200000366-4cd7c4cd7e/opportunity.jpeg?ph=bf278ab610" // Replace with actual image URL
                  alt="Join Us"
                  className="w-full h-64 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg">Join Us</h2>
                <p>
                  We invite you to explore our menu and discover the delightful
                  flavors of the Philippines. Whether you're a long-time fan or
                  trying it for the first time, there's something for everyone
                  at [Your Store Name].
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="btn btn-warning btn-wide font-bold text-lg">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
