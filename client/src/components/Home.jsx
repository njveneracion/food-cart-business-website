import Hero from "../pages/Hero";
import Header from "../components/Header";
import Menu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Gallery from "../pages/Gallery";

const Home = () => {
  return (
    <>
      <Header />
      <hr />
      <Hero />
      <hr />
      <Menu />
      <hr />
      <About />
      <hr />
      <Gallery />
      <hr />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
