import { motion } from "framer-motion";

const foodProduct = [
  {
    id: "1",
    image:
      "https://www.allrecipes.com/thmb/91kDp_3WYGHzsmMkXnDP5s9mBGI=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/35151-traditional-filipino-lumpia-ddmfs-hero-1x2-0745-d25195def74049598ca7cfa057f9d77e.jpg",
    subtitle: "Food",
    name: "Lumpia",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
  },
  {
    id: "2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Siomai_sa_Tisa.jpg/800px-Siomai_sa_Tisa.jpg",
    subtitle: "Food",
    name: "Siomai",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
  },
  {
    id: "3",
    image:
      "https://i.ytimg.com/vi/JkXcK531fEE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAEOHHv8dhMUhwtEtuksRVlcDaAZA",
    subtitle: "Food",
    name: "Siopao",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
  },
  {
    id: "4",
    image:
      "https://i.ytimg.com/vi/yM9r4V6Mr2w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnC3LQz20j2m3hsGblWZkT15ey1Q",
    subtitle: "Food",
    name: "Fries",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
  },
];

const Menu = () => {
  return (
    <section id="menu" className="min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-2xl font-bold title-font mb-2 ">
              Savor the Best of Filipino Cuisine with Our Exclusive Product
              Line!
            </h1>
            <div className="h-1 w-20 bg-yellow-400 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            Introducing our Four Must-Try Delicacies that bring the authentic
            flavors of the Philippines straight to your table! Each product is
            crafted with care and tradition, ensuring a delightful culinary
            experience.
          </p>
        </div>
        {!foodProduct.length ? (
          <p>No product available</p>
        ) : (
          <div className="flex flex-wrap -m-4 ">
            {foodProduct.map((item) => (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                key={item.id}>
                <div className="bg-gray-100 bg-opacity-40 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.image}
                    alt={item.name}
                  />
                  <h3 className=" text-yellow-400 text-s font-semibold title-font ">
                    {item.subtitle}
                  </h3>
                  <h2 className="text-lg text-gray-700 font-semibold title-font mb-4">
                    {item.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
