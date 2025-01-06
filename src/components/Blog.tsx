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
    { id:1 ,author:'Sober Ali' , date:'12th Aug 2023', title:'Top essential trends in 2021', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734666161/Ecommerce/blog/Rectangle_126_gyzl6g.png" , desc:'More off this less hello samlande lied much over tightly circa horse taped mightly'},
    { id:2 ,author:'Sober Ali' , date:'12th Aug 2023', title:'Top essential trends in 2021', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734666161/Ecommerce/blog/Rectangle_126_3_shwd1c.png" , desc:'More off this less hello samlande lied much over tightly circa horse taped mightly'},
    { id:3 ,author:'Sober Ali' , date:'12th Aug 2023', title:'Top essential trends in 2021', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734666161/Ecommerce/blog/Rectangle_126_1_sz3iug.png" , desc:'More off this less hello samlande lied muchover tightly circa horse taped mightly'},
    { id:4 ,author:'Sober Ali' , date:'12th Aug 2023', title:'Top essential trends in 2021', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734666161/Ecommerce/blog/Rectangle_126_2_dmc6hi.png" , desc:'More off this less hello samlande lied muchover tightly circa horse taped mightly'},
    { id:5 ,author:'Sober Ali' , date:'12th Aug 2023', title:'Top essential trends in 2021', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734662664/Ecommerce/blog/Rectangle_32_ajcezd.png" , desc:'More off this less hello samlande lied much over tightly circa horse taped mightly'},
    { id:6 ,author:'Sober Ali' , date:'12th Aug 2023', title:'Top essential trends in 2021', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734662664/Ecommerce/blog/Rectangle_32_ajcezd.png" , desc:'More off this less hello samlande lied muchover tightly circa horse taped mightly'},
    
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
        /*{
          breakpoint: 1366, // lg and below
          settings: {
            slidesToShow: 2, // Show 1 slide
            vertical: false, // Enable vertical scrolling
          },
        },*/
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
    <section className="space-y-4 lg:pr-56 lg:pl-56 pt-20 sm:pr-20 sm:pl-20">
        <div className="text-center">
        <h1 className="text-3xl font-semibold">Latest Blog</h1>
      </div>
      <div className="items-center">
      <div className="lg:block pt-10 slider-container mx-auto p-2 sm:pl-10">
      <Slider {...sliderSettings}>
          {blogs.map((blog) => (
            <div key={blog.id} className="flex justify-center">
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
             <div className="h-auto mx-auto">
              <h3 className="hover:text-pink text-gray-800">{blog.title}</h3>
              <p className="text-black">{blog.desc}</p>
              <Link href={`/Blog/${blog.id}`}>
                <button className="underline decoration-2 decoration-blue">Read More</button>
              </Link>
             </div>
            </div>

            </div>
          ))}
        </Slider>
            </div>
      </div>
    </section>

  )

}
export default Products;