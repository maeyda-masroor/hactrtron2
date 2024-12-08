"use client"
// components/Products.tsx
"use client";

import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
};

const products: Product[] = [
  { id: 1, name: "Product 1", description: "Description for Product 1", price: "$20" },
  { id: 2, name: "Product 2", description: "Description for Product 2", price: "$30" },
  { id: 3, name: "Product 3", description: "Description for Product 3", price: "$40" },
  { id: 4, name: "Product 4", description: "Description for Product 4", price: "$50" },
];

const Products: React.FC = () => {
  const sliderSettings = {
    dots: true, // Pagination dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Default slides visible
    slidesToScroll: 1, // Scroll one slide at a time
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
    <section className="p-4">
      {/* Slick Carousel */}
      <div className="lg:block">
        <Slider {...sliderSettings}>
          {products.map((product) => (
            <div key={product.id}>
              <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-blue-500 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </Slider>

        {/* Decorative Ellipsis Below */}
        <div className="mt-4 text-center text-gray-500 text-2xl font-bold">
          ...
        </div>
      </div>
    </section>
  );
};

export default Products;
