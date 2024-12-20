"use client"

import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme
import Image from "next/image";
import P1 from '../public/image 1.png';
type Product = {
  id: number;
  name: string;
  discount:number;
  price: number;
  image:string
};

const products: Product[] = [
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734612124/Ecommerce/trendingproducts/image_1171_fquapa.png" , name:'Cantilever chair' , discount : 35 ,price :46 },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734612124/Ecommerce/trendingproducts/image_1169_oq3wro.png" , name:'Cantilever chair' , discount : 35 ,price :46 },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734612123/Ecommerce/trendingproducts/image_1168_nqyulx.png" , name:'Cantilever chair' , discount : 35 ,price :46 },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734612037/Ecommerce/trendingproducts/box_for_image_2_xb73so.png" , name:'Cantilever chair' , discount : 35 ,price :46 },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734612037/Ecommerce/trendingproducts/box_for_image_dcfg3l.png" , name:'Cantilever chair' , discount : 35 ,price :46 },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734612037/Ecommerce/trendingproducts/box_for_image_dcfg3l.png" , name:'Cantilever chair' , discount : 35 ,price :46 },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734612036/Ecommerce/trendingproducts/box_for_image_1_zyjdgx.png" , name:'Cantilever chair' , discount : 35 ,price :46 }
  
];

export default function TrendingProduct(){
    const sliderSettings = {
        dots: true, // Pagination dots
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 4, // Default slides visible
        slidesToScroll: 1,
         // Scroll one slide at a time
        responsive: [
          {
            breakpoint: 1024, // lg and below
            settings: {
              slidesToShow: 1, // Show 1 slide
              vertical: true, // Enable vertical scrolling
            },
          },
        ],
      };
      return ( 
      <div className="lg:block pt-10 overflow-x-hidden">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id}>
              <div className=" shadow-md rounded-lg transition-shadow duration-300 group relative mx-auto">
                <div className="w-[270px] h-[350px]  p-4">
                <Image src={product.image} width={247} height={244} alt="x"/>
                <h3 className="text-lg font-semibold mb-2 text-pink text-center">{product.name}</h3>
                <p className="text-gray-600 mb-2 text-center">Code:{product.price}<del className="text-gray-400">{product.discount}</del></p>
                </div>
                <div className="hover:bg-blue">
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      )
}