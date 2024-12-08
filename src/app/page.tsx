import HeroSection from "@/components/Hero";
import FeaturesProduct from '../components/FeaturedProduct';
import LatestProduct from '../components/LatestProduct';
import Blog from '../components/Blog';
import Sponser from "@/components/Sponser";
import Subscribe from "@/components/Subscribe";
import Category from '../components/Categories';
import DiscountItem from '../components/DiscountItem';
import TrendingProduct from "../components/TrendingProducts";
import New from '../components/News';
import Services from "@/components/Services";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturesProduct/>
      <LatestProduct/>
      <Services/>
      <New/>
      <TrendingProduct/>
      <DiscountItem/>
      <Category/>
      <Subscribe/>
      <Sponser/>
      <Blog/>
    </div>
  );
}
