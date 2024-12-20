"use client"

import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme
import Image from "next/image";
import StarRating from "./StarRating";
type Product = {
  id: number;
  name: string;
  rating:number;
  price: string;
  image:string
};

const products: Product[] = [
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734611961/Ecommerce/latestproducts/image_23_aebujh.png" , name:'Men Fashion Wear' , rating : 5 ,price :'$30' },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734611961/Ecommerce/latestproducts/image_1168_rqx5of.png" , name:'Women Fashions' , rating : 1 ,price :'$30' },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_15_so7xer.png" , name:'Wolex Dummy Fashion' , rating : 2 ,price :'$30' },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734611961/Ecommerce/latestproducts/image_1168_rqx5of.png" , name:'Top Welled Digital' , rating : 5 ,price :'$30' },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734611961/Ecommerce/latestproducts/image_1168_rqx5of.png" , name:'Men fashion' , rating : 1 ,price :'$30' },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_15_so7xer.png" , name:'Womens fashion' , rating : 1 ,price :'$30' },
  { id:1 , image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734611961/Ecommerce/latestproducts/image_23_aebujh.png" , name:'Wolex Dummy fashion' , rating : 2 ,price :'$30' }
  
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
      <div className="lg:block pt-10 lg:pl-56 lg:pr-56 overflow-x-hidden">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id}>
              <div className=" shadow-md rounded-lg transition-shadow duration-300 group relative mx-auto">
                <div className="w-[270px] h-[350px]  p-4">
                <Image src={product.image} width={247} height={244} alt="x"/>
                <div className="flex">
                <h3 className="text-lg font-semibold mb-2 text-pink text-center">{product.name}</h3>
                <StarRating rating={product.rating}/>
                </div>
                <p className="text-black">{product.price}</p>
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