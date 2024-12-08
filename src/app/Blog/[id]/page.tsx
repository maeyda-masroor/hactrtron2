"use client"
import StarRating from "@/components/StarRating";
import Link from "next/link";
import Image from "next/image";
import Wish from '../../../public/image 1162.png';
import  dummyData  from "../../data/dummydata"; // import the dummy data
import { useState } from "react";
export default function CategoryPage({ params }: { params: { id: string } }) {
  const data = dummyData;
  const [isOpen, setIsOpen] = useState(false);
  const category = data.categories.find((cat: any) => cat.id === params.id);

  if (!category) {
    return <div>Category not found</div>;
  }
  return (
    <div></div>
  )
}
