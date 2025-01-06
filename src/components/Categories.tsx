"use client"
import Link from "next/link";
import dummyData from "@/app/data/dummydata";
import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme
import Image from "next/image";
import P1 from '../public/image 1.png';
type Category = {
  id: number;
  title: string;
  image:string;
  price:number;
};
const categories: Category[] = [
    { id:1 ,title:'Category title 1', image: "https://via.placeholder.com/150" , price:12},
    { id:2 ,title:'Category title 1', image: "https://via.placeholder.com/150" , price:12},
    { id:3 ,title:'Category title 1', image: "https://via.placeholder.com/150" , price:12},
    { id:4 ,title:'Category title 1', image: "https://via.placeholder.com/150" , price:12},
    { id:5 ,title:'Category title 1', image: "https://via.placeholder.com/150" , price:12},
   
];
const Products: React.FC = () => {
  const sliderSettings = {
      dots: true, // Pagination dots
      infinite: true, // Infinite scrolling
      speed: 500, // Transition speed
      slidesToShow: 4, // Default slides visible
      slidesToScroll: 1,
       // Scroll one slide at a time
      responsive: [
        {
          breakpoint:1366,
          settings:{
            slideToshow:2,
            vertical:false
          }
        },
        {
          breakpoint: 1024, // lg and below
          settings: {
            slidesToShow: 2, // Show 1 slide
            vertical: false, // Enable vertical scrolling
          },
        },
        {
          breakpoint: 768, // lg and below
          settings: {
            slidesToShow: 1, // Show 1 slide
            vertical: true, // Enable vertical scrolling
          },
        },
        {
          breakpoint: 640, // md and below
          settings: {
            slidesToShow: 1, // Show 2 slides
            vertical: false, // Horizontal scrolling
          },
        },
      ],
    };
  return (
    <section className="space-y-4 lg:pr-32 lg:pl-32 pt-20 sm:pr-20 sm:pl-20 overflow-x-hidden">
        <div className="text-center">
        <h1 className="text-3xl font-semibold">Top Categories</h1>
      </div>
      <div className="lg:block pt-10 slider-container mx-auto p-2 sm:pl-10">
      <Slider {...sliderSettings}>
          {dummyData.categories.map((c) => (
            <div key={c.id} className="flex justify-center">
              <div className="w-[269px] h-[345px] bg-white group relative mx-auto">
                <Image src={c.image} alt="c" width={225} height={225} className="p-2 rounded-full border-2 hover:border-2 hover:border-violet"/>
             <div className="h-auto text-center">
              <h3 className="hover:text-pink text-gray-800">{c.name}</h3>
              <p className="text-black">{c.price}</p>
              <Link href={`/category/${c.id}`}>
                <p className="underline decoration-2 decoration-blue">Read More</p>
              </Link>
             </div>
            </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>

  )

}
export default Products;