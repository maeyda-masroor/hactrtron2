"use client"
import Link from "next/link";
import React from "react";
import Slider from "react-slick"; // Import react-slick
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme
import Image from "next/image";
import P1 from '../public/image 1.png';
type Blog = {
  id: number;
  author: string;
  date: string;
  title: string;
  image:string;
  desc:string
};
const blogs: Blog[] = [
    { id:1 ,author:'author1' , date:'12th Aug 2023', title:'Blog title 1', image: "https://via.placeholder.com/150" , desc:'this is blog for products'},
    { id:2 ,author:'author1' , date:'12th Aug 2023', title:'Blog title 1', image: "https://via.placeholder.com/150" , desc:'this is blog for products'},
    { id:3 ,author:'author1' , date:'12th Aug 2023', title:'Blog title 1', image: "https://via.placeholder.com/150" , desc:'this is blog for products'},
    { id:4 ,author:'author1' , date:'12th Aug 2023', title:'Blog title 1', image: "https://via.placeholder.com/150" , desc:'this is blog for products'},
    { id:5 ,author:'author1' , date:'12th Aug 2023', title:'Blog title 1', image: "https://via.placeholder.com/150" , desc:'this is blog for products'},
    { id:6 ,author:'author1' , date:'12th Aug 2023', title:'Blog title 1', image: "https://via.placeholder.com/150" , desc:'this is blog for products'},
    
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
          breakpoint: 1024, // lg and below
          settings: {
            slidesToShow: 1, // Show 1 slide
            vertical: true, // Enable vertical scrolling
          },
        },
      ],
    };
  return (
    <section className="space-y-4 lg:pr-56 lg:pl-56 pt-20 sm:pr-20 sm:pl-20">
        <div className="text-center">
        <h1 className="text-3xl font-semibold">Latest Blog</h1>
      </div>
      <div className="lg:block pt-10 slider-container mx-auto p-2 sm:pl-10">
      <Slider {...sliderSettings}>
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div className="w-[370px] h-[550px] bg-white group relative mx-auto">
                <Image src={blog.image} alt="c" width={370} height={100} className="p-2"/>
             <div className="w-[370px] h-[15px] flex gap-4">
                <div className="flex">
                  <Image src={P1} alt="C" height={15} width={15}/>
                  <p>{blog.author}</p>
                </div>
                <div className="flex">
                  <Image src={P1} alt="C" height={15} width={15}/>
                  <p>{blog.date}</p>
                </div>
             </div>
             <div className="h-auto">
              <h3 className="hover:text-pink text-gray-800">{blog.title}</h3>
              <p className="text-black">{blog.desc}</p>
              <Link href={`/blog/${blog.id}`}>
                <button className="underline decoration-2 decoration-blue">Read More</button>
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