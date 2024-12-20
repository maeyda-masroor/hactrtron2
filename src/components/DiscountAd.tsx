"use client"
import Link from "next/link";
import Image from "next/image";
import Ad1 from '../public/image 1161.png';
import Ad2 from '../public/image 1162.png';
interface Item {
    id: number;
    name: string;
    image:string;
    price:string
}

const DiscountAd: React.FC = () => {
    const items: Item[] = [
        { id: 1, name: "Executive Seat Chair" ,image:'https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png' ,price:'20'},
        { id: 2, name: "Executive Seat Chair" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",price:'50'},
        { id: 3, name: "Executive Seat Chair" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",price:'40'},
        { id: 4, name: "Executive Seat Chair" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",price:'20'},
        { id: 5, name: "Executive Seat Chair" ,image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734611960/Ecommerce/latestproducts/image_1_s2gxzm.png",price:'10'},
      ];
    return (
      <div className="grid grid-cols-3 gap-4 mt-20">
        {/* Column 1 - 40% width */}
        <div className="col-span-3 md:col-span-2 lg:col-span-1 bg-lightpink p-2 w-[420px] h-[250px] gap-3 ">
          <div className="text-blue">
            <h1 className="text-lg">20% off in All Products</h1>
            <p className="underline text-pink decoration-2"><Link href='/shop'>Shop Now</Link></p>
          </div>
        <div className="pl-20">
            <Image src={Ad2} alt="c" width={213} height={150}/>
        </div>
        </div>
  
        {/* Column 2 - 40% width */}
        <div className="col-span-3 md:col-span-2 lg:col-span-1 bg-lightpurple p-2 w-[420px] h-[250px]">
        <div className="text-blue">
            <h1 className="text-lg">23% off in All Products</h1>
            <p className="underline text-pink decoration-2"><Link href='/shop'>View Collection</Link></p>
          </div>
        <div className="pl-20">
            <Image src={Ad1} alt="c" width={213} height={150}/>
        </div>
         
         </div>
  
        {/* Column 3 - 20% width, hidden on sm and md */}
        <div className="hidden lg:block lg:col-span-1 text-black p-2 h-[250px] w-[267px] overflow-y-auto">
        {items.map((item) => (
        <div
          key={item.id}
          className="p-4 mb-2 bg-blue-500 text-black rounded-md shadow"
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
    );
  }
  export default DiscountAd;
  