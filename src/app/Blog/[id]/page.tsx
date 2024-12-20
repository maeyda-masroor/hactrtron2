"use client"
import StarRating from "@/components/StarRating";

import Search from '../../../public/uil_search-plus.png';
import Link from "next/link";
import Image from "next/image";
import Wish from '../../../public/image 1162.png';
import  dummyData  from "../../../app/data/dummyblogdata"; // import the dummy data
import { useState } from "react";
import dummyblogdata from "../../../app/data/dummyblogdata";
interface Item {
  id: number;
  name: string;
  image:string;
  price:string
}
interface Item1 {
  id: number;
  name: string;
  image:string;
  author:string
}
export default function CategoryPage({ params }: { params: { id: string } }) {
  const items: Item[] = [
    { id: 1, name: "Executive Seat Chair" ,image:'https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png' ,price:'20'},
    { id: 2, name: "Executive Seat Chair" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",price:'50'},
    { id: 3, name: "Executive Seat Chair" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",price:'40'},
    { id: 4, name: "Executive Seat Chair" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",price:'20'},
    { id: 5, name: "Executive Seat Chair" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",price:'10'},
  ];
  const items1: Item1[] = [
    { id: 1, name: "It is a long established fact" ,image:'https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png' ,author:'20'},
    { id: 2, name: "It is a long established fact" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",author:'50'},
    { id: 3, name: "It is a long established fact" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",author:'40'},
    { id: 4, name: "It is a long established fact" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",author:'20'},
    { id: 5, name: "It is a long established fact" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",author:'10'},
  ];

  const data = dummyData;
  const [isOpen, setIsOpen] = useState(false);
  
  const blog = data.Blogs.find((cat: any) => cat.id === params.id);

  return (
    <div><div className="grid grid-cols-1 md:grid-cols-5 gap-2 lg:pl-56 lg:pr-56 sm:pl-0 sm:pr-0">
    {/* Left section (80%) */}
    <div className="col-span-4 md:col-span-4 p-4 mt-10">
    {blog ? (
          <>
            <Image src={blog.image} alt="d" width={500} height={200}/>
            <br />
            <div className="flex gap-6 mt-10">
            <h1 className="bg-pink text-white mt-10">{blog.author}</h1>
            <h1 className="bg-violet text-white mt-10">{blog.date}</h1>
            </div>
            <h1 className="text-2xl text-violet mt-10">{blog.title}</h1>
            <p className="text-lg mt-10">{blog.name}</p>
            <p className="text-lg mt-10">{blog.description}</p>
            <div className="bg-violet text-white mt-10">{blog.quote}</div>
          </>
        ) : (
          <p>Blog not found</p>
        )}
        <div className="bg-white flex gap-40 mt-10">
          <button className="text-black">Previous</button>

          <button className="text-black">Next</button>
        </div>
        <form action="#" method="POST">
        <div className="mb-4 p-4">
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Enter subject" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <textarea 
            id="message" 
            name="message" 
            placeholder="Enter your message" 
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

    <div className="flex justify-center">
      <button 
        type="submit" 
        className="px-6 py-2 bg-pink text-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
  </form>
    </div>

    {/* Right section (20%) */}
    <div className="hidden md:col-span-1 md:block">
    <div className="search-bar flex justify-center">
            <div className="relative w-full">
            {/* Icon */}
            <span className="absolute inset-y-0 left-2 flex items-center bg-pink">
              <Image src={Search} alt="X"/>
            </span>
  
            {/* Input */}
            <input
              type="text"
              placeholder="Search..."
              className=" pl-0 rounded-none text-black w-full border-2 border-gray-300"
            />
          </div>
          </div>
          <div className="">
            <div className="flex gap-10 mt-10">
              <h1 className="text-black bg-pink">Hobbies</h1>
              <h1 className="text-black bg-pink ">Women</h1>
            </div>

            <div className="flex gap-10 mt-10">
              <h1 className="text-black bg-pink">Hobbies</h1>
              <h1 className="text-black bg-pink">Women</h1>
            </div>

            <div className="flex gap-10 mt-10">
              <h1 className="text-black bg-pink">Hobbies</h1>
              <h1 className="text-black bg-pink">Women</h1>
            </div>
          </div>
          <div>
          <div className="mt-10 mb-10">Sole Post</div>
          <div className="h-[250px] w-[267px] overflow-y-scroll mt-10 mb-10">
          {items1.map((item) => (
        <div
          key={item.id}
          className="p-4 mb-2 bg-blue-500 text-black rounded-md shadow  overflow-y-scroll"
        >
            <div className="flex gap-2">
            <div>
            <Image src={item.image} alt="c" width={64} height={71}/>
            </div>
            <div className="w-[200px] h-[33px]">
            <h1 className="text-sm">{item.name}</h1>
            <p className="text-sm">{item.author}</p>
            </div>            
            </div>
            
        </div>
      ))}
      </div>
          </div>
         
          <div className="mt-10 mb-10">Recent Product</div>
          <div className="h-[250px] w-[267px] overflow-y-scroll mt-10 mb-10">
          {items.map((item) => (
        <div
          key={item.id}
          className="p-4 mb-2 bg-blue-500 text-black rounded-md shadow  overflow-y-scroll"
        >
            <div className="flex gap-2">
            <div>
            <Image src={item.image} alt="c" width={64} height={71}/>
            </div>
            <div className="w-[200px] h-[33px]">
            <h1 className="text-sm">{item.name}</h1>
            <p className="text-sm">{item.price}</p>
            </div>            
            </div>
            
        </div>
      ))}
      </div>
          </div> 
    </div>
  </div>
  )
}
