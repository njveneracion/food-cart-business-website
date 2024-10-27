import { motion } from "framer-motion";
import { TbCurrencyPeso } from "react-icons/tb";
import { PiBowlFoodFill } from "react-icons/pi";
import { RiDrinksFill } from "react-icons/ri";
import { FaWineBottle } from "react-icons/fa";

const foodProduct = [
  {
    id: "1",
    image:
      "https://www.allrecipes.com/thmb/91kDp_3WYGHzsmMkXnDP5s9mBGI=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/35151-traditional-filipino-lumpia-ddmfs-hero-1x2-0745-d25195def74049598ca7cfa057f9d77e.jpg",
    subtitle: "Food",
    name: "Lumpiang Shanghai",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
    price: 5,
  },
  {
    id: "10",
    image:
      "https://www.foodandwine.com/thmb/TkzoOP9qc3ozedMISV4EyCSl0ec=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lumpiang-Sariwa-FT-RECIPE1221-2e7c56c4d0a64bf7a726037279638090.jpg",
    subtitle: "Food",
    name: "Lumpiang Sariwa",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
    price: 60,
  },
  {
    id: "2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Siomai_sa_Tisa.jpg/800px-Siomai_sa_Tisa.jpg",
    subtitle: "Food",
    name: "Siomai",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
    price: 4,
  },
  {
    id: "3",
    image:
      "https://i.ytimg.com/vi/JkXcK531fEE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAEOHHv8dhMUhwtEtuksRVlcDaAZA",
    subtitle: "Food",
    name: "Siopao",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
    price: 12,
  },
  {
    id: "4",
    image:
      "https://i.ytimg.com/vi/yM9r4V6Mr2w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnC3LQz20j2m3hsGblWZkT15ey1Q",
    subtitle: "Food",
    name: "Fries",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
    price: 20,
  },
  {
    id: "5",
    image: "https://i.ytimg.com/vi/5QT3ItUFTNQ/maxresdefault.jpg",
    subtitle: "Food",
    name: "Ginataang Munggo",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
    price: 30,
  },
  {
    id: "6",
    image: "https://i.ytimg.com/vi/cUgJ5bFezgc/maxresdefault.jpg",
    subtitle: "Drinks",
    name: "Gulaman Juice",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
    price: 10,
  },
  {
    id: "11",
    image:
      "https://static.wixstatic.com/media/6e6d8c_14087fc763a146a5b873d1851f2ae6e1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    subtitle: "Alcohol",
    name: "Red Horse",
    description:
      "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche",
    price: 90,
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
                whileHover={{ scale: 1.1 }}
                className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                key={item.id}>
                <div className="bg-gray-100 bg-opacity-40 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={item.image}
                    alt={item.name}
                  />
                  <h3 className=" text-warning text-s font-semibold title-font">
                    {item.subtitle === "Food" ? (
                      <div className="flex items-center gap-1">
                        {item.subtitle}
                        <PiBowlFoodFill />
                      </div>
                    ) : item.subtitle === "Drinks" ? (
                      <div className="flex items-center gap-1">
                        {item.subtitle}
                        <RiDrinksFill />
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        {item.subtitle}
                        <FaWineBottle />
                      </div>
                    )}
                  </h3>
                  <h2 className="text-lg text-gray-700 font-semibold title-font mb-4">
                    {item.name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.description}
                  </p>
                  <div className="flex items-center mt-3 text-lg justify-between">
                    <p className="flex items-center text-gray-800 font-semibold ">
                      <TbCurrencyPeso className="text-2xl" />
                      {item.price}
                    </p>
                    <button className="btn btn-sm btn-warning">
                      Add to cart
                    </button>
                  </div>
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
