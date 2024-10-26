import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <Header />
      <hr />
      <Home />
      <hr />
      <Menu />
      <hr />
      <About />
      <hr />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
