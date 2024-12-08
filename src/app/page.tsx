import HeroSection from "@/components/Hero";
import FeaturesProduct from '../components/FeaturedProduct';
import LatestProduct from '../components/LatestProduct';
import Blog from '../components/Blog';
import Sponser from "@/components/Sponser";
import Subscribe from "@/components/Subscribe";
import Category from '../components/Categories';
import DiscountItem from '../components/DiscountItem';
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeaturesProduct/>
      <LatestProduct/>
      <DiscountItem/>
      <Category/>
      <Subscribe/>
      <Sponser/>
      <Blog/>
    </div>
  );
}
