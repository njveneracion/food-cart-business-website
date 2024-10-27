import React from "react";

const storyMessage = [
  "What started as a small dream quickly transformed into a bustling food cart. With a passion for cooking and a vision to create delicious, comforting meals, we hit the streets of [Your Location] with our signature offerings: siomai, siopao, and crispy fries. Each recipe is crafted with care, using time-honored techniques and fresh ingredients to ensure every bite is a celebration of flavor.",
  "As we navigated through the challenges of starting a small business, we remained committed to our values: quality, authenticity, and community. Each dish is made from scratch, reflecting our commitment to excellence and our love for food that brings people together. We believe that sharing a meal is not just about nourishment; it’s about connection, culture, and community.",
  "Over the years, our food cart has become more than just a place to grab a quick bite; it has become a gathering spot for friends and families. We are grateful for the relationships we’ve built with our customers and the support from our local community. Every smile and satisfied customer fuels our passion to keep serving delicious food with love.",
];

const About = () => {
  return (
    <section id="about" className="text-gray-700 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            About Us
          </h1>
          <div className="h-1 w-20 bg-warning rounded mx-auto mb-8"></div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            At <span className="text-lg font-bold">VFood</span>, we believe that
            food is a celebration of culture and community. Our mission is to
            bring authentic Filipino flavors to your table, allowing you to
            experience the rich culinary heritage of the Philippines, no matter
            where you are.
          </p>
        </div>

        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-200 p-8 rounded">
                <h1 className="font-bold text-3xl mb-3">Story</h1>
                <h2 className="font-bold">The Beginning</h2>
                <p className="leading-relaxed mb-6">{storyMessage[0]}</p>
                <h2 className="font-bold">Our Culinary Journey</h2>
                <p className="leading-relaxed mb-6">{storyMessage[1]}</p>
                <h2 className="font-bold">More Than Just Food</h2>
                <p className="leading-relaxed mb-6">{storyMessage[2]}</p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-60 bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036">
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://scontent.fcrk2-2.fna.fbcdn.net/v/t39.30808-6/456530356_3100102633473151_5086728379574215919_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFydYGYDmtL6yv1pbwrFLXLdLvToay-_Qp0u9OhrL79Ci-pqF27QOU6ckqe-h1OmGrCUrIzDZDlNJILI8UPk5xy&_nc_ohc=l8t0ICGmlFYQ7kNvgGGLPOx&_nc_ht=scontent.fcrk2-2.fna&_nc_gid=ANHZhXxd5GrSDchXjNuzesn&oh=00_AYAXijTZk-tdctbpvBhuL-g3ojcbcsgVLNOSpIMcmSP_ow&oe=67230C1C"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Mary Ann Veneracion
                    </span>
                    <span className="text-gray-500 text-sm">Food Vendor</span>
                  </span>
                </a>
              </div>
              <div className="h-60 bg-gray-100 p-8 rounded">
                <img
                  src="https://i.ytimg.com/vi/EEM2NeROsRM/maxresdefault.jpg"
                  alt="foodcart"
                  className="w-full rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
