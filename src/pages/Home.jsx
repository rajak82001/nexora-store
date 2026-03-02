import Navbar from "../components/Navbar";
import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrivals from "../components/NewArrivals";
import PromoBanner from "../components/PromoBanner";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Categories />
      <FeaturedProducts />
      <NewArrivals />
      <PromoBanner />
      <Footer />
    </>
  );
};

export default Home;